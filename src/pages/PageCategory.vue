<template>
  <div class="category-listing">
    <div class="col-full push-top">
      <h1>{{category.name}}</h1>
      <CategoryListItem :category="category" />
    </div>
  </div>
</template>

<script>
  import ForumListItem from '@/components/ForumListItem'
  import CategoryListItem from '../components/CategoryListItem'
  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },

    components: {
      CategoryListItem,
      ForumListItem
    },

    computed: {
      category () {
        return this.$store.state.categories[this.id]
      }
    }
  }
</script>

<style scoped>
  .category-listing {
    width: 100%;
  }
</style>
