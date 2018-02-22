import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from './theme/Category.vue'
import Login from './theme/Login.vue'
import NotFound from './theme/NotFound.vue'

// lazy loading components
// will only load components when needed
// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  // use base '/' url and pass hitory through JS instead of '/#/' url handling
  mode: 'history',
  // the class to pass of the active link
  // use 'exact' on the router-link component to exaclty match the path 
  linkActiveClass: 'is-active',
  // you can set the behavior of default scroll position when routing
  // you can return the savedPosition to scroll to a y from a saved var
  // if (savedPosition) { return savedPosition }
  // or you can return to a # position to scroll to that particular element
  // if (to.hash) { return { selector: to.hash } }
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  // define the routes below
  // pass parameters ":<my parameter>"
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/category/:id', name: 'category', component: Category },
    { path: '/', redirect: '/category/data' },
    // wildcard path used here for a 404 page
    { path: '*', name: 'notfound', component: NotFound }
  ]
})

export default router
