<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';
import { useI18n } from 'vue-i18n';

const langs = ref([{
  code: 'en',
  name: 'English',
}, {
  code: 'pt',
  name: 'Português',
}]);

const userLocale = ref('locale-pt');
const selectLocale = ref<HTMLSelectElement>();
const { locale } = useI18n();
const setLocale = (userLocaleChoice: string) => {
  localStorage.setItem('user-locale', userLocaleChoice);
  userLocale.value = userLocaleChoice;
};

const toggleLocale = () => {
  const el = unref(selectLocale) as HTMLSelectElement;
  const activeLocale = localStorage.getItem('user-locale');

  if (activeLocale === 'locale-pt') {
    locale.value = 'en';
    setLocale('locale-en');
  } else {
    locale.value = 'pt';
    setLocale('locale-pt');
  }
  el.value = 'choose-locale';
};

const getLocale = () => localStorage.getItem('user-locale');

onMounted(() => {
  const initUserLocale = getLocale() || 'locale-pt';
  setLocale(initUserLocale);
});

</script>

<template>
  <div class="navbar-item">
    <div
      class="locale-label"
      for="select-locale"
    >
      <div class="select is-rounded is-small">
        <select
          ref="selectLocale"
          type="select"
          id="select-locale"
          @change="toggleLocale"
        >
          <option
            disabled
            selected
            value="choose-locale"
          >
            Selecione o seu idioma
          </option>
          <option
            :key="`Lang${i}`"
            v-for="(lang, i) in langs"
            :value="lang.code"
          >
            {{ lang.name }}
          </option>
        </select>
      </div>
      <span
        v-if="userLocale === 'locale-pt'"
        class="locale-message p-2"
      >
        <span>🇧🇷</span>
        Português
      </span>
      <span
        v-else
        class="locale-message p-2"
      >
        <span>🇺🇸</span>
        English
      </span>
    </div>
  </div>
</template>

<style scoped>
.locale-label {
  display: grid;
  grid: 1fr 0.75fr / 1fr;
  place-content: center;
  place-items: center;
  width: 100%;
  background: var(--accent-color);
  margin-top: 5px;
}

.locale-label select {
  opacity: 0.25;
  transition: opacity 0.2s ease-in-out;
}

.locale-label:hover select {
  opacity: 1;
}

.locale-toggle {
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

.locale-toggle::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--primary-color);
  border-radius: 2.5em;
}

.locale-toggle:checked::before {
  transform: scale(1);
}

.locale-message {
  width: 175px;
  font-size: 0.75rem;
  display: grid;
  grid: 1fr / 0.15fr 1fr;
  justify-items: end;
  background: radial-gradient(circle,
      var(--background-color-secondary) 0%,
      var(--background-color-secondary) 100%);
  animation: 2s ease fadeIn;
  border-left: var(--text-primary-color) double 3.5px;
  color: var(--text-primary-color);
}

@keyframes fadeIn {
  0% {
    left: 100px;
    opacity: 0;
  }

  100% {
    left: 80px;
    opacity: 1;
  }
}
</style>
