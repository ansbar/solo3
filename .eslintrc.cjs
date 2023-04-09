"use strict"

// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser"
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "vue/multi-word-component-names": 0,
    "vue/script-indent": ["error", 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: []
    }],
    "vue/no-v-html": 0
  }
}
