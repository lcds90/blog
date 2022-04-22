<script setup lang="ts">
import useStore from '@/stores/test';
import HeroVue from '@/components/Hero.vue';
</script>

<template>
  <div class="home">
    <hero-vue>
      <template #title>
        Welcome!
      </template>
    </hero-vue>
  </div>
</template>
