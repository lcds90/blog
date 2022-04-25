<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';

const props = defineProps({
  link: {
    default: '',
    required: true,
    type: String,
  },
  src: {
    default: '',
    required: true,
    type: String,
  },
});

const el = ref<HTMLDivElement | null>();

const generateGistInHTML = (elGist: HTMLElement) => {
  const scriptEl = document.createElement('script');
  scriptEl.setAttribute('async', 'true');
  scriptEl.setAttribute('src', props.src);
  postscribe(elGist, scriptEl.outerHTML);
};

onMounted(() => {
  const elGist = unref(el) as HTMLDivElement;
  generateGistInHTML(elGist);
});

</script>

<template>
  <p
    ref="el"
    class="codepen"
    data-default-tab="html,result"
    data-editable="true"
    data-height="300"
    data-preview="true"
    data-slug-hash="popmWBP"
    data-user="lcds"
    style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
  >
    <span>See the Pen <a
      :href="props.link"
      target="_blank"
    >
      Untitled</a> by Leonardo Santos (<a href="https://codepen.io/lcds">@lcds</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
</template>

<style>

.container-gist {
    width: 110%;
    margin-left: -5%;
}
</style>
