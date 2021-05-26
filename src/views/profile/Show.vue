<template>
  <div class="container profile-container">
    ACCOUNT
    <!-- {{ user.givenName }} -->
  </div>
</template>

<script>

export default {
  name: "profileShow",
  components: {},
  data() {
    return {
      isAuth: this.$store.getters.isAuthenticated,
    };
  },
  methods: {
      // Method to logout user with store action
      // logoutUser(){ this.$store.dispatch('logoutUser') }
    checkDataUser() {
      this.$store.dispatch('checkUser');
    },
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
  },
  mounted() {
    this.checkDataUser();
  }
};
</script>