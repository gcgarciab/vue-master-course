<template>
  <div>
    <h1>Welcome to the forum</h1>
    <div v-for="thread in threads">
      <h2>{{thread.title}}</h2>
      <div v-for="postId in thread.posts">
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import sourceDate from '@/data'
  console.log(sourceDate)

  export default {
    name: 'HelloWorld',
    data () {
      return {
        threads: sourceDate.threads,
        posts: sourceDate.posts,
        users: sourceDate.users
      }
    }
  }
</script>
