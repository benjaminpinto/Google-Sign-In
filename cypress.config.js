const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ctzpyg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:
      'https://accounts.google.com/signup/v2/webcreateaccount?hl=en&amp;flowName=GlifWebSignIn&amp;flowEntry=SignUp',
  },
})
