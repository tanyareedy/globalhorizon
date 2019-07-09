import 'bootstrap'
import Vue from 'vue'
import App from './App.vue'
import Nav from './components/Nav'
import Footer from './components/Footer'
import router from './router'
import store from './store'



// Require the main Sass manifest file
require('./assets/scss/main.scss');


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Footer', Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


