<template>
  <div class="">
    <div class="organization-card">
      <router-link :to="{ name: 'organizationShow', params: { id: organization._id } }">
        <div class="organization-card_name">
          <div
            class="container-fluid"
          >
            <div class="row">
              <h3>{{organization.legalName}}</h3>
              <ul v-for="category in organization.categories" :key="category._id">
                <li>{{category.name}}</li>
                <li>{{category.desc}}</li>
              </ul>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="orgaization-card-catgery">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    organization: Object,
  },
  components: {
  },
};
</script>