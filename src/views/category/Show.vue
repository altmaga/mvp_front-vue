<template>
  <div class="container-fluid category_detail">
    <div v-if="category" class="category_detail-bg row">
      <div class="back" @click="$router.go(-1)">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div class="col-12">
        <h3>{{category.name}}</h3>
        <p>{{category.desc}}</p>
      </div>
    </div>
    <div class="category_detail-content row" v-if="category.organizations.length > 0">
      <div class="col-12">
        <div class="category-title general-title">
          <h2>Toutes les commerces</h2>
        </div>
        <div v-for="item in category.organizations" :key="item._id">
          <router-link :to="{ name: 'organizationShow', params: { id: item._id } }" class="organization-card">
            <div class="organization-card_bg" :style="{backgroundImage:`url(${item.bg})`}">
            </div>
            <div class="organization-card_content">
              <div class="top">
                <h3>{{item.legalName}}</h3>
                <div v-for="category in item.categories" :key="category._id" class="organization-card_list-category">
                  <p>{{category.name}}</p>
                </div>
              </div>
              <div class="address">
                <p>{{item.address}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "categoryShow",
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      category: (state) => state.category.oneCategory,
    })
  },
  methods: {
    ...mapActions({
      fetchAllOrganization: "organization/fetchAllOrganization",
      fetchOneCategory: "category/fetchOneCategory",
    }),
  },
  mounted() {
    this.fetchOneCategory(this.$route.params.id);
  },
};
</script>
<style lang="scss">
  .category_detail {
    &-bg {
      position: relative;
      background: $gradient-1;
      min-height: 150px;

      > .col-12 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .back {
        position: absolute;
        top: 10px;
        left: 15px;
        font-size: 26px;
        color: $purple;
        z-index: 2;
        width: auto;
      }
    }

    &-content {
      padding-top: 50px;
    }
  }
</style>