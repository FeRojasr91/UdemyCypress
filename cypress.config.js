
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      // Registra el plugin del preprocessor (para reportes, filtrado, etc.)
      await addCucumberPreprocessorPlugin(on, config);

      // Ata el bundler (esbuild) para que Cypress sepa cómo transformar .feature
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Devuelve el config (puede haber sido modificado por el plugin)
      return config;
    },
  },
})
