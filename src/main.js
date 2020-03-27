import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'bootstrap'
import './styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faProcedures, faWalking, faDizzy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({
  faProcedures,
  faWalking,
  faDizzy
})

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
