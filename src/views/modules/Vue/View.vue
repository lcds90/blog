<script lang="ts" setup>
import HeroComponent from '@/components/Hero.vue';
import ArticleList from '@/components/ArticleListWithAside.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { BasicsView, MenuView } from './pages';

const siteData = reactive({
  description: 'Aprendizados sobre Vue',
  title: 'LCDS | Vue',
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
