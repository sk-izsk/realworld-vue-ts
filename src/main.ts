import Vue from 'vue';
import { CreateElement } from 'vue/types/umd';
import App from './App.vue';
import './assets/main.css';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h: CreateElement) => h(App),
}).$mount('#app');
