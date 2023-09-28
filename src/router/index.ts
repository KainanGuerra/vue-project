import HomePageVue from '@/pages/public/home/HomePage.vue'
import LoginPageVue from '@/pages/public/login/LoginPage.vue'
import RegisterPageVue from '@/pages/public/register/RegisterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageVue,
      children: [
      ]
    },
    {
      path: '/login',
      name: 'login', 
      component: LoginPageVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPageVue,
    }
  ]
})

export default router
