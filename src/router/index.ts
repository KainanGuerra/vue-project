import CheckoutPageVue from '@/pages/private/Checkout/CheckoutPage.vue'
import PaymentPageVue from '@/pages/private/Payment/PaymentPage.vue'
import SummaryPageVue from '@/pages/private/Summary/SummaryPage.vue'
import AdminPageVue from '@/pages/protected/admin/AdminPage.vue'
import HomePageVue from '@/pages/public/home/HomePage.vue'
import LoginPageVue from '@/pages/public/login/LoginPage.vue'
import ProductPageVue from '@/pages/public/product/ProductPage.vue'
import RegisterPageVue from '@/pages/public/register/RegisterPage.vue'
import SneakersPageVue from '@/pages/public/list/SneakersPage.vue'
import HeadgearsPageVue from '@/pages/public/list/HeadgearsPage.vue'
import AcessoriosPageVue from '@/pages/public/list/AcessoriosPage.vue'
import { defineUserStore } from '@/stores/user.store'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomePageVue,},
        {
          path: '/sneakers',
          name: 'sneakers',
          component: SneakersPageVue, 
        },
        {
          path: '/headgears',
          name: 'headgears',
          component: HeadgearsPageVue, 
        },
        {
          path: '/acessorios',
          name: 'acessorios',
          component: AcessoriosPageVue, 
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
      path: '/product/:id',
      name: 'product',
      component: ProductPageVue,
      beforeEnter: checkUserLogged,
    },
    {
      path: '/list',
      name: 'list',
      component: ProductPageVue
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPageVue,
      children: [
        {
          path: '/summary',
          name: 'summary',
          component: SummaryPageVue,
          children: [
            {
              path: '/payment',
              name: 'payment',
              component: PaymentPageVue
            }
          ],
        },
      ],
      meta: {
        auth: true
      }
    },
    {
      path:'/admin',
      name: 'admin',
      component: AdminPageVue,
      meta:{
        auth: true
      }
    }
  ]
})

async function checkUserLogged(to: any, from: any, next: any){
  const auth = defineUserStore();
  const isUserAutheticated = await auth.validateToken(auth.token);
  if(!isUserAutheticated?.email){
    return next({name:'login'})
  }
  next()
}

router.beforeEach(async (to, from, next)=>{
  if(to.meta?.auth){
    const auth = defineUserStore();
    const isUserAutheticated = await auth.validateToken(auth.token);
    console.log(isUserAutheticated.role);
    if(isUserAutheticated?.role === 'ADMIN'){
      return next({name: 'admin'})
    }
    if(isUserAutheticated?.role === 'CLIENT') return next()
    return next({name: 'login'})
  }
  return next()
})

export default router
