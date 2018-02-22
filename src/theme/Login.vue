<template>
  <div class="content">
    <transition-group name="fade">
    <div v-if="isAuthenticated" class="hero is-medium is-success is-bold is-fullheight" key="logout">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Hello {{fullName}} ({{email}})
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
      email: '',
      fullName: ''
    }
  },
  methods: {
    login () {
      this.isAuthenticating = true
      this.fullName = ''
      this.email = ''
      appService.login({username: this.username, password: this.password})
        .then((data) => {
          let token = data.token
          let dToken = jwtDecode(token)
          let expiration = dToken.exp
          let email = dToken.user.email
          let fullName = dToken.user.first_name + ' ' + dToken.user.last_name
          // console.log(jwtDecode(token))
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('tokenExpiration', expiration)
          window.localStorage.setItem('email', email)
          window.localStorage.setItem('fullName', fullName)
          this.fullName = window.localStorage.getItem('fullName')
          this.email = window.localStorage.getItem('email')
          this.isAuthenticating = false
          this.isAuthenticated = true
          this.username = ''
          this.password = ''
        })
        .catch(() => window.alert('Could not login'))
    },
    logout () {
      window.localStorage.setItem('token', null)
      window.localStorage.setItem('tokenExpiration', null)
      window.localStorage.setItem('email', null)
      window.localStorage.setItem('fullName', null)
      this.isAuthenticated = false
      this.isAuthenticating = false
    }
  },
  created () {
    let exp = window.localStorage.getItem('tokenExpiration')
    var unixTimeStamp = new Date().getTime() / 1000
    if (exp !== null && parseInt(exp) - unixTimeStamp > 0) {
      this.fullName = window.localStorage.getItem('fullName')
      this.email = window.localStorage.getItem('email')
      this.isAuthenticating = false
      this.isAuthenticated = true
    }
  }
}
</script>

