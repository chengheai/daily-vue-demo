// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import animated from 'animate.css'
import _ from 'lodash'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype._ = _
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animated)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  template: '<App/>'
})
