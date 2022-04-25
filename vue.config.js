const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/theme.scss";
        `,
      },
    },
  },
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
