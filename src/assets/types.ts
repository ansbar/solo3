import { EAbilities, EOpponents, EAttackType, EBattleModifiers, EBattleStates, EItems, EDefenseType, EAddedAbilities } from "./enums"

// Convert enums to types to use in interfaces
export type TAbilities = Record<EAbilities | EAddedAbilities, string>
export type TOpponents = Record<EOpponents, string>
export type TAttackType = Record<EAttackType, string>
export type TDefenseType = Record<EDefenseType, string>
export type TBattleModifiers = Record<EBattleModifiers, string>
export type TBattleStates = Record<EBattleStates, string>
export type TItems = Record<EItems, string>