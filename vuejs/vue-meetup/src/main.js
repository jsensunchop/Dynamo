import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppDropdown from './components/shared/AppDropdown'
import AppHero from './components/shared/AppHero'

Vue.config.productionTip = false

Vue.component('AppHero', AppHero)
Vue.component('AppDropdown', AppDropdown)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
