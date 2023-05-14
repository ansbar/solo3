import { EAbilities, EAttackType, EBattleStates, EOpponents } from "../enums"

export type IOpponents = Record<string, IOpponent>

export interface IOpponent {
  opponents: number,
  win: number,
  loss?: number
  miss?: number
  attributes: {
    name: string[]
    hp: number[]
    hpMax: number[]
    counter?: number
    counterGoto?: number
    missAbility?: EAbilities
  }
  pages: {
    [index: number]: IOpponentPage
  }
}

export interface IOpponentPage {
  playerAttackType: EAttackType
  enableInnerForce?: boolean // Only applicable combined with playerAttackType instant, like page 340
  playerAttackValue?: number
  playerDefense: number[] // Player defense against the attack (like puck or kick)
  playerThrowDefense?: number [] // In rare cases the opponent performs a throw before the attack. Like in page 244.
  playerDamage?: string  
  blockable?: boolean
  missDamage?: number
  damage: string[] // 1T6+1
  // Direct damage to the player
  directDamageOnPlayer?: {
    state: EBattleStates,
    onlyOnHit?: boolean // Only when a successful player attack lands
    damage: string
  },
  defense: number[]  
  directWinGoto?: number,
  enableAlly?: boolean, // Will enable ally attack until end of battle 
  allyAttack?: {
    damage: string,
    defense: number,
    ally: EOpponents
  }
}