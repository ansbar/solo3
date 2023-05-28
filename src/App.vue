<script lang="ts" setup>
  import Setup from "./views/preGame/Setup.vue"
  import Intro from "./views/preGame/Intro.vue"
  import Page from "./views/Page.vue"
  import Dev from "./views/Dev.vue"
  import SavedInfo from "./views/SavedInfo.vue"
  import Background from "./views/preGame/Background.vue"
  import { storeToRefs } from "pinia"  
  import { useMainStore, usePlayerStore } from "./stores"
  import { onMounted } from "vue"
  import { useStorage } from "@/utils/storage"
  import { EAbilities } from "./assets/enums"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const { getStoreFromStorage } = useStorage()  
  const { dev, mainPage } = storeToRefs(useMainStore())

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
</script>


<template>
  <Dev v-if="dev" />
  <div class="wrapper app">    
    <Intro v-if="mainPage === 'intro'" />
    <Background v-if="mainPage === 'background'" />
    <Setup v-if="mainPage === 'setup'" />
    <Page v-if="mainPage === 'started'" />
  </div>
  <SavedInfo />
</template>


<style lang="scss">
  @import "./style/normalize.css";
  @import "./style/general.scss";
</style>


