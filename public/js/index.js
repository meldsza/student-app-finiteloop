const getToken = () => localStorage.getItem("token");
const setToken = (token) => localStorage.setItem("token", token);
let user = false;





let LoginForm = 

 {
        template: `<div id="login" v-cloak>
        <div class="container">
          <h1 class="text-center">Sign in to your account</h1>
          <div class="login-form-container">
            <hr/>
            <ajax-form action="login" @submitted="login()">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="USN/Email Address" :class="[formErrors.emailAddress ? 'is-invalid' : '']" v-model.trim="formData.emailAddress"
                  autocomplete="email" focus-first>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" :class="[formErrors.password ? 'is-invalid' : '']" v-model.trim="formData.password"
                  autocomplete="current-password">
              </div>
              <p class="text-danger" v-if="cloudError==='badCombo'"><small>The credentials you entered are not associated with
                  an account. Please check your email and/or password and try again.</small></p>
              <p class="text-danger" v-else-if="cloudError"><small>An error occured while processing your request. Please check
                  your information and try again, or <a href="/contact">contact support</a> if the error persists.</small></p>
              <div class="form-group">
                <ajax-button :syncing="syncing" class="btn-dark btn-lg btn-block">Sign in</ajax-button>
              </div>
            </ajax-form>
          </div>
        </div>
      </div>`

}
const routes = [
  { path: '/login', component: LoginForm },
  { path: '/register', component: RegisterForm }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')
if (getToken() && getToken() != "") {
    Vue.http.headers.common['Authorization'] = `Bearer ${getToken()}`;
    this.$http.get('/api/me').then(response => {
        if (response.body.id)
            user = response.body;
    }).catch(showLogin);
}
