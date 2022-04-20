import { createRouter, createWebHashHistory } from 'vue-router'
import Cliente from '../views/ClienteView.vue'
import Pastelero from '../views/PasteleroView.vue'

const routes = [
  {
    path: '/',
    name: 'Cliente',
    component: Cliente
  },
  {
    path: '/Pastelero',
    name: 'Pastelero',
    component: Pastelero
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
