import { defineStore } from "pinia"
import { IOpponent, IOpponentPage } from "@/assets/interfaces/opponents"
import { TAbilities, TAttackType, TBattlePhases, TOpponents } from "@/assets/types"

interface DirectDamageOnPlayer {
  state: TBattlePhases,
  onlyOnHit?: boolean,
  damage: string
}

interface AllyAttack {  
  damage: string,
  defense: number,
  ally: TOpponents
}

export interface Opponent {
  name: string
  hp: number,
  hpMax: number,    
  playerDefense: number[],
  playerThrowDefense?: number[],
  damage: string
  defense: number,
  attackModification?: number
  staticDefenseModification?: number,
}

interface StoreOpponent {
  id: string
  counter?: number,
  counterGoto?: number,
  // Some pages have different values depending on if the attack has already been used. Like page 236.
  attacksUsed: number[]
  missAbility?: TAbilities
  playerAttackType: TAttackType
  enableInnerForce?: boolean
  playerAttackValue?: number,
  playerDamage?: string
  blockable?: boolean
  missDamage?: number
  win: number,
  loss?: number,
  miss?: number
  directWin?: number,
  directDamageOnPlayer?: DirectDamageOnPlayer,
  stillAliveDamage?: string
  enableAlly: boolean,
  allyAttack?: AllyAttack,
  firstAttackBonus?: number,
  noInnerForce?: boolean,
  opponents: Opponent[]
}

export const useOpponentStore = defineStore("opponent", {
  state: (): StoreOpponent => ({
    id: "",
    counter: undefined,
    counterGoto: undefined,
    attacksUsed: [],
    missAbility: undefined,
    playerAttackType: "none",
    enableInnerForce: undefined,
    playerAttackValue: undefined,
    playerDamage: undefined,
    blockable: undefined,
    missDamage: undefined,
    directDamageOnPlayer: {} as DirectDamageOnPlayer,
    enableAlly: false,
    stillAliveDamage: undefined,
    firstAttackBonus: undefined,    
    allyAttack: {} as AllyAttack,
    noInnerForce: false,
    opponents: [],
    win: 0,
    loss: 0,
    miss: 0,
    directWin: 0
  }),
  actions: {
    setOpponentStaticData(payload: IOpponent) {
      // This is set once per battle (static data)

      // Reset opponent state when new opponent
      this.$reset() 

      this.$patch({
        counter: payload.attributes.counter,
        counterGoto: payload.attributes.counterGoto,
        missAbility: payload.attributes.missAbility,
        noInnerForce: payload.noInnerForce,
        win: payload.win,
        loss: payload.loss,
        miss: payload.miss
      })
      for (let i = 0; i < payload.opponents; i++) {
        this.opponents.push({
          name: payload.attributes.name[i],
          hp: payload.attributes.hp[i],
          hpMax: payload.attributes.hp[i],
          // Just to initalize opponent, these datas will be set in setOpponentPageData
          playerDefense: [0],
          playerThrowDefense: [0],
          damage: "",
          defense: 0
        })
      }
    },
    setOpponentPageData (payload: IOpponentPage) {
      // This is set every page switch
      this.$patch({
        playerAttackType: payload.playerAttackType,
        enableInnerForce: payload.enableInnerForce,
        playerAttackValue: payload.playerAttackValue,
        playerDamage: payload.playerDamage,
        missDamage: payload.missDamage,
        blockable: payload.blockable,
        directDamageOnPlayer: payload.directDamageOnPlayer,
        directWin: payload.directWinGoto,
        stillAliveDamage: payload.stillAliveDamage,
        allyAttack: payload.allyAttack,
        firstAttackBonus: payload.firstAttackBonus,
      })
      // Will enable ally attack until end of battle 
      if (payload.enableAlly) this.enableAlly = true

      for (let i = 0; i < this.opponents.length; i++) {
        this.opponents[i].playerDefense = payload.playerDefense
        this.opponents[i].playerThrowDefense = payload.playerThrowDefense,
        this.opponents[i].damage = payload.damage?.[i]
        this.opponents[i].defense = payload.defense?.[i]     
        this.opponents[i].attackModification = payload.attackModification
        this.opponents[i].staticDefenseModification = payload.staticDefenseModification
      }           
    },
    setOpponentHp (index: number, payload: number) {
      this.opponents[index].hp -= payload
      if (this.opponents[index].hp < 0) this.opponents[index].hp = 0
    }
  }
})
