import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animalinfo from '../views/Animalinfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/animalinfo',
    name: 'animalinfo',
    component: Animalinfo,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
