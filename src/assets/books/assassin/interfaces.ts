import { IPageBase, IChoiceBase, IPageBattleBase, IPageSpecialConditionsBase } from "@/assets/interfaces/pageInterfaces"

export interface ILanguageOpponents {
  [key: string]: any // Fix me, should be string but gives Element implicitly has an 'any' type because index expression is not of type 'number'.ts(7015) error in other pages
}

// Extending generic interfaces with book specific ones
interface _IChoice extends IChoiceBase {
  item?: TItems
  condition?: TCondition
}

interface _IPageSpecialConditions extends IPageSpecialConditionsBase {
  opponent?: TOpponents
}

interface _IPageBattle extends IPageBattleBase {
  opponent?: TOpponents
}

interface _IPage extends IPageBase {
  opponent?: TOpponents
  specialCondition?: _IPageSpecialConditions
  choices?: Array<_IChoice>
  successfulThrowChoices?: Array<_IChoice>
  battle?: _IPageBattle
}

export interface _IPages {
  [key: number]: _IPage
}


// Book specific interfaces
export const Opponents = ["gorobei"] as const
export type TOpponents = typeof Opponents[number]

export const Items = ["healingPotion", "flashPowder", "opalring", "shuriken", "gold", "glove", "magicShuriken", "fireLizardEssence", "herbs", "amulet", "poison"] as const
export type TItems = typeof Items[number]

export const Condition = ["hasNotKilledHonoric", "hasKilledHonoric"] as const
export type TCondition = typeof Condition[number]