import CheckoutPageVue from '@/pages/private/Checkout/CheckoutPage.vue'
import PaymentPageVue from '@/pages/private/Payment/PaymentPage.vue'
import SummaryPageVue from '@/pages/private/Summary/SummaryPage.vue'
import AdminPageVue from '@/pages/protected/admin/AdminPage.vue'
import AddProductVue from '@/pages/protected/products/AddProduct.vue'
import HomePageVue from '@/pages/public/home/HomePage.vue'
import LoginPageVue from '@/pages/public/login/LoginPage.vue'
import ProductPageVue from '@/pages/public/product/ProductPage.vue'
import RegisterPageVue from '@/pages/public/register/RegisterPage.vue'
import SneakersPageVue from '@/pages/public/list/SneakersPage.vue'
import HeadgearsPageVue from '@/pages/public/list/HeadgearsPage.vue'
import AcessoriosPageVue from '@/pages/public/list/AcessoriosPage.vue'
import NavigateAdmin from '@/pages/protected/admin/components/NavigateAdmin.vue'
import { defineUserStore } from '@/stores/user.store'
import { createRouter, createWebHistory } from 'vue-router'
import ProfilePageVue from '@/pages/private/Profile/ProfilePage.vue'
import ListProductsVue from '@/pages/protected/products/ListProductsPage.vue'
import ListClientVue from '@/pages/protected/clients/ListClient.vue'
import AddAddressVue from '@/pages/private/Profile/components/AddAddress.vue'
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
      component: HomePageVue,
      meta:{
        auth: true
      } 
        
    },
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
      path: '/profile',
      name: 'profile',
      component: ProfilePageVue,
    },
    {
      path: '/profile/address',
      name: 'address',
      component: AddAddressVue,
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
      children:[
        {
          path: '',
          name: 'navigate',
          components: {
            default: NavigateAdmin,
          },
        }
        ,
        {
          path: 'add-product',
          name: 'addProduct',
          component: AddProductVue,
        },
        {
          path: 'list-product',
          name: 'listProduct',
          component: ListProductsVue,
        },
        {
          path: 'list-clients',
          name: 'listClients',
          component: ListClientVue,
        }
      ],
      meta:{
        auth: true
      } 
    }
  ]
})

async function checkUserLogged(to: any, from: any, next: any){
  const auth = defineUserStore();
  const isUserAuthenticated = await auth.validateToken(auth.token);
  if(!isUserAuthenticated?.email){
    return next({name:'login'})
  }
  next()
}

router.beforeEach(async (to, from, next)=>{
  const auth = defineUserStore();
  if(to.name === 'home' || to.name === 'login') return next();
  if(to.meta?.auth){
    const isUserAuthenticated = await auth.validateToken(auth.token);
    const userRole = isUserAuthenticated?.role;
    if(to.name === 'navigate' && userRole !== 'ADMIN'){
      return next({name: 'home'})
    }
    if(from.name === 'login'){
      if(userRole === 'ADMIN'){
        return next({name: 'navigate'})
      } 
      if(userRole === 'CLIENT') return next()
      return next({name: 'login'});
    } 
  }
  return next();
})

export default router
