import { defineStore } from "pinia"
import {  TBooks, TLanguages,  } from "@/assets/types"

interface Persistant {
  language?: TLanguages
  book?: TBooks
}

export const usePersistantStore = defineStore("persistant", {
  state: (): Persistant => (
    { 
      language: "none",
      book: undefined,
    }
  ),
})
