import Vue from 'vue'

Vue.options.delimiters = ['{%', '%}']

const app = new Vue({
  data: {
    hi: 'hello there!!!'
  },
  template: `<div id='app'>{%hi%}</div>`
})

export {app}
