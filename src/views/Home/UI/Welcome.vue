<script setup lang="ts">
import ArticleComponent from '@/components/Article.vue';
import { useI18n } from 'vue-i18n';

const info = {
  img: 'https://pt.gravatar.com/userimage/173633821/5be3e17da80d643624d6da6dd59d521b?size=400',
  alt: 'Foto de Leonardo Santos',
};

const { t } = useI18n({
  inheritLocale: true,
});

</script>

<template>
  <article-component
    title="Sou Leonardo Santos"
    subtitle="Apaixonado por tecnologia, desenvolvedor front-end e apaixonado pelo mundo web e pai de 9 gatinhos."
  >
    <template #image>
      <img
        class="author-image"
        :alt="info.alt"
        :src="info.img"
      >
    </template>
    <template #content>
      <p v-html="t('introduction')" />
      <hr>
      <p>
        {{ t('about') }}
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

<i18n locale="en">
{
    "introduction": "Hello, I am <b>Leonardo Santos</b>",
    "about": "I am a software engineer and a lover of technology. In my blog I will comment on the following technologies:"
}
</i18n>
<i18n locale="pt">
{
    "introduction": "Olá, eu sou <b>Leonardo Santos</b>",
    "about": "Atualmente atuo como engenheiro de software, \n atuando especialmente na área de front-end na empresa Zenvia, \ e venho compartilhar meu conhecimento a respeito das tecnologias que venho utilizando no mercado de trabalho e pessoalmente, \n espero que curta as minhas postagens!"
}
</i18n>
