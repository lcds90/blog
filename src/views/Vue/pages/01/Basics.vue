<script setup lang="ts">

import ArticleComponent from '@/components/Article.vue';
import { useI18n } from 'vue-i18n';
import IDS from '@/views/GoJS/_enums';
import GistComponent from '@/components/Gist.vue';
import ShowMore from '@/components/ShowMore.vue';
import CodePen from '@/components/CodePen.vue';

const info = {
  alt: 'Logo do GoJS',
  img: 'https://forum.nwoods.com/uploads/db3963/original/2X/6/62748081a15930698a68851c33e398d990750ed5.png',
};

const { t } = useI18n();

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

<i18n locale="pt">
{
    "content": {
      "what_is": {
        "content": "Vue JS é um framework front-end para a criação de interfaces de usuário. Ele é desenvolvido pelo Vue.js Foundation e é distribuído sob a licença MIT. O Vue.js é um framework de código aberto, que permite aos desenvolvedores criar interfaces de usuário de forma simples e rápida.",
        "title": "O que é Vue.js?",
      },
      "concepts": {
        title: "Conceitos",
        section: {
          "hosting": "<a href=\"https://vuejs.org/\" target=\"_blank\">Toda documentação está disponível aqui. </a><br>\n<a href=\"https://vuejs.org/guide/\" target=\"_blank\">Guia do Vue.js</a>",
          "consist": "O básico para incialização de um diagrama que precisamos são de <strong>Nodes</strong> e <strong>Links</strong>, eles são dados referente a um modelo especifico do diagrama, nesse primeiro caso se trata de um <em>GraphLinksModel.</em>",
          "init": "A inicialização se trata da geração de uma nova instância de <strong>go.Diagram</strong>"
        },
      },
    },
    "introduction": "Nessa seção será abordado os principais conceitos básicos de Vue JS, espeficamente da versão 3. É muito recomendado que já tenha como pré-requisito uma boa base consolidada sobre HTML, CSS e Javascript.",
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
