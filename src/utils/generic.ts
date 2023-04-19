import { useMainStore } from "../stores/mainStore"
import { EBattleStates } from "../assets/enums"
import { useStorage } from "./storage"

export function useGeneric() {
  const mainStore = useMainStore()  
  const storage = useStorage()

   // If player loses a battle and is dead
   const doStartOver = () => {
    storage.removeStoreFromStorage("main")
    storage.removeStoreFromStorage("player")
    mainStore.currentPageId = 0
    mainStore.battlestate = EBattleStates.intro
  }

  const gotoPage = (pageId: number) => {
    if (mainStore.currentPageId === pageId) {
      mainStore.setBattlestate(EBattleStates.chooseOpponent)
    } else {
      mainStore.setCurrentPageId(pageId)
      mainStore.battlestate = EBattleStates.pending
    }
  }

  const getImageUrl = () => new URL(`/src/assets/images/${mainStore.currentPageId}.png`, import.meta.url).href

  return { doStartOver, gotoPage, getImageUrl }
}