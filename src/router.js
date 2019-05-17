import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Home from './components/Home.vue'
import SignInUp from './components/SignInUp.vue'
import Secure from './components/Secure.vue'

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
      path:'/secure',
      name:'secure',
      component: Secure,
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
    next('login')
  }else{
    next()
  }
})

export default router
