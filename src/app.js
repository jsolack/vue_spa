import Vue from 'vue'

Vue.options.delimiters = ['{%', '%}']

Vue.component('app', {
  template: `
    <div id="app">
    <nav class="nav has-shadow">
    <div>
      <a href="/">
        <img src="../static/img/logo.png" alt="vue spa" />
      </a>
    </div>
    </div>
  `
})

const app = new Vue({
  data: {
    hi: 'hello there!!!'
  }
})

export {app}
