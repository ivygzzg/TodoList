import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import BootstrapVue from 'bootstrap-vue';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vue from 'vue'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(Vuetify)
Vue.use(Buefy)
Vue.use(BootstrapVue);
Vue.use(VModal)
Vue.use(ElementUI)

Vue.config.productionTip = false

// Vue.component(Button.name, Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


 

