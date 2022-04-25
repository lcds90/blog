<script lang="ts" setup>
import HeroComponent from '@/components/Hero.vue';
import ArticleList from '@/components/ArticleListWithAside.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { BasicsView, MenuView } from './pages';

const siteData = reactive({
  description: 'gojs',
  title: 'LCDS | GoJS',
});
useHead({
  // Can be static or computed
  meta: [
    {
      content: computed(() => siteData.description),
      name: 'description',
    },
  ],
  title: computed(() => siteData.title),
});

</script>

<template>
  <div class="home">
    <hero-component />
    <article-list>
      <template #default>
        <basics-view />
      </template>
      <template #aside>
        <menu-view />
      </template>
    </article-list>
  </div>
</template>
