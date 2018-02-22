<template v-cloak>
  <div class="content">
    <transition-group name="fade">
    <div v-if="isAuthenticated" class="hero is-medium is-success is-bold " key="logout">
      <div class="hero-body">
        <div class="container" v-show="profileFlag">
          <h1 class="title">
            Hello {{profile.first_name}} {{profile.last_name}} ({{profile.email}})
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
                  <input v-model="username" class="input" type="text" placeholder="enter your email">
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
                  <input v-model="password" class="input" type="password" placeholder="enter your password">
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
    </transition-group>  
  </div>
</template>
<script>
import appService from '../app.service.js'
import jwtDecode from 'jwt-decode'

export default {
  data () {
    return {
      username: '',
      password: '',
      isAuthenticated: false,
      isAuthenticating: false,
      profile: {},
      profileFlag: false
    }
  },
  watch: {
    isAuthenticated: function (val) {
      if (val) {
        appService.getProfile()
          .then(profile => {
            this.profile = profile
            this.profileFlag = true
          })
      } else {
        this.profileFlag = false
        this.profile = {}
      }
    }
  },
  methods: {
    login () {
      this.isAuthenticating = true
      appService.login({username: this.username, password: this.password})
        .then((data) => {
          let token = data.token
          let dToken = jwtDecode(token)
          let expiration = dToken.exp
          // console.log(jwtDecode(token))
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('tokenExpiration', expiration)
          this.isAuthenticating = false
          this.isAuthenticated = true
          this.username = ''
          this.password = ''
        })
        .catch(() => window.alert('Could not login'))
    },
    logout () {
      window.localStorage.clear()
      this.isAuthenticated = false
      this.isAuthenticating = false
    }
  },
  created () {
    let exp = window.localStorage.getItem('tokenExpiration')
    var unixTimeStamp = new Date().getTime() / 1000
    if (exp !== null && parseInt(exp) - unixTimeStamp > 0) {
      this.isAuthenticating = false
      this.isAuthenticated = true
    }
  }
}
</script>

