import { defineStore } from "pinia"
import { EAbilities, EAttackType } from "@/assets/enums"
import { IOpponent, IOpponentPage } from "@/assets/interfaces/opponents"

interface StoreOpponent {
  id: string
  counter?: number,
  counterGoto?: number,
  missAbility?: EAbilities
  playerAttackType: EAttackType
  playerAttackValue?: number,
  playerDamage?: string
  blockable?: boolean
  missDamage?: number
  win: number,
  loss?: number,
  miss?: number
  directWin?: number,
  opponents: {
    name: string
    hp: number,
    hpMax: number,    
    playerDefense: number[],
    damage: string
    defense: number,
  }[]
}

export const useOpponentStore = defineStore("opponent", {
  state: (): StoreOpponent => ({
    id: "",
    counter: undefined,
    counterGoto: undefined,
    missAbility: undefined,
    playerAttackType: EAttackType.none,
    playerAttackValue: undefined,
    playerDamage: undefined,
    blockable: undefined,
    missDamage: undefined,
    opponents: [],
    win: 0,
    loss: 0,
    miss: 0,
    directWin: 0
  }),
  actions: {
    setOpponentStaticData(payload: IOpponent, page: number) {
      // This is set once per battle (static data)
      this.$reset() // Reset opponent state when new opponent     

      this.$patch({
        counter: payload.attributes.counter,
        counterGoto: payload.attributes.counterGoto,
        missAbility: payload.attributes.missAbility,
        win: payload.win,
        loss: payload.loss,
        miss: payload.miss
      })
      for (let i = 0; i < payload.opponents; i++) {
        this.opponents.push({
          name: payload.attributes.name[i],
          hp: payload.attributes.hp[i],
          hpMax: payload.attributes.hpMax[i],
          playerDefense: payload.pages[page].playerDefense,
          damage: payload.pages[page].damage?.[i],
          defense: payload.pages[page].defense?.[i],
        })
      }
    },
    setOpponentPageData (payload: IOpponentPage) {
      // This is set every page switch
      this.$patch({
        playerAttackType: payload.playerAttackType,
        playerAttackValue: payload.playerAttackValue,
        playerDamage: payload.playerDamage,
        missDamage: payload.missDamage,
        blockable: payload.blockable,
        directWin: payload.directWinGoto
      })

      for (let i = 0; i < this.opponents.length; i++) {
        this.opponents[i].playerDefense = payload.playerDefense
        this.opponents[i].damage = payload.damage?.[i]
        this.opponents[i].defense = payload.defense?.[i]
      }
    },
    setOpponentHp (index: number, payload: number) {
      this.opponents[index].hp -= payload
      if (this.opponents[index].hp < 0) this.opponents[index].hp = 0
    }
  }
})
