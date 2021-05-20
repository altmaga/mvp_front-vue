<template>
    <div class="product_card">
      <div class="product_card-img" v-if="product.img">
        <img v-bind:src="`${product.img}`">
      </div>
      <div class="product_card-name">
        <p>{{ product.name }}</p>
        <p>{{ product.desc }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  components: {
  },
};
</script>