import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/Map'
import AboutUs from '@/components/AboutUs'
import AboutProject from '@/components/AboutProject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about-project',
      component: AboutProject
    },
    {
      path: '/maps',
      name: 'maps',
      component: Map
    },
    {
      path: '/About',
      name: 'about-us',
      component: AboutUs
    },
  ]
})
