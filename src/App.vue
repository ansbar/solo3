<script lang="ts" setup>
  import Start from "./views/preGame/Start.vue"
  import Setup from "./views/preGame/Setup.vue"
  import Intro from "./views/preGame/Intro.vue"
  import Page from "./views/Page.vue"
  import Dev from "./views/Dev.vue"
  import TopBar from "./views/TopBar.vue"
  import BottomBar from "./views/BottomBar.vue"
  import Background from "./views/preGame/Background.vue"
  import { storeToRefs } from "pinia"  
  import { useMainStore, usePlayerStore, usePersistantStore } from "./stores"
  import { onMounted } from "vue"
  import { useStorage } from "@/utils/storage"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const persistantStore = usePersistantStore()
  const { getStoreFromStorage } = useStorage()  
  const { dev, mainPage } = storeToRefs(useMainStore())

  const setupStorage = () => {
    // Get saved local storage data if it exists and setup.    
    const mainStorageData = getStoreFromStorage("main")
    const playerStorageData = getStoreFromStorage("player")
    const persistantStorageData = getStoreFromStorage("persistant")

    if (persistantStorageData)
      persistantStore.$state = persistantStorageData

    if (mainStorageData) {
      mainStore.$state = mainStorageData
      mainStore.setSavedData(true)
    }

    if (playerStorageData) {
      playerStore.$state = playerStorageData
    }
  }
 
  onMounted(() => {
    setupStorage()   
    if (dev.value) mainStore.mainPage = "setup"
  })
</script>


<template>
  <Dev v-if="dev" />
  <TopBar />
  <div class="wrapper app">    
    <Suspense><Start v-if="mainPage === 'start'" /></Suspense>
    <Suspense><Intro v-if="mainPage === 'intro'" /></Suspense>
    <Suspense><Background v-if="mainPage === 'background'" /></Suspense>
    <Suspense><Setup v-if="mainPage === 'setup'" /></Suspense>
    <Suspense><Page v-if="mainPage === 'started'" /></Suspense>
  </div>
  <BottomBar />
</template>


<style lang="scss">
  @import "./style/normalize.css";
  @import "./style/general.scss";
</style>