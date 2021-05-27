/*
Imports and config
*/
    // Vue
    import Vuex from "vuex";
    import Vue from "vue";
    import createPersistedState from "vuex-persistedstate";

    // Inner
    import auth from "./modules/auth";
    import organization from "./modules/organization";
    import category from "./modules/category";
    import user from "./modules/user";

    // Set up Vuex
    Vue.use(Vuex);
//



/*
Export store
*/
    export default new Vuex.Store({
        modules: {
            auth,
            organization,
            category,
            user
        },
        plugins: [
            createPersistedState()
        ]
    });
//