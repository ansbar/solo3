import { EnumAbilities } from "../assets/enums"

interface Player_items {
  shuriken: number
  opalring: boolean
  healingPotion: boolean
  gold: number
  glove: boolean
  magicShuriken: boolean
}

interface Player_modifiers {
  punch: number
  kick: number
  throw: number
  fate: number
}

interface Player_attributes {
  hp: number
  hp_max: number
  innerStrength: number
}

interface Player_temporary {
  useInnerStrength: boolean | null
  attackModifier: boolean | null
  damageModifier: boolean | null
}

export interface Player {
  abilities: EnumAbilities[]
  items: Player_items
  modifiers: Player_modifiers
  attributes: Player_attributes
  temporary: Player_temporary
}
