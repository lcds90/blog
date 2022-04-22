<script setup lang="ts">
defineProps({
  subtitle: {
    default: '',
    required: false,
    type: String,
  },
  title: {
    default: '',
    required: false,
    type: String,
  },
});
</script>

<template>
  <aside class="menu card p-4">
    <p class="menu-label">
      GOJS
    </p>
    <ul class="menu-list">
      <li>
        <a class="is-active">Básico</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<style>
  aside {
    position: sticky !important;
    top: 2vh;
  }
</style>
