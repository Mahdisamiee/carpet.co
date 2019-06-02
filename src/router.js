import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Home from './components/Home.vue'
import SignInUp from './components/SignInUp.vue'
import CarpetStore from './components/CarpetStore.vue'
import Dashboard from './components/Dashboard.vue'
import Secure3 from './components/Secure3.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: 'home',
      component: Home
    },
    {
      path:'/register',
      name: 'signinup',
      component: SignInUp
    },
    {
      path:'/carpetstore',
      name:'carpetstore',
      component: CarpetStore,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/dashboard',
      name:'dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/secure3',
      name:'secure3',
      component: Secure3,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.getters.isLoggedIn){
      next()
      return
    }
    next('/register')
  }else{
    next()
  }
})

export default router
