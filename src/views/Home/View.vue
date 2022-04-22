<script lang="ts" setup>
import useStore from '@/stores/test';
import HeroComponent from '@/components/Hero.vue';
import ArticleList from '@/components/ArticleList.vue';
import { WelcomeView } from './UI';
</script>

<template>
  <div class="home">
    <hero-component>
      <template #title>
        Bem vindo ao meu blog!
      </template>
    </hero-component>
    <article-list>
      <welcome-view />
    </article-list>
  </div>
</template>
