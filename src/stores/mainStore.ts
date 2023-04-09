import { defineStore } from "pinia"
import { EBattleStates } from "../assets/enums"

interface Main {
  battlestate: EBattleStates
  currentPageId: number
  battleRoundCounter: number
  history: string[]
}

export const useMainStore = defineStore("main", {
  state: (): Main => (
    { 
      battlestate: EBattleStates.none,
      battleRoundCounter: 1,
      currentPageId: 0,
      history: []
    }
  ),
  actions: {
    setCurrentPageId (payload: number) {
      this.currentPageId = payload
    },
    setBattlestate (payload: EBattleStates) {
      if (this.battlestate === EBattleStates.none && payload === EBattleStates.innerStrength) this.addToHistory("Striden börjar")
      this.battlestate = payload
    },
    addToHistory (payload: string) {
      this.history.unshift(payload)
    },
    addToCounter (payload: boolean) {
      this.battleRoundCounter = payload? this.battleRoundCounter + 1 : 1 
    }
  }
})
