import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import vuetify from 'vuetify';

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    this.$store.dispatch('loadBooks')
  }
}).$mount('#app')
