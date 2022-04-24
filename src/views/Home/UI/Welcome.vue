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

  if (time < 12) {
    return 'Good morning!';
  }
  if (time > 12) {
    return 'Good afternoon!';
  }
  if (time === 12) {
    return 'Go eat lunch!';
  }

  return 'whatever';
};

</script>

<template>
  <div class="welcome-container">
    <article-component
      subtitle="Apaixonado por tecnologia, desenvolvedor front-end e apaixonado pelo mundo web e pai de 9 gatinhos."
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
  margin-top: 15vw;
}

@media screen and (min-width: 768px) {
  .welcome-container {
    margin-top: 9vw;
  }
}

@media screen and (min-width: 900px) {
  .welcome-container {
    margin-top: 7vw;
  }
}

@media screen and (min-width: 1300px) {
  .welcome-container {
    margin-top: 5vw;
  }
}
</style>

<i18n locale="en">
{
    "about": "I am a software engineer and a lover of technology. In my blog I will comment on the following technologies:",
    "introduction": "Hello, I am <b>Leonardo Santos</b>",
    "sharing": "Compartilhando conhecimento como reflexão da paixão que tenho por esse mundo da tecnologia. 💖"
}
</i18n>
<i18n locale="pt">
{
    "about": "Sou engenheiro front-end de software. <br>Profissionalmente, estou atuando na empresa Zenvia. <br> Tendo trilhado esse caminho desde 2018, pretendo compartilhar meu conhecimento a respeito das tecnologias que venho utilizando no mercado de trabalho e pessoalmente.",
    "introduction": "Olá, eu sou <b>Leonardo Santos</b>",
    "sharing": "Compartilhando conhecimento como reflexão da paixão que tenho por esse mundo da tecnologia. 💖",
}
</i18n>
