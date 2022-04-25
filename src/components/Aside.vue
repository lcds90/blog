<script setup lang="ts">
import { computed } from 'vue';

export interface IItem {
  link: string,
  label: string,
}

export interface IListItem {
title: string
items: IItem[]
}

export interface IProps {
list: IListItem[],
}

const goto = (refName: string) => {
  const element = document.getElementById(`${refName}`) as HTMLDivElement;
  const elementToActive = document.getElementById(`${refName}-link`) as HTMLDivElement;
  const getActiveElement = document.querySelector('.menu-list .is-active') as HTMLDivElement;

  if (getActiveElement) getActiveElement.classList.toggle('is-active');

  elementToActive.classList.add('is-active');

  const top = element.offsetTop;

  window.scrollTo(0, top);
};

const props = defineProps<IProps>();

const listMenu = computed(() => props.list);

</script>

<template>
  <aside class="menu card p-4">
    <template
      :key="menu.title"
      v-for="menu in listMenu"
    >
      <p class="menu-label">
        GoJS
      </p>
      <ul class="menu-list">
        <li>
          <a class="is-active">{{ menu.title }}</a>
          <ul>
            <li
              :key="menuItem.link"
              v-for="menuItem in menu.items"
            >
              <a
                :id="`${menuItem.link}-link`"
                @click.left="goto(menuItem.link)"
                @keypress="goto(menuItem.link)"
              >{{ menuItem.label }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </template>
  </aside>
</template>

<style>
  aside {
    position: sticky !important;
    top: 2vh;
  }

  .is-active {
    transition: 0.5s ease-in all;
  }
</style>
