import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

Vue.options.delimiters = ['{%', '%}']

const app = new Vue({
  ...AppLayout
})

export {app}
