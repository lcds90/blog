<script lang="ts" setup>
import HeroComponent from '@/components/Hero.vue';
import ArticleList from '@/components/ArticleList.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { BasicsView } from './UI';

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
    <hero-component>
      <template #title>
        Seção sobre a biblioteca <h2>Go JS</h2>
      </template>
    </hero-component>
    <article-list>
      <basics-view />
    </article-list>
  </div>
</template>
