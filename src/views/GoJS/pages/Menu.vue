<script setup lang="ts">
import AsideView, { IProps } from '@/components/Aside.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import IDS from '@/views/GoJS/_enums';

const { t } = useI18n();

const title = computed(() => t('title'));
const whatIsTitle = computed(() => t('what_is_title'));

const asideData: IProps = {
  list: [
    {
      items: [
        {
          label: whatIsTitle.value,
          link: IDS.WHAT_IS,
        },
      ],
      title: title.value,
    },
  ],
};

const getGreeting = () => 'Atualmente há x artigos escritos';
</script>

<template>
  <aside-view :list="asideData.list" />
</template>

<i18n locale="en">
{
    "title": "Basic",
    "what_is_title": "What is GoJS?",
}
</i18n>

<i18n locale="pt">
{
    "title": "Básico",
    "what_is_title": "O que é GoJS?",
}
</i18n>
