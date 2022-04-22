<script setup lang="ts">
import AsideView from '@/components/Aside.vue';
import { useHead } from '@vueuse/head';
import { reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const info = {
  alt: 'Logo do GoJS',
  img: 'https://forum.nwoods.com/uploads/db3963/original/2X/6/62748081a15930698a68851c33e398d990750ed5.png',
};

const { t } = useI18n();

const getGreeting = () => 'Atualmente há x artigos escritos';
</script>

<template>
  <aside-view />
</template>
