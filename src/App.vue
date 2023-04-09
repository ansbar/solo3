<script lang="ts" setup>
  import Intro from "./views/Intro.vue"
  import Page from "./views/Page.vue"
  import Dev from "./views/Dev.vue"
  import { storeToRefs } from "pinia"  
  import { useMainStore } from "./stores/mainStore"

  const { currentPageId } = storeToRefs(useMainStore())
</script>

<template>
  <Dev />
  <div class="wrapper">    
    <Intro v-if="currentPageId === 0" />
    <Page v-else />
  </div>
</template>

<style lang="scss">

body {
  font-size: 18px;
  line-height: 1.3em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 0 10px 80px 0;
}

h1 {
  line-height: initial;
}

.wrapper {
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
}

.card {
  display: flex;
  justify-content: space-between;
  background-color: #EBF5E6;
  border-radius: 5px;
  padding: 2em 2.5em 2em 2em;
  margin-bottom: 1.5em;

  h3 {
    margin: 0 0 0.5em 0;
  }
}

img {
  max-width: 100%;
}

.text {
  margin: 1em 0;
  white-space: pre-line;

  &:first-child {
    margin-top: 0
  }

  &:last-child {
    margin-bottom: 0
  }
}

ul {
  display: block !important;
  margin: 0;
  padding-left: 1em;
  list-style-type: circle;

  +ul {
    margin-top: 0.5em;
  }

  li::first-letter {
    text-transform: uppercase
  }
}

a {
  color: #0052ce;
  text-decoration: none;
}

.non-active-link {
  color: #aaa;
}

button {
  background-color: #2b5e9a;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 42px;
  line-height: 20px;
  padding: 10px 16px; 
  min-width: 80px;
  font-family: monospace;
  text-transform: uppercase;
  border-top: 2px solid #347fd6;
  border-bottom: 2px solid #0d509d;

  &:hover, &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }
}
</style>


