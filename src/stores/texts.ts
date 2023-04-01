import { defineStore } from 'pinia'
import { type Texts, type Text_abilities, type Text_defense } from '../assets/textsInterfaces'

export const useTextsStore = defineStore('text', {
  state: (): Texts => ({
    main: '',
    stillAlive: '',
    choices: [],
    abilities: {
      shuriken: '',
      deflectArrows: '',
      acrobat: '',
      immunity: '',
      playDead: '',
      escapeArtist: '',
      poisonArrows: '',
      lockPicker: '',
      climb: ''
    },
    directWin: '',
    miss: '',
    defense: {
      punch: '',
      kick: '',
      throw: ''
    }
  }),
  actions: {
    set_story_texts (payload: { mainText: string, stillAlive: string, directWin: string, miss: string, choices: string[] }) {
      this.main = payload.mainText
      this.stillAlive = payload.stillAlive
      this.directWin = payload.directWin
      this.miss = payload.miss
      this.choices = payload.choices
    },
    set_text_ability (payload: Text_abilities) {
      this.abilities = payload
    },
    set_text_defense (payload: Text_defense) {
      this.defense = payload
    }
  }
})
