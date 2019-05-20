import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },

  mutations: {
    auth_request(state){
      state.status = "loading"
    },
    auth_success(state,token,user){
      state.status = "success"
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = "error"
    },
    logout(state){
      state.token = ''
      state.user = ''
    }
  },

  actions: {
    login({commit} , user){
      return new Promise((resolve , rej)=>{
        commit('auth_request');
        axios({url:'http://172.16.37.217:3000/register', data:user , method:'POST'})
        .then(resp=>{
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token' , token)
          axios.defaults.headers.common['pgr-token'] = token
          commit('auth_success' , token , user)
          resolve(resp)
        })
        .catch(err =>{
          commit('auth_error')
          localStorage.removeItem('token')
          rej(err)
        })
      })
    },

    register({commit} , user){
      return new Promise((resolve , rej)=>{
        commit('auth_request');
        axios({url:'http://172.16.37.217:3000/register' , data:user , method :"POST"})
        .then(resp=>{
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token',token)
          axios.defaults.headers.common['pgr-token'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err=>{
          commit('auth_error')
          localStorage.removeItem('token')
          rej(err)
        })
      })
    },

    logout({commit}){
      return new Promise((resolve, rej)=>{
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['pgr-token']
        resolve("logout was success")
      })
    }

  },
  getters: {
    isLoggedIn : state=> !!state.token,
    authStatus : state=> state.status,//we can using this for loading option
  }
})
