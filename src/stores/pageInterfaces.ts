import { EAbilities, EItems, EOpponents, EAttackType, EAttributes } from "@/assets/enums"

export interface IPages {
  [key: number]: IPage
}
export interface IPage {
  autoEndBattle?: boolean
  battle?: IPageBattle
  sideEffects?: IPageSidesideEffects
  image?: boolean
  choices?: Array<IChoice>
  opponent?: EOpponents
  specialCondition?: {
    type: string
    modifier?: string
    attack?: string
    defense?: number
    opponent?: EOpponents
  }, 
}

export interface IPageSidesideEffects {
  modifiers?: {
    kick?: number
    punch?: number
    fate?: number
    throw?: number
  }  
  items?: {
    opalring?: number,
    healingPotion?: number
    flashPowder?: number,
    glove?: number,
    magicShuriken?: number
    shuriken?: number  
    gold?: number
    fireLizardEssence?: number
    herbs?: number
    amulet?: number
    [key: string]: number | undefined
  },
  attributes?: {
    hp?: number
    innerStrength?: number
  }
  temporary?: {
    attack?: number
    damage?: number
  }
  abilities?: {
    kwonsFlail?: boolean
  }
}

export interface IPageChoiceSpec {
  type: string
  attack: string
  defense: number
  name: string  
}

export interface IPageBattle {
  opponent?: EOpponents
  attackModifier?: number
  win?: number
  loss?: number
  miss?: number
  id: EOpponents
  blockable: boolean
  attackType: EAttackType 
  attacks : IAttacks[]
}

export interface IAttacks {
  opponent_defense?: number
  opponent_damage?: string
  player_damage?: string
  player_defense?: number          
}

export interface IChoice {
  goto: number
  ability?: EAbilities
  item?: EItems
  amount?: number
  attribute?: EAttributes.innerStrength
  abilityNegation?: boolean
  criteria?: boolean
}

