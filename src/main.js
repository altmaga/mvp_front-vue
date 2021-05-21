/*
Imports
*/
  // Vue
  import Vue from 'vue';
  import Vuex from 'vuex';
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
  // Import Bootstrap an BootstrapVue CSS files (order is important)
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';

  // Inner
  import App from './App.vue';
  import store from './store/index';
  import router from "./router";
//

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

/*
Set configuration
*/
  Vue.config.productionTip = false;
  Vue.use(Vuex);
//


/*
Create app
*/
  new Vue({
    store,
    router,
    render: h => h(App),
  })
  .$mount('#app');
//