<template>
  <router-link :to="{ name: 'categoryShow', params: { id: category._id } }" class="category-card">
    <div class="category-card_name">
      <h3>{{category.name}}</h3>
    </div>
  </router-link>
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
  padding: 20px 40px;
  text-decoration: none;
  color: $white;
  border-radius: 12px;

  &_name {
    h3 {
      font-weight: $bold;
      margin-bottom: 0;
    }
  }

  &:nth-child(odd){
    background: $gradient-1;
  }

  &:nth-child(even){
    background: $gradient-2;
  }
}
</style>