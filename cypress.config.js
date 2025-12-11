const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "viewportWidth":1500,
    "viewportHeight":900,
    "chromeWebSecurity":false,
    "pageLoadTimeout":9000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
