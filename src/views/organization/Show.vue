<template>
  <div class="container organization-container">
    <div v-if="organization" class="organization">
      <h3>{{organization.legalName}}</h3>
      <p>{{organization.address}}</p>
      <p>{{organization.delivery}}</p>
      <p>{{organization.hours}}</p>
      <p>{{organization.phone}}</p>
      <p>{{organization.fb}}</p>
      <p>{{organization.insta}}</p>

      <ProductCard
        class="product-item col-6 col-lg-4"
        v-for="product in organization.products"
        :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProductCard from "@/components/product/ProductCard";

export default {
  name: "organizationShow",
  components: {
    ProductCard
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      organization: (state) => state.organization.oneOrganization,
    })
  },
  methods: {
    ...mapActions({
      fetchOneOrganization: "organization/fetchOneOrganization",
    }),
  },
  mounted() {
    this.fetchOneOrganization(this.$route.params.id);
  },
};
</script>

<style lang="scss">
  .organization-card {

  }
</style>