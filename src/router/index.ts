import { createRouter, createWebHistory } from 'vue-router'
import signin from '../pages/auth/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
    //   name: 'login',
      component: signin
    },
   
  ]
})

export default router
