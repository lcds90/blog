<script setup lang="ts">
import NavbarComponent from '@/components/Navbar.vue';

const items = [
  {
    name: 'Básico',
    path: '/basics',
  },
  {
    name: 'Montando partes',
    path: '/building-parts',
  },
];

const menu = [
  {
    name: 'Início',
    path: '/home',
  },
  {
    name: 'Sobre o projeto',
    path: '/about',
  },
];

</script>

<template>
  <navbar-component>
    <template #navbar-links>
      <router-link
        v-for="link in items"
        :key="link.path"
        :to="link.path"
        class="navbar-item"
      >
        {{ link.name }}
      </router-link>
    </template>
    <template #navbar-menu-links>
      <router-link
        v-for="link in menu"
        :key="link.path"
        :to="link.path"
        class="navbar-item"
      >
        {{ link.name }}
      </router-link>
    </template>
  </navbar-component>
  <router-view />
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
