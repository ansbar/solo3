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
  // Only applicable combined with playerAttackType instant, like page 340
  enableInnerForce?: boolean 
  playerAttackValue?: number
  // Player defense against the attack (like puck or kick)
  // In a multiple opponent battle the numbers indicate player defense against the current number of opponents.
  // The more opponents, the less defense you have. For example:
  // [9,8,7] means the you have 9 defense when only one opponent is alive, and 7 if all three lives.
  playerDefense: number[] 
  // In rare cases the opponent performs a throw before the attack. Like in page 244.
  // In a multiple opponent battle the numbers indicate player defense against the current number of opponents.
  playerThrowDefense?: number [] 
  playerDamage?: string // Only used when the damage differs from the default (IT6 for punch/1T6+2 for kick)
  blockable?: boolean
  missDamage?: number
  // After a successful attack (most often a throw) you can add this number to you next attack as a modification
  attackModification?: number
  // Sometimes a successful attack (throw) results in a static defense number in the next attack instead of the normal attackModification
  // Like page 63
  staticDefenseModification?: number
  damage: string[] // 1T6+1
  // Direct damage to the player
  directDamageOnPlayer?: {
    state: EBattleStates,
    onlyOnHit?: boolean // Only when a successful player attack lands
    damage: string
  },
  // If opponent causes damage on player when "still alive", i e after player attack, used with with playerAttackType instant. Like page 278
  stillAliveDamage?: string
  // The opponents normal defense value from this specific attack of yours
  defense: number[]  
  // In some battles your first attack takes the opponent of guard and you have a bonus
  // It could for example say: "If this is your first attack he has 5, not 6 in defense" (Page 236 or 286)
  // In this case you det defense to 6 and firstAttackBonus to 1 (6-1=5)
  firstAttackBonus?: number,
  directWinGoto?: number,
  enableAlly?: boolean, // Will enable ally attack until end of battle 
  allyAttack?: {
    damage: string,
    defense: number,
    ally: EOpponents
  }
}