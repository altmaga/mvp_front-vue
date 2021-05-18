<template>
  <header class="container header">
      <nav class="row">
          <div class="col-12">
              <div class="header-item">
                <div class="logo">
                    <img src="@/assets/img/logo_header.svg" alt="" />
                </div>
                <div class="actions">
                    <button v-if="isAuth" type="button" class="button" v-on:click="logoutUser"><i class="fa fa-sign-out" aria-hidden="true"></i></button>
                    <button><i class="fa fa-bars" aria-hidden="true"></i></button>
                </div>
              </div>
          </div>
      </nav>
  </header>
</template>

<script>
    export default {
        name: 'HeaderApp',
        components: {},
        data(){
            return {
                isAuth: this.$store.getters.isAuthenticated,
                subTitle: undefined
            }
        },
        methods: {
            // Method to logout user with store action
            logoutUser(){ this.$store.dispatch('logoutUser') }
        },

        watch:{
            // Watch route value changes to display the header sub-title
            $route(to, from){
                // Switch route name
                switch(to.name){
                    case 'NotFound':
                        this.subTitle = 'Page introuvable'
                    break;

                    case 'Feed':
                        this.subTitle = `Page d'accueil : privée`
                    break;

                    case 'Login':
                        this.subTitle = `Page login : public`
                    break;

                    default:
                        this.subTitle = undefined
                    break;
                }
            }
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
        mounted(){ }
    }
</script>

<style lang="scss">
</style>
