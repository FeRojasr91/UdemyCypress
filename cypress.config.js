const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
  video: true,
  videosFolder: 'cypress/videos',



  e2e: {

    "viewportWidth":1500,
    "viewportHeight":900,
    "chromeWebSecurity":false,
    "pageLoadTimeout":9000,
    "defaultCommandTimeout":15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
