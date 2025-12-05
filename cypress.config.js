const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "viewportWidth":1500,
    "viewportHeight":900,
    "chromeWebSecurity":false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
