const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@diagram': path.resolve(__dirname, 'src/views/modules/GoJS/lib'),
        '@generators': path.resolve(__dirname, 'src/views/modules/GoJS/lib/generators'),
      },
      extensions: ['.ts', '.tsx'],
    },
  },
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
