import { TAbilities, TAddedAbilities, TPlayerModifiers } from "@/assets/types"

export interface Player {
  abilities: Array<TAbilities | TAddedAbilities>
  items: Record<string, number>
  modifiers: Record<TPlayerModifiers, number>
  attributes: Player_attributes
  conditions: Record<string, boolean>
  temporary: Player_temporary
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