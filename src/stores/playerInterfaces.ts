import { EAbilities, EAddedAbilities } from "@/assets/enums"

interface Player_items {
  gold: number
  shuriken: number
  opalring: boolean
  healingPotion: boolean  
  glove: boolean
  magicShuriken: boolean
  fireLizardEssence: boolean
  herbs: boolean
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
  abilities: Array<EAbilities | EAddedAbilities>
  items: Player_items
  modifiers: Player_modifiers
  attributes: Player_attributes
  temporary: Player_temporary
}
