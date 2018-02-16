import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'

Vue.options.delimiters = ['{%', '%}']

// include the router module and spread operator all the components in the AppLayout .vue file
const app = new Vue({
  router,
  ...AppLayout
})

export { app, router }
