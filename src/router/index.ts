import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/View.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import(/* webpackChunkName: "about" */ '../views/About/View.vue'),
    name: 'about',
    path: '/about',
  },
  {
    component: () => import(/* webpackChunkName: "about" */ '../views/GoJS/View.vue'),
    name: 'gojs',
    path: '/gojs',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
