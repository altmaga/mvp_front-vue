<template>
  <div class="">
    <div class="product-card">
      <div class="product-card_bg" style="background-image: url('https://via.placeholder.com/350x150')">
      </div>
        <div class="product-card_name">
          <div
            class="container-fluid"
          >
            <div class="row">
              <p>{{ product.name }}</p>
              <p>{{ product.desc }}</p>
            </div>
          </div>
        </div>
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