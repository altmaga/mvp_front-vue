<template>
  <div id="app">
    <HeaderApp/>

    <main>
      <router-view :key="$route.fullPath"></router-view>
    </main>

    <!-- <FooterApp/> -->
  </div>
</template>

<script>
  import HeaderApp from './statics/HeaderApp'

  export default {
    name: 'App',
    components: {
      HeaderApp
    },
    data(){
      return{}
    },
    created(){}
  }
</script>