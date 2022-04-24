<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';

const props = defineProps({
  src: {
    default: '',
    required: true,
    type: String,
  },
});

const el = ref<HTMLDivElement | null>();

const generateGistInHTML = (elGist: HTMLElement) => {
  const scriptEl = document.createElement('script');
  scriptEl.setAttribute('src', props.src);
  postscribe(elGist, scriptEl.outerHTML);
};

onMounted(() => {
  const elGist = unref(el) as HTMLDivElement;
  generateGistInHTML(elGist);
});

</script>

<template>
  <div
    ref="el"
    class="container-gist"
  />
</template>

<style>

.container-gist {
    width: 110%;
    margin-left: -5%;
}

.blob-wrapper {
  margin: auto;
  width: 100%;
  padding: 0 7px !important;
}

.gist-data {
  background-color: var(--accent-color) !important;
  height: 100%;
  border-bottom: 1px solid var(--text-primary-color) !important;
}

.gist-file {
  border: 1px solid var(--text-primary-color) !important;
}

.gist-meta {
  background-color: var(--accent-color) !important;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  color: var(--text-primary-color) !important;
}

.gist-meta * {
    color: var(--text-primary-color) !important;
}
</style>
