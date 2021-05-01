/*
Imports and config
*/
    // Vue
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);

    // Inner
    import store from '../store';
//

/*
Router definitions
*/
    // Routes collection
    const routes = [
        {
            path: '/',
            name: 'Feed',
            component: () => import('../views/Feed.vue'),
            meta: {
                // Define protected route
                requiresAuth: true
            }
        },
        {
            path: '/organization/:id',
            name: 'organizationShow',
            component: () => import('../views/organization/Show.vue'),
        },
        {
            path: '/category/:id',
            name: 'categoryShow',
            component: () => import('../views/category/Show.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            // Catch undefined views
            path: '*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue')
        }
    ]

    // Create router
    const router = new VueRouter({
        mode: 'history',
        routes
    })
//


/*
Set basic AuthGuard with store getters
*/
    router.beforeEach((to, from, next) => {
        // Set auth values
        const authenticatedUser = store.getters.isAuthenticated;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

        // Check for protected route
        if (requiresAuth && !authenticatedUser) next({ path: '/login' })
        else next();
    });
//


/*
Export Router
*/
    export default router
//