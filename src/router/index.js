import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Element from '@/components/Element'
import Computed from '@/components/Computed'
import Lodash from '@/components/Lodash'
import Switch from '@/components/Switch'
import savedPosition from '@/components/savedPosition'

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
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/savedPosition',
      name: 'savedPosition',
      component: savedPosition
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
