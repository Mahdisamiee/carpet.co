import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Promise } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || 's',
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
    login({commit} , user){//notice that maybe we have to change this type to json =>   to {email : user.email , password : user.password}
      return new Promise((resolve , rej)=>{
        commit('auth_request');
        axios({url:'http://172.16.37.165:3000/jwt/login', data:user , method:'post'})
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
        axios({url:'http://172.16.37.165:3000/register' , data:user , method :"POST"})
        .then(resp=>{
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token',token)
          axios.defaults.headers.common['pgr-token'] = token
          commit('auth_success', token, user)
          resolve(resp.data)
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
    },

    //action for carpetStore home2
    fetchCarpets({commit}){
      return new Promise((resolve,rej)=>{
        axios({url:'http://172.16.37.165:3000/carpetsdetail' ,  method :"GET"})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
        })
      })
    },

    fetchCarpetComplete({commit} , id){ //getting the complete information about carpet with a specific id. notice that information should be like above
      /*
      resp.data:{
          name: 'bakhtiary',
          price: 1700,
          rate: '',
          detail: 'a great carpet from Kerman',
          id: 4,
          imgsrc: require('../assets/back6.jpeg'),   // it can be just a url=> 'https://jfkefjkef.jpg or jpeg'. i would fix it later
      },
      */
      return new Promise((resolve,rej)=>{
        axios({url:'http://172.16.37.165:3000/carpetcomplete'+id , method:"GET"})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
        })
      })
    }

  },
  getters: {
    isLoggedIn : state=> !!state.token,
    authStatus : state=> state.status,//we can using this for loading option
    personalInfo : state=> state.user,
  }
})
