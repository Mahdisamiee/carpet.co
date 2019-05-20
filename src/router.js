import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

import Home from './components/Home.vue'
import SignInUp from './components/SignInUp.vue'
import Secure from './components/Secure.vue'
import Secure2 from './components/Secure2.vue'
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
      path:'/secure',
      name:'secure',
      component: Secure,
      meta:{
        requiresAuth: true
      }
    },
    {
      path:'/secure2',
      name:'secure2',
      component: Secure2,
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
