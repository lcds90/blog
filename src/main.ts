import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';

import App from './views/App.vue';
import { router } from './views';
import { i18n } from './i18n';

const store = createPinia();
const head = createHead();

createApp(App).use(i18n)
  .use(router)
  .use(store)
  .use(head)
  .mount('#app');
