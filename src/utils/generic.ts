import { useMainStore } from "../stores/mainStore"
import { useStorage } from "./storage"

export function useGeneric() {
  const mainStore = useMainStore()  
  const storage = useStorage()

   // If player looses a battle and is dead
   const doStartOver = () => {
    storage.removeStoreFromStorage("main")
    storage.removeStoreFromStorage("player")
    mainStore.currentPageId = 0
    mainStore.mainPage = "setup"
    mainStore.battlestate = "none"
  }

  const gotoPage = (pageId: number) => {
    if (mainStore.currentPageId === pageId) {
      mainStore.setBattlestate("chooseOpponent")
    } else {
      mainStore.setCurrentPageId(pageId)
      mainStore.battlestate = "pending"
    }
  }

  const getImageUrl = (image?: string, generic = false) => {
    const folder = generic ? "" : `books/${mainStore.book}/`
    let url

    if (!image) image =  mainStore.currentPageId.toString() // page id as image name default

    if (folder) {
      url = new URL(`/src/assets/books/${mainStore.book}/images/${image}.png`, import.meta.url).href
    } else {
      url = new URL(`/src/assets/images/${image}.png`, import.meta.url).href
    }    

    // Check if png files exists otherwise try with jpg
    if (url.substring(url.length - 9) === "undefined") {
      if (folder) {
        url = new URL(`/src/assets/books/${mainStore.book}/images/${image}.jpg`, import.meta.url).href
      } else {
        url = new URL(`/src/assets/images/${image}.jpg`, import.meta.url).href
      }  
    }
    return url    
  }

  return { doStartOver, gotoPage, getImageUrl }
}