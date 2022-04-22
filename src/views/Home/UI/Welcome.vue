<script lang="ts" setup>
import ArticleComponent from '@/components/Article.vue';

const info = {
  img: 'https://pt.gravatar.com/userimage/173633821/5be3e17da80d643624d6da6dd59d521b?size=400',
  alt: 'Foto de Leonardo Santos',
};

</script>

<template>
  <article-component
    title="Sou Leonardo Santos"
    subtitle="subtitle"
  >
    <template #image>
      <img
        class="author-image"
        :alt="info.alt"
        :src="info.img"
      >
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat est velit egestas.
        Sapien eget mi proin sed. Sit amet mattis vulputate enim.
      </p>
      <p>
        Commodo ullamcorper a lacus vestibulum sed arcu. Fermentum leo vel orci porta non.
        Proin fermentum leo vel orci porta non pulvinar. Imperdiet proin fermentum leo vel.
        Tortor posuere ac ut consequat semper viverra. Vestibulum lectus mauris ultrices eros.
      </p>
      <h3 class="has-text-centered">
        Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Cras tincidunt
        lobortis feugiat vivamus.
      </h3>
      <p>
        In eu mi bibendum neque egestas congue quisque egestas diam.
        Enim nec dui nunc mattis enim ut tellus. Ut morbi tincidunt augue interdum velit euismod in.
        At in tellus integer feugiat scelerisque varius morbi enim nunc. Vitae suscipit tellus mauris a diam.
        Arcu non sodales neque sodales ut etiam sit amet.
      </p>
    </template>
  </article-component>
</template>
