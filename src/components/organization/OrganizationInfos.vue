<template>
  <div>
    <b-button v-b-toggle.collapse-{idCollapse} variant="primary">{{ organizationTitle }}</b-button>
    <b-collapse v-bind:id="collapse-`${idCollapse}`">
      <b-card>
        <p class="card-text">{{ organizationDetail }}</p>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    idCollapse: String,
    organizationTitle: String,
    organizationDetail: String,
  },
  components: {
  },
};
</script>