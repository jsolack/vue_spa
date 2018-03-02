import 'es6-promise/auto'
import Vue from 'vue'
import store from '../../../src/vuex/index.js'
import VueRouter from 'vue-router'
import Login from '../../../src/theme/Login.vue'

describe('Login.vue', () => {
  it('should redirect to "Login" route on entry if not auth', done => {
    Vue.use(VueRouter)
    const router = new VueRouter({
      routes: [
        { path: '/', component: Login }
      ]
    })
    const vm = new Vue({
      el: document.createElement('div'),
      router,
      store,
      render: h => h('router-view')
    })
    expect(vm.$el.querySelector('.modal').style.display).to.equal('none')
    console.log(vm.$el)
    done()
  })
})
