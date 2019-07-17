import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HTTPClient from '@/utils/request';

Vue.config.productionTip = false;

const services = {
  getAll: () => HTTPClient.get('funks'),
  getById: id => HTTPClient.get(`funks/${id}`),
};

Object.defineProperty(Vue.prototype, '$services', {
  get: () => services,
});

Vue.filter('truncate', (value, amount = 38) => {
  if (value.length >= amount) {
    return `${value.substring(0, amount)}...`;
  }
  return value;
});
Vue.filter('parseDate', (value) => {
  const date = new Date(value);
  const day = date.getDate();
  const mounth = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${mounth}/${year}`;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
