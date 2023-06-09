import { TAbilities, TAddedAbilities, TDefenseTypes } from "../types"

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
  headings: ILanguageHeadings
  modifiers: ILanguageModifiers
  attributes: ILanguageAttributes
  items: ILanguageItems
  temporary: ILanguageTemporary
  difficulty: IDifficulty
}

export interface ILanguagePreGame {
  background?: {
    b1: string
    b2: string
    b3: string,
    b4: string,
    b5: string,
    b6: string,
  }
  intro: {
    title?: string
    copyright?: string
    illustratedBy?: string
    translatedBy?: string
    localCopyRight?: string
    scan?: string
    booksInfo?: string
    versionInfo?: string
    saveInfo?: string
  },
  setup?: {
    setDifficulty: string
    skills: string
    available: string
    choose: string
    chosen: string
    removeSkill: string
    remove: string
    startAdventure: string
  }
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
  damage: string
  defense: string
  hiddenMainText: string
  [key: string]: string
}

export interface ILanguageHeadings {
  background: string
  createCharacter: string
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
