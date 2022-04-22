import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import i18n from './i18n';

const store = createPinia();

createApp(App).use(i18n)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');
