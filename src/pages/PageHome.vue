<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ForumList :forums="forums"/>
  </div>
</template>

<script>
  import sourceDate from '@/data'
  import ForumList from '@/components/ForumList'
  console.log(sourceDate)

  export default {
    components: {
      ForumList
    },

    data () {
      return {
        forums: Object.values(sourceDate.forums),
        posts: sourceDate.posts,
        users: sourceDate.users
      }
    }
  }
</script>
