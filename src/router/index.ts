import HomePageVue from '@/pages/public/home/HomePage.vue'
import LoginPageVue from '@/pages/public/login/LoginPage.vue'
import ProductPageVue from '@/pages/public/product/ProductPage.vue'
import RegisterPageVue from '@/pages/public/register/RegisterPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageVue,
      children: []
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPageVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPageVue
    },
    {
      path: '/product',
      name: 'product',
      component: ProductPageVue
    },
    {
      path: '/list',
      name: 'list',
      component: ProductPageVue
    }
  ]
})

export default router
