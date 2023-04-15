<script lang="ts" setup>
  import { onMounted, watch, computed } from "vue"
  import { storeToRefs } from "pinia"
  import { useMainStore, useOpponentStore, useTextStore, usePageStore, usePlayerStore } from "@/stores"
  import { languagePages } from "@/assets/languages/swedish"
  import { pageData } from "@/assets/pages"
  import Opponent from "./Opponent.vue"
  import opponent from "@/assets/opponents"
  import MainText from "./MainText.vue"
  import Choices from "./Choices.vue"
  import Image from "./Image.vue"
  import Battle from "./Battle/Battle.vue"
  import SideEffects from "./SideEffects.vue"
  import SpecialCondition from "./SpecialCondition.vue"
  import History from "./History.vue"
  import NonBattleInfo from "./NonBattleInfo.vue"
  import { EBattleStates } from "@/assets/enums"
  import { useStorage } from "@/utils/storage"

  const { setStoreToStorage, removeStoreFromStorage } = useStorage()
  const textStore = useTextStore()
  const playerStore = usePlayerStore()
  const pageStore = usePageStore()
  const opponentStore = useOpponentStore()
  const mainStore = useMainStore()
  const { currentPageId, battlestate } = storeToRefs(useMainStore())

  const initPage = (pageId: number) => {
    textStore.setPageTexts(languagePages[pageId]) // Set all language for page
    pageStore.setPageData(pageData[pageId]) // Set all page data, like choices

    if (pageStore.opponent) {
      // If an opponent exists on page
      if (battlestate.value === "none") {
        // Init opponent data once per battle
        mainStore.clearHistory()
        opponentStore.setOpponentStaticData(opponent[pageStore.opponent], currentPageId.value)          
      }
      // Set opponent page data every page switch
      opponentStore.setOpponentPageData(opponent[pageStore.opponent].pages[currentPageId.value])
      mainStore.setBattlestate(EBattleStates.chooseOpponent)
    } else if (pageStore.autoEndBattle) {
      // If the battle was ended through a page choice
      mainStore.setBattlestate(EBattleStates.none)
    }
  }

  const showSideEffects = () => typeof pageStore.sideEffects === "object"

  onMounted(() => {
    initPage(currentPageId.value)
  })

  watch(currentPageId, (pageId) => {
    initPage(pageId) // Watch for page switch

    // Save some data to local storage at page swap as long as not in combat
    console.log(pageStore.specialCondition)
    if (!pageStore.opponent && !pageStore.specialCondition) {
      setStoreToStorage("main", mainStore)
      setStoreToStorage("player", playerStore)
    } else {
      // Remove all store data if in battle or some fate/attack roll so that user cant restart battles if unsuccessful.
      removeStoreFromStorage("main")
      removeStoreFromStorage("player")
    }    
  })

  watch(battlestate, (state: EBattleStates) => {
    // Handle history
    if (state === EBattleStates.innerStrength) {
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} startad`)
    } else if (state === EBattleStates.pending) {
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
      mainStore.addToCounter(true)
    }    
  })

  const showChoices = computed(() => {
    // Hide choices when in an battle or whn there are special conditions
    return (battlestate.value === EBattleStates.none || battlestate.value === EBattleStates.pending) 
      && !pageStore.specialCondition
  })

  const showHistory = computed(() => {
    return pageStore.opponent || pageStore.specialCondition
  })

  const showNonBattleInfo = computed(() => {
    return !pageStore.opponent
  })
</script>

<template>
  <h1>#{{ currentPageId }}</h1>
  <section>
    <Image />
    <MainText />    
    <SideEffects v-if="showSideEffects()" />
    <Opponent v-if="pageStore.opponent" />
    <Battle v-if="pageStore.opponent" />
    <SpecialCondition v-if="pageStore.specialCondition" />    
    <Choices v-if="showChoices" />
    <NonBattleInfo v-if="showNonBattleInfo" />
    <History v-if="showHistory" />
  </section>
</template>