import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'
import More from '../pages/manager/more/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    // manager页面是用来放首页,订单,我的
    path: '/',
    name: 'manager',
    component: Manager,
    children:[{
      path:"home",
      component:() => import('../pages/manager/Home.vue')
    },{
      path:"order",
      component:() => import('../pages/manager/Order.vue')
    },{
      path:"user",
      component:() => import('../pages/manager/User.vue')
    },{
      //more是用来放用户的一些信息的
      path:"more",
      component:More,
      children:[{
        path:"address",
      component:() => import('../pages/manager/more/Address.vue'),        
      },{
        path:"customer",
        component:() => import('../pages/manager/more/Customer.vue'),        
      }]
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
