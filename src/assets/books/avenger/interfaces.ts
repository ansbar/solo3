import { IPageBase, IChoiceBase, IPageBattleBase, IPageSpecialConditionsBase } from "@/assets/interfaces/pageInterfaces"

export interface ILanguageOpponents {
  [key: string]: string 
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
export const Opponents = ["gorobei", "humanEater", "soldiers", "piratecaptain", "magician", "monk", "firstOfTwoMonks", "secondOfTwoMonks", "monks", "cobraman", "snowGiant", "goblin", "giant", "olvar", "olvarAndRuneWeaver", "guard", "priests", "yaemon", "manse", "runeweaver", "efreti", "torturer", "captain", "olderGod"] as const
export type TOpponents = typeof Opponents[number]

export const Items = ["healingPotion", "flashPowder", "opalring", "shuriken", "gold", "glove", "magicShuriken", "fireLizardEssence", "herbs", "amulet", "poison"] as const
export type TItems = typeof Items[number]

export const Condition = ["hasNotKilledHonoric", "hasKilledHonoric"] as const
export type TCondition = typeof Condition[number]