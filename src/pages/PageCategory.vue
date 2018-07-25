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
  import sourceData from '@/data'
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
        return sourceData.categories[this.id]
      },

      categoryForums () {
        return Object.values(sourceData.forums)
          .filter(forum => {
            return forum.categoryId === this.id
          })
      }
    }
  }
</script>

<style scoped>
  .category-listing {
    width: 100%;
  }
</style>
