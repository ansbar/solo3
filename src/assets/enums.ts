export enum EAbilities {
  deflectArrows = "deflectArrows",
  acrobat = "acrobat",
  immunity = "immunity",
  playDead = "playDead",
  escapeArtist = "escapeArtist",
  poisonArrows = "poisonArrows",
  lockPicker = "lockPicker",
  climb = "climb"
}

export enum EAddedAbilities {
  kwonsFlail = "kwonsFlail"
}

export enum EOpponents {
  none = "none",
  gorobei = "gorobei",
  humanEater = "humanEater",
  soldiers = "soldiers",
  piratecaptain = "piratecaptain",
  magician = "magician",
  monk = "monk",
  firstOfTwoMonks = "firstOfTwoMonks",
  secondOfTwoMonks = "secondOfTwoMonks",
  monks = "monks",
  cobraman = "cobraman",
  snowGiant = "snowGiant",
  goblin = "goblin",
  giant = "giant",
  olvar = "olvar",
  olvarAndRuneWeaver = "olvarAndRuneWeaver",
  guard = "guard",
  priests = "priests",
  yaemon = "yaemon",
  manse = "manse",
  runeweaver = "runeweaver",
  efreti = "efreti",
  torturer = "torturer",
  captain = "captain",
  olderGod = "olderGod"
}

export enum EItems {
  healingPotion = "healingPotion",
  flashPowder = "flashPowder",
  opalring = "opalring",
  shuriken = "shuriken",
  gold = "gold",
  glove = "glove",
  magicShuriken = "magicShuriken",
  fireLizardEssence = "fireLizardEssence",
  herbs = "herbs",
  amulet = "amulet",
  poison = "poison"
}

export enum EBattleStates {
  intro = "intro",
  none = "none",
  pending = "pending",
  chooseOpponent = "chooseOpponent",
  innerForce = "innerForce",
  attack = "attack",
  defend = "defend",
}

export enum EPlayerModifiers {
  punch = "punch",
  kick = "kick",
  throw = "throw",
  fate = "fate"
}

export enum EDefenseType {
  punch = "punch",
  kick = "kick",
  throw = "throw",
}

export enum EAttackType {
  none = "none", // Primarily used as a initializer
  punch = "punch",
  kick = "kick",
  throw = "throw", // No damage is being dealt here, instead next attack has a higher damage
  instant = "instant", // No attack roll is needed, the player attack is a hit. Skip to damage dealing
  defense = "defense" // Go directly to defense phase, attack phase is skipped of various reasons
}

export enum EBattleModifiers { 
  innerForce = "innerForce",
  block = "block",
  throw = "throw"
}

export enum EAttributes {
  hp = "hp",
  innerForce = "innerForce"
}

export enum EDifficulty {  
  veryHard = "veryHard",
  hard = "hard",
  medium = "medium",
}

export enum ECondition {
  hasNotVisitedSwordOfDoomTower = "hasNotVisitedSwordOfDoomTower"
}