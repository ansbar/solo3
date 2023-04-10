import { useMainStore } from "../stores/mainStore"
import { EBattleStates } from "../assets/enums"

export function useGeneric() {
  const mainStore = useMainStore()  

   // If player loses a battle and is dead
   const doStartOver = () => {
    mainStore.currentPageId = 0
    mainStore.battlestate = EBattleStates.none
  }

  return { doStartOver }
}