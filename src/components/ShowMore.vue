<script setup lang="ts">
import { ref } from 'vue';

const showMore = ref(false);

</script>

<template>
  <button
    class="show-more-button button is-link is-rounded is-outlined my-4"
    @click="showMore = !showMore"
  >
    💻
    {{ showMore ? 'Hide the code' : 'Show me the code' }}
  </button>
  <div
    class="container-of-contents"
    :class="showMore ? 'show-more' : 'show-less blur'"
  >
    <slot />
  </div>
</template>

<style>
.container-of-contents {
  z-index: 20;
  width: 110%;
  margin-left: -5%;
  margin-bottom: 20px;
  overflow-y: hidden;
  padding-bottom: 0px;
  border-bottom: 5px double var(--background-color-secondary);
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.15));
  position: relative;
}

.blur {
  position: relative;
  width: 110%;
  margin-left: -5%;
}

.blur::after {
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: linear-gradient(to bottom,
      rgba(255, 255, 255, 0),
      var(--accent-color) 90%);
  width: 100%;
  height: 4em;
}

.show-more {
  height: 100%;
}

.show-less {
  height: 50px;
}

.show-more-button {
  /* position: absolute; */
  bottom: 0;
  /* width: 100%; */
  height: 20px;
  z-index: 25;
}

.fade {
  position: relative;
  bottom: 4em;
  height: 4em;
  background: -webkit-linear-gradient(rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%);
  background-image: -moz-linear-gradient(rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%);
  background-image: -o-linear-gradient(rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%);
  background-image: linear-gradient(rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%);
  background-image: -ms-linear-gradient(rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%);
}
</style>
