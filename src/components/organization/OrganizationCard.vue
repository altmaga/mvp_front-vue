<template>
  <div>
    <router-link :to="{ name: 'organizationShow', params: { id: organization._id } }" class="organization-card">
      <div class="organization-card_bg" :style="{backgroundImage:`url(${organization.bg})`}">
      <button @click.prevent="toggleLike" class="system-like">
        <i class="fa fa-heart" aria-hidden="true" :class="{ 'like' : isLiked }"></i>
      </button>
      </div>
      <div class="organization-card_content">
        <div class="top">
          <h3>{{organization.legalName}}</h3>
          <div v-for="category in organization.categories" :key="category._id" class="organization-card_list-category">
            <p>{{category.name}}</p>
          </div>
        </div>
        <div class="address">
          <p>{{organization.address}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    organization: Object,
  },
  components: {
  },
  data(){
    return {
      isLiked: false
    }
  },
  methods: {
    toggleLike(){
      this.isLiked = !this.isLiked
    }
  }
};
</script>

<style lang="scss">
</style>
