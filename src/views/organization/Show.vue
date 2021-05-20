<template>
  <div class="organization_detail">
    <div class="container-fluid organization_detail-bg" :style="{backgroundImage:`url(${organization.bg})`}">
      <div class="overlay"></div>
      <ul class="socials">
        <li><a v-bind:href="`tel:${organization.phone}`" class="socials-item"><i class="fa fa-phone" aria-hidden="true"></i>{{organization.phone}}</a></li>
        <li><a v-bind:href="`${organization.fb}`" class="socials-item"><i class="fa fa-facebook" aria-hidden="true"></i></a>{{organization.fb}}</li>
        <li><a v-bind:href="`${organization.insta}`" class="socials-item"><i class="fa fa-instagram" aria-hidden="true"></i></a>{{organization.insta}}</li>
      </ul>
    </div>
    <div class="container organization_detail-content">
      <div v-if="organization" class="organization">
        <h3>{{organization.legalName}}</h3>
        <p>{{organization.address}}</p>
        <p>{{organization.delivery}}</p>
        <p>{{organization.hours}}</p>

        <div class="product_list">
          <ProductCard
            v-for="product in organization.products"
            :key="product._id"
            :product="product"
          />
        </div>
      </div>
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
.organization_detail {
  &-bg {
    position: relative;
    background-size: cover;
    min-height: 300px;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 150px;
      z-index: 1;
      width: 100%;
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.45) 100%);
    }

    .socials {
      padding: 12px 30px;
      border-radius: 40px;
      background-color: $black;
      margin-bottom: 18px;
      display: flex;
      align-items: center;

      &-item {
        color: $flashpurple;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin: 0 5px;

        i {
          margin: 0 5px;
          background-color: $white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>