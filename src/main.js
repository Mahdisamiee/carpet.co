import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import './plugins/element.js'
import { Main,Carousel,CarouselItem,Rate,Tabs,TabPane } from 'element-ui'

Vue.use(Main)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Rate);
Vue.use(Tabs);
Vue.use(TabPane);

//for Axios and token
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['pgr-token'] = token
}

//
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
