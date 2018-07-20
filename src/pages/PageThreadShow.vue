<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <PostList :posts="posts"/>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="newPostText"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import PostList from '@/components/PostList'
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
      PostList
    },

    methods: {
      addPost () {
        // Add post to the Post object
        const postId = 'greatPost' + Math.random()
        const post = {
          text: this.newPostText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.id,
          userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
          '.key': postId
        }
        // Vue set method to reactive changes
        // set(Object, propertyName, value)     [ Object -> Objeto al que queremos agregar la nueva propiedad, propertyName -> Nombre de la propiedad a agregar, Value -> Valor de la propiedad ]

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
        this.newPostText = ''
      }
    }
  }
</script>

<style scoped>

</style>
