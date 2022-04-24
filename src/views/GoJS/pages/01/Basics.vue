<script setup lang="ts">
import ArticleComponent from '@/components/Article.vue';
import { useI18n } from 'vue-i18n';
import IDS from '@/views/GoJS/_enums';
import { onMounted, ref, unref } from 'vue';
import * as go from 'gojs';
import Diagram from '@/views/GoJS/lib/createDiagram';

const info = {
  alt: 'Logo do GoJS',
  img: 'https://forum.nwoods.com/uploads/db3963/original/2X/6/62748081a15930698a68851c33e398d990750ed5.png',
};
const firstDiagram = ref<HTMLDivElement | null>();
let firstDiagramInstance: go.Diagram;
let firstModelInstance: go.GraphLinksModel;
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

onMounted(() => {
  const el = unref(firstDiagram) as HTMLDivElement;
  const links = [ // a JavaScript Array of JavaScript objects, one per link
    { from: 'Alpha', to: 'Beta' },
    { from: 'Alpha', to: 'Gamma' },
    { from: 'Beta', to: 'Beta' },
    { from: 'Gamma', to: 'Delta' },
    { from: 'Delta', to: 'Alpha' },
  ];
  const nodes = [ // a JavaScript Array of JavaScript objects, one per node;
  // the "color" property is added specifically for this app
    // eslint-disable-next-line vue/sort-keys
    { key: 'Alpha', color: 'lightblue' },
    // eslint-disable-next-line vue/sort-keys
    { key: 'Beta', color: 'orange' },
    // eslint-disable-next-line vue/sort-keys
    { key: 'Gamma', color: 'lightgreen' },
    // eslint-disable-next-line vue/sort-keys
    { key: 'Delta', color: 'pink' },
  ];
  const newDiagram = new Diagram(el, nodes, links);
  firstDiagramInstance = newDiagram.diagram;
  firstModelInstance = newDiagram.model;
  console.log(firstDiagramInstance.div, firstModelInstance.nodeDataArray);
});

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
      <div class="diagram-card card">
        <main
          ref="firstDiagram"
          id="firstDiagram"
        />
      </div>
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
        setup: {
          "hosting": "Todo diagrama é instanciado dentro de um elemento HTML com um id único para que seja possível visualizar o diagrama."
        },
      },
    },
    "introduction": "Nessa seção será abordado os principais conceitos básicos de GoJS.",
    "title": "Conceitos básicos"
}
</i18n>

<style>
#firstDiagram {
  width: 100%;
  height: 500px;
  background: rgb(77, 77, 77);
}
</style>
