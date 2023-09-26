import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import AdminViewVue from '@/views/AdminView.vue'
import LoginVIewVue from '@/views/LoginVIew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      children: [
        {
          path: '/sneakers',
          component: () => import('@/components/header/SneakersHeader.vue'),
          name: 'sneakers',
        },
        {
          path: '/headgears',
          component: () => import('@/components/header/HeadgearsHeader.vue'),
          name: 'headgears',
        },
        {
          path: '/acessorios',
          component: () => import('@/components/header/AcessoriosHeader.vue'),
          name: 'acessorios',
        },
      ]
    },
    {
      path: '/login',
      name: 'login', 
      component: LoginVIewVue
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminViewVue,
    }
  ]
})

export default router
