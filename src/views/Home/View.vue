<script lang="ts" setup>
import useStore from '@/stores/test';
import HeroComponent from '@/components/Hero.vue';
import ArticleList from '@/components/ArticleList.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { WelcomeView } from './UI';

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

<i18n locale="en">
{
    "description": "I am a software engineer and a lover of technology. In my blog I will comment on the following technologies:",
}
</i18n>
<i18n locale="pt">
{
    "description": "Sou engenheiro front-end de software. <br>Profissionalmente, estou atuando na empresa Zenvia. <br> Tendo trilhado esse caminho desde 2018, pretendo compartilhar meu conhecimento a respeito das tecnologias que venho utilizando no mercado de trabalho e pessoalmente.",
}
</i18n>
