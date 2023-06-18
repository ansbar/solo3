import { TAbilities, TAddedAbilities, TAttackType, TAttributes } from "@/assets/types"

export interface IPages {
  [key: number]: IPage
}

export interface IPageBase {
  endPage?: boolean // Last page in the book
  autoEndBattle?: boolean
  battle?: IPageBattle
  sideEffects?: IPageSidesideEffects
  image?: boolean
  choices?: Array<IChoice>
  successfulThrowChoices?: Array<IChoice>
  specialCondition?: IPageSpecialConditions
}
export interface IPage extends IPageBase {
  opponent?: string
}

export interface IPageSpecialConditionsBase {
  type: string
  modifier?: string
  attack?: string
  defense?: number
  rolls?: Array<number[]>
}
export interface IPageSpecialConditions extends IPageSpecialConditionsBase {
  opponent?: string
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

export interface IPageBattleBase {
  attackModifier?: number
  win?: number
  loss?: number
  miss?: number
  blockable: boolean
  attackType: TAttackType 
  attacks : IAttacks[]
}
export interface IPageBattle extends IPageBattleBase {
  opponent?: string
}

export interface IAttacks {
  opponent_defense?: number
  opponent_damage?: string
  player_damage?: string
  player_defense?: number          
}

export interface IChoiceBase {
  goto: number
  ability?: TAbilities | TAddedAbilities
  amount?: number
  attribute?: TAttributes
  abilityNegation?: boolean
  roll?: number[]
}
export interface IChoice extends IChoiceBase {
  item?: string
  condition?: string
}

