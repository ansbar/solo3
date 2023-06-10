<script lang="ts" setup>
  import { onMounted, watch, computed } from "vue"
  import { storeToRefs } from "pinia"
  import { useMainStore, useOpponentStore, usePageStore } from "@/stores"
  import { useStorage } from "@/utils/storage"
  import { pageData } from "@/assets/books/avenger/pages"
  import Opponent from "./Battle/Opponent.vue"
  import opponent from "@/assets/books/avenger/opponents"
  import MainText from "./Extras/MainText.vue"
  import Choices from "./Extras/Choices.vue"
  import Image from "./Extras/Image.vue"
  import Battle from "./Battle/Battle.vue"
  import SideEffects from "./Extras/SideEffects.vue"
  import SpecialCondition from "./Extras/SpecialCondition.vue"
  import History from "./Extras/History.vue"
  import NonBattleInfo from "./Extras/NonBattleInfo.vue"
  import { TBattlePhases } from "@/assets/types"

  const mainStore = useMainStore()
  const pageStore = usePageStore()
  const opponentStore = useOpponentStore()
  const { setStoreToStorage, removeStoreFromStorage } = useStorage()
  const { currentPageId, battlestate } = storeToRefs(useMainStore())

  // When a page change happends
  const initPage = (pageId: number) => {
    pageStore.setPageData(pageData[pageId]) // Set all page data, like choices

    // If an opponent exists on page
    if (pageStore.opponent) {      
      // Init opponent data once per battle
      if (battlestate.value === "none") {       
        mainStore.clearHistory()
        opponentStore.setOpponentStaticData(opponent[pageStore.opponent])          
      }

      // Set opponent page data every page switch
      opponentStore.setOpponentPageData(opponent[pageStore.opponent].pages[currentPageId.value])

      if (opponentStore.playerAttackType === "none") {
        // Skip whole attack phase, this is just a pending mode to keep opponents data intact until the battle starts again
        mainStore.battlestate = "pending"
      } else if (opponentStore.playerAttackType === "defense") {
        // Skip attack if player wont be able to attack
        mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} startad`)
        mainStore.battlestate = "defend"
      } else {
        mainStore.setBattlestate("chooseOpponent")
      }      
    } else if (pageStore.autoEndBattle) {
      // If the battle was ended through a page choice
      mainStore.setBattlestate("none")
    }

    // Scroll to top
    const el = document.getElementById("app")  
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const initStorage = () => {
    // Save some data to local storage at page change as long as not in combat or simular
    if (!pageStore.opponent && !pageStore.specialCondition && !pageStore.sideEffects) {
      setStoreToStorage("main")
      setStoreToStorage("player")
      mainStore.setSavedData(true)
    } else {
      // Remove all store data if in battle or some fate/attack roll so that user cant restart battles if unsuccessful.
      removeStoreFromStorage("main")
      removeStoreFromStorage("player")
      mainStore.setSavedData(false)
    }    
  }  

  onMounted(() => {
    initPage(currentPageId.value)

    // if (battlestate.value === EBattleStates.intro)
    //   mainStore.setBattlestate(EBattleStates.none)
  })

  watch(currentPageId, (pageId) => {
    initPage(pageId) // Watch for page change
    if (!mainStore.dev) initStorage()        
  })

  watch(battlestate, (state: TBattlePhases) => {
    // Handle history
    if (state === "innerForce") {
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} startad`)
    } else if (state === "pending") {
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
      mainStore.addToCounter(true)
      // To know which attacks has been used during a battle
      if (!opponentStore.attacksUsed.includes(mainStore.currentPageId))
        opponentStore.attacksUsed.push(mainStore.currentPageId)
    }    
  })

  const showChoices = computed(() => {
    // Hide choices when in an battle or when there are special conditions
    return (battlestate.value === "none" || battlestate.value === "pending") 
      && !pageStore.specialCondition
  })
  const showHistory = computed(() => pageStore.opponent || pageStore.specialCondition)
  const showSideEffects = computed(() => typeof pageStore.sideEffects === "object")  
  const showNonBattleInfo = computed(() => !pageStore.opponent)
</script>


<template>
  <h1>#{{ currentPageId }}</h1>

  <section>
    <Image />
    <MainText />    
    <SideEffects v-if="showSideEffects" />
    <Opponent v-if="pageStore.opponent" />
    <Battle v-if="pageStore.opponent" />
    <SpecialCondition v-if="pageStore.specialCondition" />    
    <Choices v-if="showChoices" />
    <NonBattleInfo v-if="showNonBattleInfo" />
    <History v-if="showHistory" />
  </section>
</template>