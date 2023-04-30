import { EAbilities, EAddedAbilities } from "@/assets/enums"

interface Player_items {
  gold: number
  shuriken: number
  flashPowder: number
  opalring: number
  healingPotion: number  
  glove: number
  magicShuriken: number
  fireLizardEssence: number
  herbs: number
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
  innerStrengthMax: number
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
