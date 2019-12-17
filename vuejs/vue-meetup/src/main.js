import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuelidate from 'vuelidate'
import store from './store'
import Toasted from 'vue-toasted'
import io from 'socket.io-client'

import AppDropdown from './components/shared/AppDropdown'
import AppHero from './components/shared/AppHero'
import AppSpinner from './components/shared/AppSpinner'

import moment from 'moment'

Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)
Vue.component('AppSpinner', AppSpinner)

Vue.use(vuelidate)
Vue.use(Toasted)



Vue.filter('capitalize', function (value){
  if(value && typeof value === 'string') {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
  return ''
})

Vue.filter('formatDate', function (value, formatType = 'LL'){
  if(!value) return ''
    return moment(value).format(formatType)
  
  return ''
})

const socket = io('http://localhost:3001')

new Vue({
  data (){
    return {
      socket
    }
  },
  router,
  store,
  vuelidate,
  render: h => h(App),
}).$mount('#app')
