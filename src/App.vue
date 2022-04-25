<script setup lang="ts">
import NavbarComponent from '@/components/Navbar.vue';
import ThemeMode from '@/components/ThemeMode.vue';
import LocaleMode from './components/LocaleMode.vue';

const links = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'GoJS',
    path: '/gojs',
  },

];

const articles = [
  {
    name: 'Sobre o projeto',
    path: '/about',
  },
];

</script>

<template>
  <div class="app">
    <navbar-component>
      <template #modes>
        <theme-mode />
        <locale-mode />
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
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<style>
.app {
  width: 100vw;
  display: grid;
  grid: 10vh 90vh / 1fr;
  overflow: hidden;
}

.body {
  overflow-y: auto;
  height: 90vh;
  margin-top: 2vh;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) var(--accent-color);
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: var(--accent-color);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 10px;
  border: 3px solid var(--accent-color);
}
</style>
