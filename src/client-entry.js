import {app} from './app'

// Vue $mount to element
app.$mount('#app')

if (module.hot) {
  module.hot.accept()
}
