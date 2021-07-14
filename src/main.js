import 'bootstrap'; //libreria bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; //css bootsrtap
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
