export function useStorage() {
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

  const setStoreToStorage = (name: Stores, store: any) => {
    const storeWithoutHistory = { ...store, history: [] }
    return localStorage.setItem("solo-" + name, JSON.stringify(storeWithoutHistory))
  }

  return { getStoreFromStorage, setStoreToStorage, removeStoreFromStorage }
}