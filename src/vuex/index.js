import Vue from 'vue'
import Vuex from 'vuex'
import appService from '../app.service.js'
import jwtDecode from 'jwt-decode'
import cardsModule from './cards'

// extend vue with 'use'
Vue.use(Vuex)

const state = {
  isAuthenticated: false
}

const store = new Vuex.Store({
  modules: {
    cardsModule
  },
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated
    }
  },
  actions: {
    logout (context) {
      context.commit('logout')
    },
    login: (context, credentials) => {
      return new Promise((resolve) => {
        appService.login(credentials)
          .then((data) => {
            // commit the state and token to login mutation
            context.commit('login', data)
            resolve(data)
          })
          .catch(() => { resolve('error') })
      })
    },
    initAuth: (context) => {
      return new Promise((resolve) => {
        if (typeof window !== 'undefined') {
          let exp = window.localStorage.getItem('tokenExpiration')
          var unixTimeStamp = new Date().getTime() / 1000
          if (exp !== null && parseInt(exp) - unixTimeStamp > 0) {
            context.commit('initAuth')
          } else {
            window.localStorage.clear()
          }
          resolve()
        }
        resolve()
      })
    }
  },
  mutations: {
    logout (state) {
      if (typeof window !== 'undefined') {
        window.localStorage.clear()
      }
      state.isAuthenticated = false
    },
    login (state, data) {
      let token = data.token
      let dToken = jwtDecode(token)
      let expiration = dToken.exp
      // console.log(jwtDecode(token))
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token)
        window.localStorage.setItem('tokenExpiration', expiration)
      }
      state.isAuthenticated = true
    },
    initAuth (state) {
      state.isAuthenticated = true
    }
  }
})

export default store
