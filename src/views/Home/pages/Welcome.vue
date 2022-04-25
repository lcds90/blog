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
    timeMessage = t('greeting_time.morning');
  }
  if (time > 12 && time < 18) {
    timeMessage = t('greeting_time.afternoon');
  }
  if (time > 18 && time < 24) {
    timeMessage = t('greeting_time.evening');
  }

  return `${t('greeting_time.message')} ${timeMessage}`;
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
          v-html="t('introduction')"
        />
        <hr>
        <p
          class="has-text-secondary"
          v-html="t('about')"
        />
        <hr>
        <h3 class="title is-6 has-text-centered">
          {{ t('sharing') }}
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

<i18n locale="en">
{
    "about": "I'm a front-end software engineer. <br>Professionally, I am working in the company Zenvia. <br> Having walked this path since 2018, I intend to share my knowledge about the technologies I have been using in the job market and personally.",
    "introduction": "Hello, I am <b>Leonardo Santos</b>",
    "greeting": "Passionate about technology, front-end developer and passionate about the web world and father of 9 kittens",
    "greeting_time": {
        "morning": "Good morning!",
        "afternoon": "Good afternoon!",
        "evening": "Good evening!",
        "message": "Welcome to my blog!"
    },
    "sharing": "Sharing knowledge as a reflection of the passion I have for this world of technology. 💖"
}
</i18n>
<i18n locale="pt">
{
    "about": "Sou engenheiro front-end de software. <br>Profissionalmente, estou atuando na empresa Zenvia. <br> Tendo trilhado esse caminho desde 2018, pretendo compartilhar meu conhecimento a respeito das tecnologias que venho utilizando no mercado de trabalho e pessoalmente.",
    "introduction": "Olá, eu sou <b>Leonardo Santos</b>",
    "greeting": "Apaixonado por tecnologia, desenvolvedor front-end e apaixonado pelo mundo web e pai de 9 gatinhos.",
    "greeting_time": {
        "morning": "Bom dia!",
        "afternoon": "Boa tarde!",
        "evening": "Boa noite!",
        "message": "Bem vindo ao meu blog!"
    },
    "sharing": "Compartilhando conhecimento como reflexão da paixão que tenho por esse mundo da tecnologia. 💖",
}
</i18n>
