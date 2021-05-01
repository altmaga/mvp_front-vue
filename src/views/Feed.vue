<template>
  <main>
    <OrganizationCard
      class="organization-item col-6 col-lg-4"
      v-for="organization in allOrganization"
      :key="organization._id"
      :organization="organization"
    />
    <CategoryCard
      class="category-item col-6 col-lg-4"
      v-for="category in allCategory"
      :key="category._id"
      :category="category"
    />
  </main>
</template>

<script>

  import { mapState, mapActions } from "vuex";
  import OrganizationCard from "@/components/organization/OrganizationCard";
  import CategoryCard from "@/components/category/CategoryCard";

  export default {
    name: "Feed",
    components: {
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