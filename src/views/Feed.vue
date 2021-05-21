<template>
  <section>
    <HeaderApp/>
    <div class="container">
      <div class="row">
        <div class="col-12 feed-category">
          <div class="category-title general-title">
            <h2>Les catégories</h2>
          </div>
          <CategoryCard
            v-for="category in allCategory"
            :key="category._id"
            :category="category"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 feed-organization">
          <div class="organization-title general-title">
            <h2>Les boutiques</h2>
          </div>
          <OrganizationCard
            v-for="organization in allOrganization"
            :key="organization._id"
            :organization="organization"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  import HeaderApp from '@/statics/HeaderApp'
  import { mapState, mapActions } from "vuex";
  import OrganizationCard from "@/components/organization/OrganizationCard";
  import CategoryCard from "@/components/category/CategoryCard";

  export default {
    name: "Feed",
    components: {
      HeaderApp,
      OrganizationCard,
      CategoryCard
    },
    data(){
      return {
      }
    },
    computed: {
      ...mapState({
        allOrganization: (state) => state.organization.allOrganization,
        allCategory: (state) => state.category.allCategory,
      })
    },
    methods: {
      ...mapActions({
        fetchAllOrganization: "organization/fetchAllOrganization",
        fetchAllCategory: "category/fetchAllCategory",
      })
    },

    created(){},
    mounted(){
      this.fetchAllOrganization(),
      this.fetchAllCategory()
    },
    destroyed(){}
  };
</script>