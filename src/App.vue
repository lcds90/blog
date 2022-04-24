<script setup lang="ts">
import NavbarComponent from '@/components/Navbar.vue';
import ThemeMode from '@/components/ThemeMode.vue';

const links = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Sobre o projeto',
    path: '/about',
  },
];

const articles = [
  {
    name: 'GoJS',
    path: '/gojs',
  },
];

</script>

<template>
  <div class="app">
    <navbar-component>
      <template #theme>
        <theme-mode />
      </template>
      <template #navbar-links>
        <router-link
          :key="link.path"
          v-for="link in links"
          class="navbar-item"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
      </template>
      <template #navbar-menu-links>
        <router-link
          :key="article.path"
          v-for="article in articles"
          class="navbar-item"
          :to="article.path"
        >
          {{ article.name }}
        </router-link>
      </template>
    </navbar-component>
    <router-view />
  </div>
</template>
