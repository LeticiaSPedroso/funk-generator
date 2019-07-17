import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/funk-list',
      name: 'FunkList',
      component: () => import('./views/FunkList.vue'),
    },
    {
      path: '/fun-details/:id',
      name: 'FunkDetails',
      component: () => import('./views/FunkDetails.vue'),
    },
    {
      path: '*',
      redirect: { name: 'FunkList' },
    },
  ],
});
