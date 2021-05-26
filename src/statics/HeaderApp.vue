<template>
  <header class="container header">
      <nav class="row">
          <div class="col-12">
              <div class="header-item">
                <div class="logo">
                    <img src="@/assets/img/logo_header.svg" alt="" />
                </div>
                <div class="menu"
                    :class="{ 'active' : isBurgerActive }"
                    >
                    <button class="close" @click.prevent="closeMenu"><i class="fa fa-window-close"></i></button>
                    <div class="menu_list">
                        <p class="menu_list-item">Feed</p>
                        <p class="menu_list-item">Feed</p>
                        <p class="menu_list-item">Feed</p>
                        <p class="menu_list-item">Feed</p>
                        <router-link :to="{ name: 'profileShow'}" class="menu_list-item">
                            Account
                        </router-link>
                    </div>
                </div>
                <div class="actions">
                    <!-- <button v-if="isAuth" type="button" class="button" v-on:click="logoutUser"><i class="fa fa-user" aria-hidden="true"></i></button> -->
                    <button class="actions-menu" @click.prevent="openMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
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
                subTitle: undefined,
                isBurgerActive: false
            }
        },
        methods: {
            // Method to logout user with store action
            logoutUser(){ this.$store.dispatch('logoutUser') },

            openMenu(){
                this.isBurgerActive = true
            },
            closeMenu(){
                this.isBurgerActive = false
            }
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
    .header {
        position: relative;
        padding-bottom: 30px;

        &-item {
            .menu {
                position: fixed;
                top: 0;
                z-index: 10;
                width: 100vw;
                height: 100vh;
                right: -100vh;
                background-color: $flashpurple;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all .8s cubic-bezier(0.075, 0.82, 0.165, 1);

                &.active {
                    right: 0;
                    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

                .close {
                    background-color: inherit;
                    position: absolute;
                    top: 20px;
                    right: 20px;

                    i {
                        color: $white;
                    }
                }

                &_list {
                    &-item {
                        color: $white;
                        margin: 20px 0;
                    }
                }
            }

            .actions {
                &-menu {
                    span {
                        width: 20px;
                        height: 2px;
                        display: block;
                        background-color: $flashpurple;
                        border-radius: 5px;

                        &:first-child {
                            margin-bottom: 5px;
                        }

                        &:last-child {
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }
</style>
