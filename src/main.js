import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import '@/assets/style/index.scss';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/lib/tagcanvas.js';
import Axios from "axios"
import qs from "qs"

Vue.config.productionTip = false;
Vue.prototype.$axios=Axios
Vue.prototype.$qs=qs;

Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
