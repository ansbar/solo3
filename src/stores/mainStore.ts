import { defineStore } from "pinia"
import { EBattleStates, EDifficulty } from "@/assets/enums"
import { usePlayerStore } from "./playerStore"

interface Main {
  battlestate: EBattleStates
  currentPageId: number
  dev: boolean  
  battleRoundCounter: number
  thrownOpponent?: number
  currentOpponent: number
  history: string[]
  savedData: boolean
  difficulty: EDifficulty
  numberOfAbilities: number
}

export const useMainStore = defineStore("main", {
  state: (): Main => (
    { 
      battlestate: EBattleStates.intro,
      battleRoundCounter: 1,
      currentPageId: 0,
      dev: true,
      currentOpponent: 0,
      thrownOpponent: undefined,
      history: [],
      savedData: false,
      difficulty: EDifficulty.veryHard,
      numberOfAbilities: 3
    }
  ),
  actions: {
    setDifficulty (payload: EDifficulty) {
      const playerStore = usePlayerStore()
      playerStore.abilities = []

      switch (payload) {
        case "hard":
          playerStore.modifiers.fate = 1
          playerStore.modifiers.punch = 1
          playerStore.modifiers.kick = 1
          playerStore.modifiers.throw = 1
          playerStore.items.shuriken = 6
          playerStore.attributes.innerForce = 6
          playerStore.attributes.innerForceMax = 6
          this.numberOfAbilities = 4
          break     
        case "medium":
          playerStore.modifiers.fate = 2
          playerStore.modifiers.punch = 2
          playerStore.modifiers.kick = 2
          playerStore.modifiers.throw = 2
          playerStore.items.shuriken = 7
          playerStore.attributes.innerForce = 7
          playerStore.attributes.innerForceMax = 7
          this.numberOfAbilities = 5
          break
        default:
          playerStore.modifiers.fate = 0
          playerStore.modifiers.punch = 0
          playerStore.modifiers.kick = 0
          playerStore.modifiers.throw = 0
          playerStore.items.shuriken = 5
          playerStore.attributes.innerForce = 5
          playerStore.attributes.innerForceMax = 5
          this.numberOfAbilities = 3
          break
      }

      this.difficulty = payload
    },
    setCurrentPageId (payload: number) {
      this.currentPageId = payload
    },
    setBattlestate (payload: EBattleStates) {
      if (this.battlestate === EBattleStates.none && payload === EBattleStates.innerForce) 
        this.addToHistory("Striden börjar")
      this.battlestate = payload
    },
    addToHistory (payload: string) {
      this.history.unshift(payload)
    },
    setCurrentOpponent (payload: number){
      this.currentOpponent = payload
    },
    setSavedData (payload: boolean){
      this.savedData = payload
    },
    setThrownOpponent (payload: number){
      this.thrownOpponent = payload
    },
    clearThrownOpponent (){
      this.thrownOpponent = undefined
    },
    clearHistory () {
      this.history = []
      this.battleRoundCounter = 1
    },
    addToCounter (payload: boolean) {
      this.battleRoundCounter = payload? this.battleRoundCounter + 1 : 1 
    }
  }
})
