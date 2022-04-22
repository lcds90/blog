<script setup lang="ts">
import ArticleComponent from '@/components/Article.vue';
import { useI18n } from 'vue-i18n';
import IDS from '@/views/GoJS/_enums';

const info = {
  alt: 'Logo do GoJS',
  img: 'https://forum.nwoods.com/uploads/db3963/original/2X/6/62748081a15930698a68851c33e398d990750ed5.png',
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
  <article-component
    subtitle="Apaixonado por tecnologia, desenvolvedor front-end e apaixonado pelo mundo web e pai de 9 gatinhos."
    :title="t('title')"
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
      <h2
        class="title is-4 has-text-centered"
        :id="IDS.WHAT_IS"
      >
        {{ t('content.what_is.title') }}
      </h2>
      <p v-html="t('content.what_is.content')" />
      <hr>
      <h2 class="title is-4 has-text-centered">
        {{ t('content.concepts.title') }}
      </h2>
    </template>
  </article-component>
</template>

<i18n locale="pt">
{
    "content": {
      "what_is": {
        "content": "GoJS, se trata de uma biblioteca para a criação de diagramas interativos através de navegadores. Consistindo dados em objetos que estarão presentes no diagrama.<br>Todo o desenvolvimento será baseado no conceito de classes para facilitar o entendimento com a biblioteca.",
        "title": "O que é o GoJS?",
      },
      "concepts": {
        title: "Conceitos",
      },
    },
    "introduction": "Nessa seção será abordado os principais conceitos básicos de GoJS.",
    "title": "Conceitos básicos"
}
</i18n>
