import 'bootstrap'
import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import Nav from './components/commons/Nav'
import Footer from './components/commons/Footer'
import siteInfo from '../src/db/siteInfo'

// import './fa.config';

import router from './router'
import store from './store'



// Require the main ØrouSass manifest file
require('./assets/scss/main.scss');


Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('app-footer', Footer);




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



export default {
    name: 'app',
    data() {

        return {
            myJson: siteInfo
        }
    }
}
