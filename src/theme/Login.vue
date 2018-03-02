<template v-cloak>
  <div class="content">
    <transition-group name="fade">
    <div v-if="isAuthenticated" class="hero is-medium is-success is-bold " key="logout">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hello Authenticated User
          </h1>
          <h2 class="subtitle">
            Looking good
          </h2>
          <button v-on:click="logout()" class="button">
            Logout
          </button>
        </div>
      </div>
    </div>
    <div class="hero is-medium is-primary is-bold is-medium" v-else key="login">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">Login</h2>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-white">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input v-on:keyup.13="login()" v-model="username" class="input" type="text" placeholder="enter your email">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label has-text-white">Password</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input v-on:keyup.13="login()" v-model="password" class="input" type="password" placeholder="enter your password">
                </div>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label">
              <!-- Left empty for spacing -->
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button v-on:click="login()" v-bind:class="['button', {'is-loading': isAuthenticating}]">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
    <div class="modal is-active"
      v-show="loginError"
      @close="loginError = false" key="loginErrorModal">
      <div class="modal-background" @click="loginError = false"></div>
      <div class="modal-content">
        <div class="box has-text-centered">
          <h2><span class="has-text-danger">X</span> There was a problem logging you in :(</h2>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="loginError = false"></button>
    </div>
    </transition-group>  
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      // isAuthenticated: false,
      // profile: {},
      // profileFlag: false,
      isAuthenticating: false,
      loginError: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    /*
    You can dispatch actions in components with this.$store.dispatch('xxx'), 
    or use the mapActions helper which maps component methods to store.dispatch calls (requires root store injection)
    */
    ...mapActions({
      logout: 'logout'
    }),
    login () {
      this.isAuthenticating = true
      this.$store.dispatch('login', { username: this.username, password: this.password })
        .then((data) => {
          this.isAuthenticating = false
          if (data === 'error') {
            this.loginError = true
          } else {
            this.isAuthenticating = false
            this.username = ''
            this.password = ''
            var self = this
            setTimeout(function () {
              self.$router.push(self.$route.query.redirect || '/')
            }, 1000)
          }
        })
    }
  }
}
</script>

