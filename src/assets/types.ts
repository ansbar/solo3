/* TYPES 
 * Since types can't be iterated we create the types from an array
 * The array, i.e. Abilities can be iterated and the type TAbilities is used for typing
 * https://jaketrent.com/post/loop-typescript-union-type/ */

// GENERIC TYPES
// Languages 
export const Languages = ["swedish", "none"] as const
export type TLanguages = typeof Languages[number]

// Books
export const Books = ["avenger", "assassin"] as const
export type TBooks = typeof Books[number]

// Player abilities available from start
export const Abilities = ["deflectArrows", "acrobat", "immunity", "playDead", "escapeArtist", "poisonArrows", "lockPicker", "climb"] as const // Used to iterate Abilities
export type TAbilities = typeof Abilities[number]

// Player abilities available during the game
export type TAddedAbilities = "kwonsFlail"

// Different 
export const Pages = ["start", "intro", "background", "setup", "started"] as const
export type TPages = typeof Pages[number]

// Different modal pages
export const Modals = ["none", "rules", "map"] as const
export type TModals = typeof Modals[number]

export const BattlePhases = ["none", "pending", "chooseOpponent", "innerForce", "attack", "defend"] as const
export type TBattlePhases = typeof BattlePhases[number]

export const PlayerModifiers = ["punch", "kick", "throw", "fate"] as const
export type TPlayerModifiers = typeof PlayerModifiers[number]

export const DefenseTypes = ["punch", "kick", "throw"] as const
export type TDefenseTypes = typeof DefenseTypes[number]

export const AttackType = [
  "none", // Primarily used as a initializer.
  "punch",
  "kick",
  "throw", // No damage is being dealt here, instead next attack has a higher damage.
  "instant", // No attack roll is needed, the player attack is a hit. Skip to damage dealing.
  "defense" // Go directly to defense phase, attack phase is skipped of various reasons.
] as const
export type TAttackType = typeof AttackType[number]

export const BattleModifiers = ["innerForce", "block", "throw"] as const
export type TBattleModifiers = typeof BattleModifiers[number]

export const Attributes = ["hp", "innerForce"] as const
export type TAttributes = typeof Attributes[number]

export const Difficulty = ["veryHard", "hard", "medium"] as const
export type TDifficulty = typeof Difficulty[number]
