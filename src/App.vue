<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import Intro from './Intro.vue'
import { useStoryStore } from './stores/story'
import { pagesTexts } from "./assets/swedish"

const storyStore = useStoryStore()
const { story_id } = storeToRefs(storyStore)
</script>

<template>
  <div class="wrapper">
    <select v-model="story_id">
      <option
        v-for="(page, index) in pagesTexts"
        :key="page.mainText"
        :value="index"
      >
        Gå till {{ index }}
      </option>
    </select>

    <intro v-if="story_id === 0" />

    <div v-else>
      <h1>#{{ story_id }}</h1>
      <!-- <opponent v-if="storyHasOpponent" />  
                                <main-content :changes="changes" />
                                <battle v-if="main_battlestate !== 'pending'" />
                                <choices v-if="main_battlestate === 'pending'" />     -->
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  font-size: 18px;
  line-height: 1.3em;
  font-family: Georgia, 'Times New Roman', Times, serif
}

.wrapper {
  max-width: 700px;
  margin: 0 auto 50px;
  text-align: left;
}

.main-text {
  white-space: pre-line;
  margin-bottom: 1em;
}

.text {
  margin: 1em 0;
  white-space: pre-line;
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
</style>


