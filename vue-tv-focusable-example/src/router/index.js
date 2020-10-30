import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Example1',
    component: () => import(/* webpackChunkName: "about" */ '../views/example1.vue')
  },
  {
    path: '/Example2',
    name: 'Example2',
    component: () => import(/* webpackChunkName: "about" */ '../views/example2.vue')
  },
  {
    path: '/Example3',
    name: 'Example3',
    component: () => import(/* webpackChunkName: "about" */ '../views/example3.vue')
  },
  {
    path: '/Example4',
    name: 'Example4',
    component: () => import(/* webpackChunkName: "about" */ '../views/example4.vue')
  },
  {
    path: '/Example5',
    name: 'Example5',
    component: () => import(/* webpackChunkName: "about" */ '../views/example5.vue')
  },
  {
    path: '/Example6',
    name: 'Example6',
    component: () => import(/* webpackChunkName: "about" */ '../views/example6.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router