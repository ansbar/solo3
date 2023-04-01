export interface General {
  playerName: string
  damage: string
  hp: string
  defense: string
  innerForce: string
}

export interface Opponents {
  soldiers: string
}

export interface Help {
  block: string
  innerForce: string
}

export interface Abilities {
  shuriken: string
  deflectArrows: string
  acrobat: string
  immunity: string
  playDead: string
  escapeArtist: string
  poisonArrows: string
  lockPicker: string
  climb: string
}

export interface Items {
  healingPotion: string
  opalring: string
  shuriken: string
  gold: string
  glove: string
  magicShuriken: string
}
export interface Defense {
  punch: string
  kick: string
  throw: string
}
export interface Misc {
  captain: string
}
export interface Modifiers {
  punch: string
  kick: string
  throw: string
  fate: string
}

export interface GeneralTexts {
  general: General
  opponents: Opponents
  help: Help
  abilities: Abilities
  items: Items
  defense: Defense
  misc: Misc
  modifiers: Modifiers
}