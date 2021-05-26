<template>
    <div class="product-card">
      <div class="product-card_img" v-if="product.img">
        <!-- <img v-bind:src="`${product.img}`"> -->
        <div class="img" :style="{backgroundImage:`url(${product.img})`}"></div>
      </div>
      <div class="product-card_content">
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
<style lang="scss">
.product-card {
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  &_img {
    .img {
      margin-right: 15px;
      width: 150px;
      height: 110px;
      background-size: cover;
      border-radius: 12px;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
  &_content {

  }
}
</style>