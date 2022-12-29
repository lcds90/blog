<script setup lang="ts">
import ArticleComponent from '@/components/Article.vue';
import { useI18n } from 'vue-i18n';

const info = {
  alt: 'Foto de Leonardo Santos',
  img: 'https://pt.gravatar.com/userimage/173633821/5be3e17da80d643624d6da6dd59d521b?size=400',
};

const { t } = useI18n();

const getGreeting = () => {
  const d = new Date();
  const time = d.getHours();
  let timeMessage = '';
  if (time < 12 && time >= 6) {
    timeMessage = t('welcome.greeting_time.morning');
  }
  if (time > 12 && time < 18) {
    timeMessage = t('welcome.greeting_time.afternoon');
  }
  if (time > 18 && time < 24) {
    timeMessage = t('welcome.greeting_time.evening');
  }

  return `${t('welcome.greeting_time.message')} ${timeMessage}`;
};

</script>

<template>
  <div class="welcome-container">
    <article-component
      :subtitle="t('greeting')"
      :title="getGreeting()"
    >
      <template #image>
        <img
          :alt="info.alt"
          class="author-image"
          :src="info.img"
        >
      </template>
      <template #content>
        <p
          class="has-text-primary"
          v-html="t('welcome.introduction')"
        />
        <hr>
        <p
          class="has-text-secondary"
          v-html="t('welcome.about')"
        />
        <hr>
        <h3 class="title is-6 has-text-centered">
          {{ t('welcome.sharing') }}
        </h3>
      </template>
    </article-component>
  </div>
</template>

<style>
.welcome-container {
  margin-top: 7vh;
}

</style>
