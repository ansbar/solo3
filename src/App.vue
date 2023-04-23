<script lang="ts" setup>
  import Setup from "./views/Setup.vue"
  import Intro from "./views/Intro.vue"
  import Page from "./views/Page.vue"
  import Dev from "./views/Dev.vue"
  import SavedInfo from "./views/SavedInfo.vue"
  import { storeToRefs } from "pinia"  
  import { useMainStore, usePlayerStore } from "./stores"
  import { onMounted } from "vue"
  import { useStorage } from "@/utils/storage"
  import { computed } from "vue"
  import { EAbilities, EBattleStates } from "./assets/enums"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const { getStoreFromStorage } = useStorage()  
  const { currentPageId, dev, battlestate } = storeToRefs(useMainStore())

  const checkStorage = () => {
    // Get saved local storage data if it exists and setup.
    
    const mainStorageData = getStoreFromStorage("main")
    const playerStorageData = getStoreFromStorage("player")
    if (mainStorageData) {
      mainStore.$state = mainStorageData
      mainStore.setSavedData(true)
    }
    if (playerStorageData)
      playerStore.$state = playerStorageData
  }

  const init = () => {
    checkStorage()    

    if (dev.value) {
      playerStore.addPlayerAbility(EAbilities.escapeArtist)
      playerStore.addPlayerAbility(EAbilities.acrobat)
      playerStore.addPlayerAbility(EAbilities.immunity)
      playerStore.addPlayerAbility(EAbilities.climb)
      playerStore.addPlayerAbility(EAbilities.deflectArrows)
      playerStore.addPlayerAbility(EAbilities.lockPicker)
      playerStore.addPlayerAbility(EAbilities.playDead)
      playerStore.addPlayerAbility(EAbilities.poisonArrows)
    }
  }
  
  onMounted(() => {
    init()   
  })

  const showIntro = computed(() => battlestate.value === EBattleStates.intro)
  const showSetup = computed(() => currentPageId.value === 0 && battlestate.value !== EBattleStates.intro)
  const showPage = computed(() => currentPageId.value > 0)
</script>

<template>
  <Dev v-if="dev" />
  <div class="wrapper app">    
    <Intro v-if="showIntro" />
    <Setup v-if="showSetup" />
    <Page v-if="showPage" />
  </div>
  <SavedInfo />
</template>

<style lang="scss">
@import url("style/normalize.css");

body {
  font-size: 18px;
  line-height: 1.5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;

  @media screen and (max-width: 600px) {
    line-height: 1.3rem;
    font-size: 16px;
  }  
}

h1 {
  line-height: initial;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }  
}

h4 {
  font-size: 18px;

  &:first-child {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
}

.wrapper {
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;

  &.app {
    margin-bottom: 50px;
  }
}

.card {
  display: flex;
  background-color: #EBF5E6;
  border-radius: 5px;
  padding: 2em 2.5em 2em 2em;
  margin-bottom: 1.5em;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 1em 1.5em 1em 1em;
  }

  .first-col {
    width: 35%;
    padding-right: 3rem;
    border-right: 2px #9eb890 dashed;

    &.thin {
      width: 20%;
    }

    @media screen and (max-width: 600px) {
      width: 43%;
      padding-right: 1rem;
    }
  }
  .second-col {
    padding-left: 3rem;
    > div + div {
      margin-top: 1rem;
    }

    @media screen and (max-width: 600px) {
      padding-left: 1rem;
    }
  }

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

  &.small {
    font-size: 14px;
  }

  &:first-child {
    margin-top: 0
  }

  &:last-child {
    margin-bottom: 0
  }
}

ul {
  display: block !important;
  margin: 0.5rem 0;
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

  &:disabled {
    border-top: 2px solid #eee;
    border-bottom: 2px solid #ccc;
    cursor: auto;
  }

  &:hover, &:focus {
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  @media screen and (max-width: 600px) {
    min-height: 30px;
  }
}
</style>


