import { EAbilities, EAddedAbilities } from "@/assets/enums"

export interface Player {
  abilities: Array<EAbilities | EAddedAbilities>
  items: Player_items
  modifiers: Player_modifiers
  attributes: Player_attributes
  conditions: Player_conditions
  temporary: Player_temporary
}

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
  amulet: number
  poison: number
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
  innerForce: number
  innerForceMax: number
}

interface Player_temporary {
  useInnerForce: boolean | null
  attackModifier: number 
  damageModifier: number
}

interface Player_conditions {
  hasNotVisitedSwordOfDoomTower: boolean
}
