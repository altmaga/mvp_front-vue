<template>
  <div class="">
    <div class="category-card">
      <router-link :to="{ name: 'categoryShow', params: { id: category._id } }">
        <div class="category-card_name">
          <div
            class="container-fluid"
          >
            <div class="row">
              <h3>{{category.name}}</h3>
            </div>
          </div>
        </div>
      </router-link>
    </div>
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