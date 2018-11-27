import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Element from '@/components/Element'
import Computed from '@/components/Computed'
import Lodash from '@/components/Lodash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/element',
      name: 'Element',
      component: Element
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/lodash',
      name: 'Lodash',
      component: Lodash
    }
  ]
})
