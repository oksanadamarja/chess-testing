const { defineConfig } = require("cypress");

const baseUrl = "https://www.liavaag.org/English/Video-Games/Chess/";

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
