import { TAbilities, TAddedAbilities, TAttackType, TAttributes, TCondition, TItems, TOpponents } from "@/assets/types"

export interface IPages {
  [key: number]: IPage
}
export interface IPage {
  endPage?: boolean // Last page in the book
  autoEndBattle?: boolean
  battle?: IPageBattle
  sideEffects?: IPageSidesideEffects
  image?: boolean
  choices?: Array<IChoice>
  successfulThrowChoices?: Array<IChoice>
  opponent?: TOpponents
  specialCondition?: {
    type: string
    modifier?: string
    attack?: string
    defense?: number
    opponent?: TOpponents
    rolls?: Array<number[]>
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
    innerForce?: number
  }
  temporary?: {
    attack?: number
    damage?: number
  }
  abilities?: {
    kwonsFlail?: boolean
  }
  conditions?: {
    hasNotKilledHonoric?: boolean
    hasKilledHonoric?: boolean
  }
}

export interface IPageChoiceSpec {
  type: string
  attack: string
  defense: number
  name: string  
}

export interface IPageBattle {
  opponent?: TOpponents
  attackModifier?: number
  win?: number
  loss?: number
  miss?: number
  blockable: boolean
  attackType: TAttackType 
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
  ability?: TAbilities | TAddedAbilities
  item?: TItems
  amount?: number
  attribute?: TAttributes
  abilityNegation?: boolean
  condition?: TCondition
  roll?: number[]
}

