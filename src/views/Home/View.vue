<script lang="ts" setup>
import useStore from '@/stores/test';
import ArticleList from '@/components/ArticleList.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { WelcomeView } from './pages';

const { t } = useI18n();

const siteData = reactive({
  description: t('description'),
  title: t('head'),
});
useHead({
  // Can be static or computed
  meta: [
    {
      content: computed(() => siteData.description),
      name: 'description',
    },
  ],
  title: 'LCDS | Blog',
});

</script>

<template>
  <div class="home">
    <article-list>
      <welcome-view />
    </article-list>
  </div>
</template>
