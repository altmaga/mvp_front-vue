<template>
  <div>
      <form action="" v-on:submit="getFormSubmit($event)">
      <label for="email">Email</label>
      <input type="email" name="email" required minlength="5" v-model="loginEmail">

      <label for="password">Mot de passe</label>
      <input type="password" name="password" required minlength="5" v-model="loginPassword">

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "FormLogin",
    components: {},

    data(){
      return {
       loginEmail: 'alice@user.fr',
       loginPassword: 'alice85'
      }
    },

    methods:{
      // Method to log user with store action
      getFormSubmit(event){
        // Disable event
        event.preventDefault();

        // Dispatch store action
        this.$store.dispatch('logUser', { email: this.loginEmail, password: this.loginPassword })
      }
    },

    created(){},
    mounted(){},
    destroyed(){}
  };
</script>