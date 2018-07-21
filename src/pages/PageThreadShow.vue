<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <PostList :posts="posts"/>
    <PostEditor @save="addPost" :threadId="id"/>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'
  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },

    data () {
      return {
        thread: sourceData.threads[this.id],
        newPostText: ''
      }
    },

    computed: {
      posts () {
        const postIds = Object.values(this.thread.posts)
        // Convert object y array && Filter in Posts by id
        return Object.values(sourceData.posts)
          .filter(post => postIds.includes(post['.key']))
      }
    },

    components: {
      PostList,
      PostEditor
    },

    methods: {
      addPost (eventData) {
        // Vue set method to reactive changes
        // set(Object, propertyName, value)     [ Object -> Objeto al que queremos agregar la nueva propiedad, propertyName -> Nombre de la propiedad a agregar, Value -> Valor de la propiedad ]
        const post = eventData.post
        const postId = eventData.post['.key']

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    }
  }
</script>

<style scoped>

</style>
