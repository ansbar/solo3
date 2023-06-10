import { defineStore } from "pinia"
import { usePlayerStore } from "./playerStore"
import { TBattlePhases, TBooks, TDifficulty, TLanguages, TModals, TPages } from "@/assets/types"

interface Main {
  language?: TLanguages
  book?: TBooks
  mainPage: TPages
  battlestate: TBattlePhases
  currentPageId: number
  dev: boolean  
  battleRoundCounter: number
  thrownOpponent?: number
  currentOpponent: number
  history: string[]
  savedData: boolean
  difficulty: TDifficulty
  numberOfAbilities: number
  currentModal: TModals
}

export const useMainStore = defineStore("main", {
  state: (): Main => (
    { 
      language: undefined,
      book: undefined,
      mainPage: "start",
      battlestate: "none",
      battleRoundCounter: 1,
      currentPageId: 0,
      dev: false,
      currentOpponent: 0,
      thrownOpponent: undefined,
      history: [],
      savedData: false,
      difficulty: "veryHard",
      numberOfAbilities: 3,
      currentModal: "none"
    }
  ),
  actions: {
    closeModal () {
      this.currentModal = "none"
    },
    setDifficulty (payload: TDifficulty) {
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
    setBattlestate (payload: TBattlePhases) {
      if (this.battlestate === "none" && payload === "innerForce") 
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
