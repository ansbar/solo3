'use strict'

// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: "@typescript-eslint/parser"
  },
  rules: {
    "indent": ["error", 2],
    "semi": ["error", "never"],
    "vue/multi-word-component-names": 0
  }
}
