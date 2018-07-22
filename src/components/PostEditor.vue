<template>
  <form @submit.prevent="save">
    <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="text"
        ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      threadId: {
        required: true,
        type: String
      }
    },

    data () {
      return {
        text: ''
      }
    },

    methods: {
      save () {
        // Add post to the Post object
        const postId = 'greatPost' + Math.random()
        const post = {
          text: this.text,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: 'jUjmgCurRRdzayqbRMO7aTG9X1G2',
          '.key': postId
        }

        this.text = ''

        // Communication with parent -> custom events
        // emit(nameEvent, args) -> args like data that be sending to event listener
        this.$emit('save', {post})
      }
    }
  }
</script>

<style scoped>

</style>
