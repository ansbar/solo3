import { defineStore } from "pinia"
import { EAbilities, EAttackType, EBattleStates, EOpponents } from "@/assets/enums"
import { IOpponent, IOpponentPage } from "@/assets/interfaces/opponents"

interface DirectDamageOnPlayer {
  state: EBattleStates,
  onlyOnHit?: boolean,
  damage: string
}

interface AllyAttack {  
  damage: string,
  defense: number,
  ally: EOpponents
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
  missAbility?: EAbilities
  playerAttackType: EAttackType
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
  enableAlly: boolean,
  allyAttack?: AllyAttack,
  firstAttackBonus?: number,
  opponents: Opponent[]
}

export const useOpponentStore = defineStore("opponent", {
  state: (): StoreOpponent => ({
    id: "",
    counter: undefined,
    counterGoto: undefined,
    attacksUsed: [],
    missAbility: undefined,
    playerAttackType: EAttackType.none,
    enableInnerForce: undefined,
    playerAttackValue: undefined,
    playerDamage: undefined,
    blockable: undefined,
    missDamage: undefined,
    directDamageOnPlayer: {} as DirectDamageOnPlayer,
    enableAlly: false,
    firstAttackBonus: undefined,    
    allyAttack: {} as AllyAttack,
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
