<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref, unref } from 'vue';

const hero = ref<HTMLElement>();

const startAnimation = (el: HTMLElement) => {
  gsap.from(`#${el.id}`, {
    duration: 10,
    ease: 'power3.out',
    opacity: 1,
    y: 1000,
  });
};

onMounted(() => {
  const el = unref(hero) as HTMLElement;
  startAnimation(el);
});
</script>

<template>
  <section
    ref="hero"
    class="hero is-small is-bold"
    id="hero"
  >
    <div class="hero-body">
      <div class="hero-container container p-4" />
    </div>
  </section>
</template>

<style>
.hero {
  background-color: var(--primary-color) !important;
}

.hero-content {
  left: 0 !important;
  top: 0 !important;
}

@media screen and (min-width: 768px) {
  .hero-content {
    position: absolute !important;
    left: 10vw !important;
    top: -20px !important;
    font-weight: 800;
  }
}
</style>
