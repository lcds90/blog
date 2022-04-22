const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  pluginOptions: {
    i18n: {
      compositionOnly: false,
      enableLegacy: false,
      fallbackLocale: 'en',
      fullInstall: true,
      locale: 'pt',
      localeDir: 'locales',
      runtimeOnly: false,
    },
  },
  transpileDependencies: true,
});
