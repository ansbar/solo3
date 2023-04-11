import { TAbilities, TDefenseType } from "../types"

export interface ILanguagePages {
  [key: number]: ILanguagePage
}

export interface ILanguagePage {
  mainText: string
  choices?: string[]
  stillAlive?: string
  successfulThrow?: string
  unsuccessfulThrow?: string
  miss?: string
  directWin?: string
}

export interface ILanguageGeneral {
  help: ILanguageHelp
  abilities: TAbilities
  defense: TDefenseType
  misc: ILanguageMisc
  modifiers: ILanguageModifiers
  attributes: ILanguageAttributes
  items: ILanguageItems
  temporary: ILanguageTemporary
}

export interface ILanguageHelp {
  block: string
  innerStrength: string
}

export interface ILanguageMisc {
  playerName: string
  damage: string
  defense: string
  piratecaptain: string
  soldiers: string
  cobraman: string
  snowGiant: string
  goblin: string
  giant: string
  [key: string]: string
}

export interface ILanguageItems {
  shuriken: string  
  gold: string
  healingPotion: string
  opalring: string
  glove: string
  magicShuriken: string
  fireLizardEssence: string
  herbs: string
}

export interface ILanguageModifiers {
  punch: string
  kick: string
  throw: string
  fate: string  
}

export interface ILanguageAttributes {
  hp: string
  innerStrength: string
}

export interface ILanguageTemporary {
  attack: string
  damage: string
}
