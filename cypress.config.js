const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me',
    video: true, 
    setupNodeEvents(on, config) {
      return config
    }
  }
})