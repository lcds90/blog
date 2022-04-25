<script setup lang="ts">
import AsideView, { IProps } from '@/components/Aside.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import IDS from '@/views/GoJS/_enums';

const { t } = useI18n();

const asideData: IProps = {
  list: [
    {
      items: [
        {
          label: 'O que é o GoJS?',
          link: IDS.WHAT_IS,
        },
      ],
      title: 'Básico',
    },
  ],
};

const getGreeting = () => 'Atualmente há x artigos escritos';
</script>

<template>
  <aside-view :list="asideData.list" />
</template>
