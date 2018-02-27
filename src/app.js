import Vue from 'vue'
import store from './vuex/index.js'
import AppLayout from './theme/Layout.vue'
import router from './router'

Vue.options.delimiters = ['{%', '%}']

const app = new Vue({
  router,
  // include the router module and spread operator all the components in the AppLayout .vue file
  ...AppLayout,
  store
})

export { app, router, store }
