<script setup lang="ts">
import gsap from 'gsap';
import {
  getCurrentInstance, onMounted, ref, unref,
} from 'vue';

const showMoreEl = ref<HTMLElement>();
const instanceID = getCurrentInstance()?.uid;

defineProps({
  havePen: {
    default: false,
    required: false,
    type: Boolean,
  },
});

const showMore = ref(false);
const showing = ref('gist');

const animationShowDiv = (el: HTMLElement) => {
  gsap.from(`#${el.id} > *`, {
    duration: 0.5,
    ease: 'power3.out',
    opacity: 0,
  });
  gsap.fromTo(`#${el.id}`, {
    duration: 1,
    ease: 'power3.out',
    height: '50px',
  }, {
    height: 'auto',
  });
};

const animationHideDiv = (el: HTMLElement) => {
  const tl = gsap.timeline();
  tl.to(`#${el.id}`, {
    duration: 0.5,
    ease: 'power3.out',
    height: '50px',
  });
  tl.to(`#${el.id}`, {
    duration: 0.25,
    x: -5,
  });
  tl.to(`#${el.id}`, {
    duration: 0.25,
    x: 5,
  });
  tl.to(`#${el.id}`, {
    duration: 0.75,
    x: 0,
  });
};

const animationToggleContent = (el: HTMLElement) => {
  const tl = gsap.timeline();
  tl.to(`#${el.id}`, {
    duration: 0.5,
    ease: 'power3.out',
    height: '50px',
    opacity: 0,
  });
  tl.to(`#${el.id}`, {
    duration: 1,
    ease: 'power3.out',
    height: 'auto',
    opacity: 1,
  });
};

const toggleButtons = (optionToShow: string) => {
  const el = unref(showMoreEl) as HTMLElement;
  const showOption = unref(showing);
  const isDivOpen = unref(showMore);
  if (optionToShow === 'pen' && showOption === 'gist' && isDivOpen) {
    animationToggleContent(el);
    showing.value = 'pen';
    return;
  }

  if (optionToShow === 'gist' && showOption === 'pen' && isDivOpen) {
    animationToggleContent(el);
    showing.value = 'gist';
    return;
  }

  showing.value = optionToShow;
  if (isDivOpen) {
    animationHideDiv(el);
    showMore.value = false;
  } else {
    animationShowDiv(el);
    showMore.value = true;
  }
};

</script>

<template>
  <button
    class="show-more-button button is-link is-rounded is-outlined my-4"
    @click="toggleButtons('gist')"
  >
    💻
    {{ showMore && showing === 'gist' ? 'Hide the gist' : 'Show me the gist' }}
  </button>
  <button
    v-if="havePen"
    class="show-more-button button is-link is-rounded is-outlined my-4 ml-2"
    @click="toggleButtons('pen')"
  >
    🖋
    {{ showMore && showing === 'pen' ? 'Hide the pen' : 'Show me the pen' }}
  </button>
  <div
    ref="showMoreEl"
    class="container-of-contents"
    :class="showMore ? 'show-more' : 'show-less blur'"
    :id="`show-more-${instanceID}`"
  >
    <slot v-if="showing === 'gist'" />
    <slot
      v-if="showing === 'pen'"
      name="pen"
    />
  </div>
</template>

<style>
.container-of-contents {
  z-index: 20;
  width: 110%;
  margin-left: -5%;
  margin-bottom: 20px;
  overflow: hidden;
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
