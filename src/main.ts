import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import './style.scss';

import { AxiosPlugin } from './axios-plugin';

// pass in your custom options as second parameter if applicable
Vue.use(AxiosPlugin);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
