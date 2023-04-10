import { EAbilities, EAttackType } from "../enums"

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
  playerAttackValue?: number
  playerDefense: number[]
  playerDamage?: string
  blockable?: boolean
  damage: string[] // 1T6+1
  defense: number[]
}