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
    created(){
      // Subscribe to store mutations
      this.$store.subscribe((mutations) => {
          // Check mutations
          if( mutations.type === "USER" ){
              // Set Auth navigation
              this.isAuth = this.$store.getters.isAuthenticated;

              // Redirect user when connected
              this.$router.push('/login').catch( () => {} )
          }
      })
    }
  }
</script>