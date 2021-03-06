import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Promise } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    admin: false
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
    },
    admin(state){
      state.admin = true
    }
  },

  actions: {
    login({commit} , user){//notice that maybe we have to change this type to json =>   to {email : user.email , password : user.password}
      return new Promise((resolve , rej)=>{
        commit('auth_request');
        axios({url:'http://172.17.40.148:3000/login', data:user , method:'post'})
        .then(resp=>{
          const token = resp.data.token
          const user = resp.data.user
          // if(resp.data.user == null){
          //   commit('admin');
          // }
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

    login2({commit} , user){//for admin login
      return new Promise((resolve , rej)=>{
        commit('auth_request');
        axios({url:'http://172.17.40.148:3000/admin/login', data:user , method:'post'})
        .then(resp=>{
          const token = resp.data.token
          
          if(resp.data.user == null){
            commit('admin');
          }
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
        axios({url:'http://172.17.40.148:3000/register' , data:user , method :"POST"})
        .then(resp=>{
          const token = resp.data.token
          const user = resp.data.user
          // if(resp.data.user == null){
          //   commit('admin');
          // }
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

    //********************** */action for carpetStore home2************************************
    fetchCarpets({commit,state}){
      return new Promise((resolve,rej)=>{
        axios({url:'http://172.17.40.148:3000' ,  method :"GET"})
        .then(resp=>{
          //axios.defaults.headers.common['pgr-token'] = state.token;
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
        })
      })
    },

    fetchCarpetComplete({commit} , id){ //getting the complete information about carpet with a specific id. notice that information should be like above
      return new Promise((resolve,rej)=>{
        axios({url:'http://172.17.40.148:3000/carpetcomplete/'+id, method:"GET"})
        .then(resp=>{
          resolve(resp)
        })
        .catch(err=>{
          rej(err)
        })
      })
    },

    sendRate({commit} , value){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/ratecarpet' , data:value , method:'POST'})
        .then(resp=>{
          console.log("your rate was successfuly send")
          resolve(resp.data)
        })
        .catch(err=>{
          console.log(err)
          rej(err)
        })
      })
    },
    changeCount({commit} , value){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/countcarpet', data:value , method:'POST'})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          console.log(value)
          rej(err)
        })
      })
    },
    filterCarpet({commit , state} , value){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/users/filter', data:value , method:'POST'})
        .then(resp=>{
          axios.defaults.headers.common['pgr-token'] = state.token;
          resolve(resp.data)
        })
        .catch(err=>{
          console.log(value)
          rej(err)
        })
      })
    },
// ********************************************Dashboard Function*****************************************
    suggestion({commit} , data){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/bywithmoney/'+data , method:'GET'})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
          console.log(err)
        })
      })
    },
    mapsMe({commit} , data){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/mapsme/'+data , method:'GET'})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
          console.log(err)
        })
      })
    },
    makeMap({commit} , data){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/admin/map', data:data, method:'POST'})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
          console.log(err)
        })
      })
    },
    makeCarpet({commit} , data){
      return new Promise((resolve, rej)=>{
        axios({url:'http://172.17.40.148:3000/users/newcarpet', data:data, method:'POST'})
        .then(resp=>{
          resolve(resp.data)
        })
        .catch(err=>{
          rej(err)
        })
      })
    }
    //************************************End of action of carpet store ********************************* 
  },
  getters: {
    isLoggedIn : state=> !!state.token,
    authStatus : state=> state.status,//we can using this for loading option
    personalInfo : state=> state.user,
    isAdmin : state=> state.admin,
    token : state => state.token
  }
})
