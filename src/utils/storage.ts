import { usePlayerStore, useMainStore, usePersistantStore } from "@/stores"

export function useStorage() {
  const persistantStore = usePersistantStore()
  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  type Stores = "main" | "player" | "persistant"

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
    else if (name === "persistant")
      store = persistantStore.$state

    try {
      const stringifiedStorage = JSON.stringify(store)
      return localStorage.setItem("solo-" + name, stringifiedStorage)
    } catch (err) {
      console.error(err)
      return false
    }    
  }

  return { getStoreFromStorage, setStoreToStorage, removeStoreFromStorage }
}