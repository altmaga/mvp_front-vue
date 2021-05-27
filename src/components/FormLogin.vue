<template>
  <div class="container-fluid form" :style="cssProps">
    <div class="row">
      <div class="col-12">
        <div class="form_head">
          <h1>Mes petits <span>commerçants</span></h1>
        </div>
        <form action="" v-on:submit="getFormSubmit($event)" class="form_detail">
          <div class="item">
            <input type="email" name="email" required minlength="5" v-model="loginEmail" class="input">
          </div>
          <div class="item">
            <input type="password" name="password" required minlength="5" v-model="loginPassword" class="input">
          </div>
          <div class="item">
            <button type="submit" class="input submit">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* import mapActions from 'vuex' */
  export default {
    name: "FormLogin",
    components: {},

    data(){
      return {
       loginEmail: 'Email',
       loginPassword: 'Mot de passe',
        cssProps: {
          backgroundImage: `url(${require('@/assets/img/bg_form.png')})`
        }
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

<style lang="scss">
.form {
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;

  .row {
    height: 100%;

    .col-12 {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
    }
  }

  &_head {
    text-align: center;
    h1 {
      font-size: 40px;
      color: $white;
      margin-bottom: 50px;
    }
  }

  &_detail {
      .item {
        display: flex;
        align-items: center;
        width: 80%;
                  margin-left: auto;
          margin-right: auto;

        .input {
          width: 100%;
          padding: 20px 25px;
          font-size: 18px;
          color: $white;
          font-weight: $regular;
          border-radius: 20px;
          border: 0;
          background-color: rgba($black, .2);
          margin-bottom: 10px;

          &:focus,
          &:focus-visible {
            outline: 0;
          }

          &.submit {
            background-color: $flashpurple;
          }
        }
      }
  }
}
</style>