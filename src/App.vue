<template>
  <div id="app">
    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>

    <!-- <FooterApp/> -->
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    data(){
      return{}
    },
    created(){}
  }
</script>