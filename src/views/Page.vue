<script lang="ts" setup>
  import { onMounted, watch, computed } from "vue"
  import { storeToRefs } from "pinia"
  import { useMainStore } from "../stores/mainStore"
  import { usePageStore } from "../stores/pageStore"
  import { useTextStore } from "../stores/textStore"
  import { useOpponentStore } from "../stores/opponentStore"  
  import { languagePages } from "../assets/languages/swedish"
  import { pageData } from "../assets/pages"
  import Opponent from "./Opponent.vue"
  import opponent from "../assets/opponents"
  import MainText from "./MainText.vue"
  import Choices from "./Choices.vue"
  import Image from "./Image.vue"
  import Battle from "./Battle/Battle.vue"
  import SideEffects from "./SideEffects.vue"
  import SpecialCondition from "./SpecialCondition.vue"
  import History from "./History.vue"
  import { EBattleStates } from "../assets/enums"

  const textStore = useTextStore()
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
      mainStore.setBattlestate(EBattleStates.innerStrength)
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
    <History v-if="showHistory" />
  </section>
</template>