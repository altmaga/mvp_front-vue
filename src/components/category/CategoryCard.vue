<template>
  <div>
    <router-link :to="{ name: 'categoryShow', params: { id: category._id } }" class="category-card">
      <div class="category-card_name">
        <h3>{{category.name}}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
  },
  components: {
  },
};
</script>

<style lang="scss">
.category-card {
  display: inline-block;
  padding: 20px;
}
</style>