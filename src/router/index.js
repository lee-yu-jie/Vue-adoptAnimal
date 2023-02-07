import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Animalinfo from '../views/Animalinfo.vue'
import AnimalData from '../views/AnimalData.vue'

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
    children: [
      {
        path: ':id',
        name: 'animalData',
        component: AnimalData
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
