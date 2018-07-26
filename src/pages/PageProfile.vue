<template>
  <div class="flex-grid">

    <UserProfileCard
      v-if="!edit"
      :user="user"
      :userThreadsCount="userThreadsCount"
      :userPostCount="userPostCount"
    />

    <UserProfileCardEditor
      v-else
      :user="user"
      :userThreadsCount="userThreadsCount"
      :userPostCount="userPostCount"
    />

    <!--<div class="col-3 push-top">-->

      <!--<p class="text-xsmall text-faded text-center">Member since june 2003, last visited 4 hours ago</p>-->

      <!--<div class="text-center">-->
        <!--<hr>-->
        <!--<a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>-->
      <!--</div>-->

    <!--</div>-->

    <div class="col-7 push-top">

      <div class="profile-header">
        <span class="text-lead">
            Joker's recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>

      <hr>

      <PostList :posts="userPosts" />
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import PostList from '@/components/PostList'
  import UserProfileCard from '@/components/UserProfileCard'
  import UserProfileCardEditor from '@/components/UserProfileCardEditor'
  import {countObjectProperties} from '@/utils'

  export default {
    components: {
      PostList,
      UserProfileCard,
      UserProfileCardEditor
    },

    props: {
      edit: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      ...mapGetters({
        'user': 'authUser'
      }),

      userThreadsCount () {
        return countObjectProperties(this.user.threads)
      },

      userPostCount () {
        return countObjectProperties(this.user.posts)
      },

      userPosts () {
        if (this.user.posts) {
          return Object.values(this.$store.state.posts)
            .filter(post => post.userId === this.user['.key'])
        }
        return []
      }
    }
  }
</script>

<style scoped>

</style>
