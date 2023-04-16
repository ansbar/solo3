import { usePlayerStore } from "@/stores"
import { useMainStore } from "@/stores"

export function useStorage() {
  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  type Stores = "main" | "player" 

  const getStoreFromStorage = (name: Stores) => {
    const storeData = localStorage.getItem("solo-" + name)
    if (storeData) {
      return JSON.parse(storeData)
    }
    return false
  }

  const removeStoreFromStorage = (name: Stores) => {
    localStorage.removeItem("solo-" + name)
  }

  const setStoreToStorage = (name: Stores) => {
    let store 
    if (name === "player")
      store = playerStore.$state
    else if (name === "main")
      store = mainStore.$state

    try {
      window.console.log(store)
      const stringifiedStorage = JSON.stringify(store)
      return localStorage.setItem("solo-" + name, stringifiedStorage)
    } catch (err) {
      console.error(err)
      return false
    }    
  }

  return { getStoreFromStorage, setStoreToStorage, removeStoreFromStorage }
}