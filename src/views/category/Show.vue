<template>
  <div class="container category-container">
    <div v-if="category" class="category">
      <h3>{{category.name}}</h3>
      <h3>{{category.desc}}</h3>
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
      fetchOneCategory: "category/fetchOneCategory",
    }),
  },
  mounted() {
    this.fetchOneCategory(this.$route.params.id);
  },
};
</script>