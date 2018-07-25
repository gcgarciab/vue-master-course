<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
  import CategoryList from '@/components/CategoryList'

  export default {
    components: {
      CategoryList
    },

    computed: {
      categories () {
        return this.$store.state.categories
      }
    }
  }
</script>
