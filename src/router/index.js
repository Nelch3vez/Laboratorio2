import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Longitud from '../views/Longitud.vue'
import Monedas from '../views/Monedas.vue'
import Masa from '../views/Masa.vue'
import Tiempo from '../views/Tiempo.vue'
import Almacenamiento from '../views/Almacenamiento.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/longitud',
    name: 'Longitud',
    component: Longitud
  },
  {
    path: '/monedas',
    name: 'Monedas',
    component: Monedas
  },
  {
    path: '/masa',
    name: 'Masa',
    component: Masa
  },
  {
    path: '/tiempo',
    name: 'Tiempo',
    component: Tiempo
  },
  {
    path: '/almacenamiento',
    name: 'Almacenamiento',
    component: Almacenamiento
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
