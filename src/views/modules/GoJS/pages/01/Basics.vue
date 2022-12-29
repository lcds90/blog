<script setup lang="ts">

import ArticleComponent from '@/components/Article.vue';
import { useI18n } from 'vue-i18n';
import { onMounted, ref, unref } from 'vue';
import * as go from 'gojs';
import GistComponent from '@/components/Gist.vue';
import ShowMore from '@/components/ShowMore.vue';
import CodePen from '@/components/CodePen.vue';
import { RoundedRectangle } from '@generators';
import { Diagram } from '@diagram';
import { IDS } from '../../_enums';

const info = {
  alt: 'Logo do GoJS',
  img: 'https://forum.nwoods.com/uploads/db3963/original/2X/6/62748081a15930698a68851c33e398d990750ed5.png',
};
let diagramWithNoNodesInstance: go.Diagram;
const diagramWithNoNodes = ref<HTMLDivElement | null>();
const generateDiagramWithNoNodes = (el: HTMLDivElement) => {
  const newDiagram = new Diagram(el, [], [], []);
  diagramWithNoNodesInstance = newDiagram.diagram;
};

const diagramWithNodes = ref<HTMLDivElement | null>();
let diagramWithNodesInstance: go.Diagram;
const generateDiagramWithNodes = (el: HTMLDivElement) => {
  const links = [ // a JavaScript Array of JavaScript objects, one per link
    { from: 'Hello', to: 'GoJS' },
    { from: 'World', to: 'Gamma' },
    { from: 'Beta', to: 'Beta' },
    { from: 'Gamma', to: 'Delta' },
    { from: 'Delta', to: 'Alpha' },
  ];
  const nodes = [ // a JavaScript Array of JavaScript objects, one per node;
  // the "color" property is added specifically for this app
    // eslint-disable-next-line vue/sort-keys
    { key: 'Hello', color: 'lightblue' },
    // eslint-disable-next-line vue/sort-keys
    { key: 'GoJS', color: 'orange' },
    // eslint-disable-next-line vue/sort-keys
    { key: 'World', color: 'lightgreen' },
    // eslint-disable-next-line vue/sort-keys
    { key: '🌐', color: 'pink' },
  ];

  const rectangle = new RoundedRectangle('key', 'color').template;
  const nodeTemplates = nodes.map(
    (node) => ({ ...node, template: rectangle }),
  );
  const newDiagram = new Diagram(el, nodes, links, nodeTemplates);
  diagramWithNodesInstance = newDiagram.diagram;
};

const { t } = useI18n();

onMounted(() => {
  const elDiagramWithNoNodes = unref(diagramWithNoNodes) as HTMLDivElement;
  generateDiagramWithNoNodes(elDiagramWithNoNodes);

  const elDiagramWithNodes = unref(diagramWithNodes) as HTMLDivElement;
  generateDiagramWithNodes(elDiagramWithNodes);
});

</script>

<template>
  <article-component
    :subtitle="t('subtitle')"
    :title="t('title')"
    id=""
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
        class="has-text-primary has-text-centered is-italic has-text-weight-bold is-size-5"
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
      <section v-html="t('content.concepts.section.hosting')" />
      <div
        ref="diagramWithNoNodes"
        class="diagram"
        id="diagramWithNoNodes"
      />
      <show-more>
        <gist-component
          src="https://gist.github.com/lcds90/05099d541f2f7a60850f2659f1b21d25.js"
        />
      </show-more>
      <section
        class="mt-4"
        v-html="t('content.concepts.section.consist')"
      />
      <section class="diagram-card card">
        <div
          ref="diagramWithNodes"
          class="diagram"
          id="diagramWithNodes"
        />
      </section>
      <show-more have-pen>
        <template #default>
          <gist-component
            src="https://gist.github.com/lcds90/c840bbd5bfac5275293f793efbe2fac4.js"
          />
        </template>
        <template #pen>
          <code-pen
            link="https://codepen.io/lcds/pen/popmWBP"
            src="https://cpwebassets.codepen.io/assets/embed/ei.js"
          />
        </template>
      </show-more>
    </template>
  </article-component>
</template>

<i18n locale="en">
{
    "content": {
      "what_is": {
        "content": "GoJS is a library for creating interactive diagrams through browsers. Consisting of data in objects that will be present in the diagram.<br>To involve you in the development cycle, it will be based on the concept of classes to facilitate understanding with the library and use of Typescript for data typing, <em>only in the introductory moment will be based on Javascript for knowledge</em>, but in the next sessions we will have the combination of <strong>Typescript</strong> using the framework <strong>Vue 3</strong> and <strong>Pinia</strong>.",
        "title": "What is GoJS?",
      },
      "concepts": {
        title: "Concepts",
        section: {
          "hosting": "<a href=\"https://gojs.net/latest/learn/#GoJSTutorials\" target=\"_blank\">After loading the library. </a><br>Every diagram is instantiated inside an HTML element with a <strong class=\"has-text-primary\">unique id</strong> so you can view the diagram, remember to set the size according to your need.",
          "consist": "The basics for initialization of a diagram we need are <strong>Nodes</strong> and <strong>Links</strong>, they are data referring to a specific model of the diagram, in this first case it is an <em> GraphLinksModel.</em>",
          "init": "Initialization is about generating a new instance of <strong>go.Diagram</strong>"
        },
      },
    },
    "introduction": "In this section, the main basic concepts of GoJS will be covered. It is highly recommended that you already have a good consolidated base on HTML, CSS and Javascript as a prerequisite.",
    "title": "Basic concepts",
    "subtitle": "What you need to start understanding the GoJS ecosystem"
}
</i18n>

<i18n locale="pt">
{
    "content": {
      "what_is": {
        "content": "GoJS, se trata de uma biblioteca para a criação de diagramas interativos através de navegadores. Consistindo dados em objetos que estarão presentes no diagrama.<br>Para te envolver sobre o ciclo de desenvolvimento será baseado no conceito de classes para facilitar o entendimento com a biblioteca e utilização de Typescript para tipagem de dados, <em>apenas no momento introdutório será baseado em Javascript para conhecimento</em>, porém nas próximas sessões iremos ter a junção de <strong>Typescript</strong> com a utilização do framework <strong>Vue 3</strong> e <strong>Pinia</strong>.",
        "title": "O que é o GoJS?",
      },
      "concepts": {
        title: "Conceitos",
        section: {
          "hosting": "<a href=\"https://gojs.net/latest/learn/#GoJSTutorials\" target=\"_blank\">Após o carregamento da biblioteca. </a><br>Todo diagrama é instanciado dentro de um elemento HTML com um <strong class=\"has-text-primary\">id único</strong> para que seja possível visualizar o diagrama, lembre-se de definir o tamanho de acordo com sua necessidade.",
          "consist": "O básico para incialização de um diagrama que precisamos são de <strong>Nodes</strong> e <strong>Links</strong>, eles são dados referente a um modelo especifico do diagrama, nesse primeiro caso se trata de um <em>GraphLinksModel.</em>",
          "init": "A inicialização se trata da geração de uma nova instância de <strong>go.Diagram</strong>"
        },
      },
    },
    "introduction": "Nessa seção será abordado os principais conceitos básicos de GoJS. É muito recomendado que já tenha como pré-requisito uma boa base consolidada sobre HTML, CSS e Javascript.",
    "title": "Conceitos básicos",
    "subtitle": "O necessário para começar a entender o ecossistema de GoJS"
}
</i18n>

<style>

.diagram {
  width: 100%;
  background: var(--background-color-primary);
  border: 1.5px solid var(--text-primary-color);
}

#diagramWithNodes {
  height: 200px;
}

#diagramWithNoNodes {
  height: 100px;
}

strong {
  color: var(--text-primary-color);
  text-shadow: 0 2px 5px rgba(0,0,0,0.25);
}
</style>
