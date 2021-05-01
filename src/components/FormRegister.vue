<template>
  <div>
      <form action="" v-on:submit="getFormSubmit($event)">
      <label for="givenName">Name</label>
      <input type="text" name="givenName" required minlength="5" v-model="givenName">

      <label for="familyName">Family Name</label>
      <input type="text" name="familyName" required minlength="5" v-model="familyName">

      <label for="email">Email</label>
      <input type="email" name="email" required minlength="5" v-model="loginEmail">

      <label for="password">Mot de passe</label>
      <input type="password" name="password" required minlength="5" v-model="loginPassword">

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "FormRegister",
    components: {},
    data(){
      return {
        givenName: 'Alice',
        familyName: 'Mouchard',
        loginEmail: 'placeholder@email.io',
        loginPassword: 'motdepasse'
      }
    },

    methods:{
      // Method to log user with store action
      getFormSubmit(event){
        // Disable event
        event.preventDefault();

        // Dispatch store action
        this.$store.dispatch('registerUser', { givenName: this.givenName, familyName: this.familyName, email: this.loginEmail, password: this.loginPassword })
      }
    },

    created(){},
    mounted(){},
    destroyed(){}
  };
</script>