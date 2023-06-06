import { TAbilities, TAddedAbilities, TDefenseTypes, TOpponents } from "../types"

export interface IndexSignature {
  [key: string]: string
}

export interface ILanguagePages {
  [key: number]: ILanguagePage
}

export interface ILanguagePage {
  mainText: string
  choices?: string[]
  successfulThrowChoices?: string[]
  stillAlive?: string // If opponent is still alive after attack phase
  successfulThrow?: string
  unsuccessfulThrow?: string
  successfulOpponentThrow?: string
  miss?: string
  directWin?: string
}

export interface ILanguageGeneral {
  gameHelp: ILanguageHelp
  difficultyHelp: IDifficulty
  abilities: Record<TAbilities | TAddedAbilities, string>
  defense: Record<TDefenseTypes, string>
  misc: ILanguageMisc
  opponents: Record<TOpponents, string>
  modifiers: ILanguageModifiers
  attributes: ILanguageAttributes
  items: ILanguageItems
  temporary: ILanguageTemporary
  difficulty: IDifficulty
}

export interface ILanguageHelp {
  block: string
  innerForce: string
}

export interface IDifficulty {
  medium: string
  hard: string
  veryHard: string
}

export interface ILanguageMisc {
  playerName: string
  damage: string
  defense: string
  hiddenMainText: string
  [key: string]: string
}

export interface ILanguageOpponents {
  none: string
  gorobei: string
  humanEater: string
  soldiers: string
  piratecaptain: string
  magician: string
  monk: string
  cobraman: string
  snowGiant: string
  goblin: string
  giant: string
  olvar: string
  olvarAndRuneWeaver: string
  guard: string
  yaemon: string
  [key: string]: string
}

export interface ILanguageItems {
  shuriken: string  
  gold: string
  healingPotion: string
  flashPowder: string
  opalring: string
  glove: string
  magicShuriken: string
  fireLizardEssence: string
  herbs: string
  amulet: string
  [key: string]: string
}

export interface ILanguageModifiers {
  punch: string
  kick: string
  throw: string
  fate: string  
}

export interface ILanguageAttributes {
  hp: string
  innerForce: string
}

export interface ILanguageTemporary {
  attack: string
  damage: string
}
