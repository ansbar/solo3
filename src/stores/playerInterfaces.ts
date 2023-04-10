import { EAbilities } from "../assets/enums"

interface Player_items {
  shuriken: number
  opalring: boolean
  healingPotion: boolean
  gold: number
  glove: boolean
  magicShuriken: boolean
  fireLizardEssence: boolean
}

interface Player_modifiers {
  punch: number
  kick: number
  throw: number
  fate: number
}

interface Player_attributes {
  hp: number
  hpMax: number
  innerStrength: number
}

interface Player_temporary {
  useInnerStrength: boolean | null
  attackModifier: number 
  damageModifier: number
}

export interface Player {
  abilities: EAbilities[]
  items: Player_items
  modifiers: Player_modifiers
  attributes: Player_attributes
  temporary: Player_temporary
}
