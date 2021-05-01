<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="organization-title general-title col-12">
          <h2>Les boutiques</h2>
        </div>
        <OrganizationCard
          class="organization-item col-12"
          v-for="organization in allOrganization"
          :key="organization._id"
          :organization="organization"
        />
      </div>
    </div>
    <div class="container">
      <div class="row">
          <CategoryCard
            class="category-item col-12"
            v-for="category in allCategory"
            :key="category._id"
            :category="category"
          />
      </div>
    </div>
  </section>
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