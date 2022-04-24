<script setup lang="ts">
import { onMounted, ref } from 'vue';

const userTheme = ref('light-theme');

const setTheme = (theme: string) => {
  localStorage.setItem('user-theme', theme);
  userTheme.value = theme;
  document.documentElement.className = theme;
};

const toggleTheme = () => {
  const activeTheme = localStorage.getItem('user-theme');
  console.log(activeTheme);

  if (activeTheme === 'light-theme') {
    setTheme('dark-theme');
  } else {
    setTheme('light-theme');
  }
};

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  if (hasDarkPreference) {
    return 'dark-theme';
  }
  return 'light-theme';
};

const getTheme = () => localStorage.getItem('user-theme');

onMounted(() => {
  const initUserTheme = getMediaPreference() || getTheme();
  setTheme(initUserTheme);
});

</script>

<template>
  <div class="p-4">
    <label
      class="switch-label"
      for="checkbox"
    >
      <input
        class="switch-toggle"
        type="checkbox"
        id="checkbox"
        @change="toggleTheme"
      >
      <span v-if="userTheme === 'dark-theme'">🌙</span>
      <span v-else>☀️</span>
      <span
        v-if="userTheme === 'dark-theme'"
        class="theme-message p-2"
      >
        Dark mode ativado
      </span>
      <span
        v-else
        class="theme-message p-2"
      >
        Light mode ativado
      </span>
    </label>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/theme.scss';

:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --primary-color: #{$pink};
}

:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
  --primary-color: #{$purple};
}

html,
body,
#app {
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
  transition: background 0.25s ease;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--text-primary-color) !important;
}
</style>

<style scoped>
.switch-label {
  display: grid;
  grid: 1fr / repeat(2, 1fr);
  place-content: center;
  place-items: center;
  gap: 10px;
  width: 100%;
}

.switch-toggle {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 2.5em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

.switch-toggle::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
  border-radius: 2.5em;
}

.switch-toggle:checked::before {
  transform: scale(1);
}

.theme-message {
  position: absolute;
    bottom: 19px;
    left: 20px;
    width: 175px;
  /* border: 0.25px solid var(--accent-color); */
  font-size: 0.75rem;
  display: grid;
  justify-items: end;
  background: radial-gradient(circle,
      var(--background-color-secondary) 0%,
      var(--background-color-secondary) 100%);
  animation: 2s ease fadeIn;
  z-index: -1;
  border-left: var(--text-primary-color) double 3.5px;
}

@keyframes fadeIn {
  0% {
    left: -100px;
    opacity: 0;
  }

  100% {
    left: 19px;
    opacity: 1;
  }
}
</style>
