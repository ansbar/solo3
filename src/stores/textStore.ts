import { defineStore } from "pinia"
import { ILanguagePage, ILanguageGeneral } from "../assets/languages/languageInterfaces"

interface StoreTexts extends ILanguageGeneral {
  page: ILanguagePage
}

/* 
 * This store contains the texts for the current language selected 
 */

export const useTextStore = defineStore("texts", {
  state: (): StoreTexts => ({
    page: {
      mainText: "",
      choices: [""],
      stillAlive: "",
      miss: "",
      directWin: ""
    },
    abilities: {
      shuriken: "",
      deflectArrows: "",
      acrobat: "",
      immunity: "",
      playDead: "",
      escapeArtist: "",
      poisonArrows: "",
      lockPicker: "",
      climb: "",
    },
    misc: {
      playerName: "",
      damage: "",
      defense: "",
      piratecaptain: "",
      soldiers: "",
    },
    help: {
      block: "",
      innerStrength: "",
    },
    items: {
      healingPotion: "",
      opalring: "",
      shuriken: "",
      gold: "",
      glove: "",
      magicShuriken: "",
    },
    defense: {
      punch: "",
      kick: "",
      throw: "",
    },
    temporary: {
      attack: "",
      damage: "",
    },
    modifiers: {
      punch: "",
      kick: "",
      throw: "",
      fate: "",
    },
    attributes: {
      hp: "",
      innerStrength: "",
    }
  } as StoreTexts),

  actions: {
    setPageTexts(payload: ILanguagePage) {
      this.$patch({ page: payload })
    },
    setGeneralTexts(payload: ILanguageGeneral) {
      this.$patch({ help: payload.help })
      this.$patch({ abilities: payload.abilities })
      this.$patch({ items: payload.items })
      this.$patch({ defense: payload.defense })
      this.$patch({ misc: payload.misc })
      this.$patch({ modifiers: payload.modifiers })
      this.$patch({ attributes: payload.attributes })
      this.$patch({ temporary: payload.temporary })
    }
  }
})
