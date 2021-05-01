const apiUrlAuth = `${process.env.VUE_APP_API_URL}/auth/`;

export default {
    state: {
        // Define states
        user: undefined,
    },

    getters: {
        // Define getters
        getUser: (state) => state.user,
        isAuthenticated: (state) => !!state.user,
    },

    mutations: {
        // Define mutations
        USER( state, payload ){ state.user = payload.data },
    },

    actions: {
        // [AUTH] Method to get user data from JWT
        checkUser(context){
            fetch( `${apiUrlAuth}me`, { method: `GET`, credentials: `include`}) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then(  async apiResponse => await context.commit(`USER`, { data: apiResponse })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        // [AUTH] Method to log user with credentials
        logUser(context, data){
            //=> Fetch API
            fetch( `${apiUrlAuth}login`, {
                method: `POST`,
                body: JSON.stringify({ email: data.email, password: data.password }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: `include`
            })
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async apiResponse => await context.commit(`USER`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        // [AUTH] Method to log user with credentials
        registerUser(context, data){
            //=> Fetch API
            fetch( `${apiUrlAuth}register`, {
                method: `POST`,
                body: JSON.stringify({ givenName: data.givenName, familyName: data.familyName, email: data.email, password: data.password }),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: `include`
            })
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async apiResponse => await context.commit(`USER`, { data: apiResponse.data })) //=> Commit changes
            .catch( apiError => console.log(apiError)) //=> Catch error
        },

        //[AUTH] Method to logout user
        logoutUser(context){
            fetch( `${apiUrlAuth}logout`, {  method: `GET` }) //=> Fetch API
            .then( response => !response.ok ? console.log(response) : response.json(response)) //=> Check response
            .then( async (apiResponse) => await context.commit(`USER`, { data: undefined })) //=> Commit changes
            .catch( apiError => console.log(apiError)) // Catch error
        }
    }
}