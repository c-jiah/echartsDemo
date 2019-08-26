import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import(/* webpackChunkName: "about" */ './views/Echarts.vue')
    },
    {
      path: '/echarts2',
      name: 'echarts2',
      component: () => import( './views/Echarts2.vue')
    }
  ]
})
