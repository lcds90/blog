import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const getComponent = (name: string) => () => import(/* webpackChunkName: "[request]" */ `./modules/${name}/View.vue`);
const generateRoute = (name: string) => ({
  component: () => getComponent(name),
  name: name.toLowerCase(),
  path: `/${name.toLowerCase()}`,
});

const routes: Array<RouteRecordRaw> = [
  {
    ...generateRoute('Home'),
    ...generateRoute('About'),
    ...generateRoute('GoJS'),
    ...generateRoute('Vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
