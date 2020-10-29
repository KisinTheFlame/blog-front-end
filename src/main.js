// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/css/markdown.css'

let axios = require('axios')
// axios.defaults.baseURL = 'http://www.kisin.tech:8848/api'
// axios.defaults.baseURL = 'http://localhost:8848/api'
axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue
  .use(ElementUI)
  .use(mavonEditor)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: {App},
  template: '<App/>'
})
