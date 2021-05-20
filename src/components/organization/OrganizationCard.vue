<template>
  <div>
    <router-link :to="{ name: 'organizationShow', params: { id: organization._id } }" class="organization-card">
      <div class="organization-card_bg" :style="{backgroundImage:`url(${organization.bg})`}">
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
};
</script>

<style lang="scss">
.organization-card {
  display: block;
  border-radius: 8px;
  box-shadow: 0px 10px 50px -7px #E3E3E3;
  overflow: hidden;
  position: relative;
  margin-bottom: 18px;
  text-decoration: none;

  &_bg {
    height: 170px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &_content {
    padding: 15px;
    color: $purple;

    .top {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      h3 {
        margin-top: 0;
        font-size: 22px;
        font-weight: $bold;
        text-decoration: inherit;
        text-transform: capitalize;
        margin-bottom: 0;
      }

      .organization-card_list-category {
        p {
          margin: 0;
          padding: 3px 12px;
          background-color: $flashpurple;
          font-size: 12px;
          color: $white;
          border-radius: 22px;
          margin: 0 5px;
        }
      }
    }

    .address {
      p {
        color: $grey;
        font-weight: $regular;
      }
    }
  }

  &:hover {
    color: inherit;
  }
}
</style>
