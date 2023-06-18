import { useMainStore, usePersistantStore } from "@/stores"
import { storeToRefs } from "pinia"
import { computed } from "vue"
import { ILanguagePages, ILanguagePreGame } from "@/assets/interfaces/languageInterfaces"


interface Texts { languagePages: ILanguagePages, languageOpponents: {[key: string]: any}, languagePreGame: ILanguagePreGame }
// Fix me, should be string but gives Element implicitly has an 'any' type because index expression is not of type 'number'.ts(7015) error in other pages

export async function useTexts() {
  const { currentPageId } = storeToRefs(useMainStore())
  // Async import specific texts with correct language and book 
  const { language, book } = storeToRefs(usePersistantStore())
  const { languageGeneral, languagePreGameGeneric } = await import(`../assets/texts/${language?.value}.ts`)
  const { languagePages, languagePreGame, languageOpponents } = await import(`../assets/books/${book?.value}/${language?.value}.ts`) as Texts
  
  // Temporary page texts
  const pageTexts = computed(() => {
    return languagePages[currentPageId.value]
  })
  const mainText = computed(() => {
    return languagePages[currentPageId.value].mainText
  })
  const choicesTexts = computed(() => {
    return languagePages[currentPageId.value].choices
  })

  // Intro texts
  const backgroundTexts = computed(() => {
    return languagePreGameGeneric.background
  })
  const introTexts = computed(() => {
    return { ...languagePreGameGeneric.intro, ...languagePreGame.intro }
  })
  const setupTexts = computed(() => {
    return { ...languagePreGameGeneric.setup, ...languagePreGame.setup }
  })

  // General texts
  const abilityTexts = computed(() => {
    return languageGeneral.abilities
  })
  const attributeTexts = computed(() => {
    return languageGeneral.attributes
  })
  const modifierTexts = computed(() => {
    return languageGeneral.modifiers
  })
  const itemTexts = computed(() => {
    return languageGeneral.items
  })
  const temporaryTexts = computed(() => {
    return languageGeneral.temporary
  })
  const defenseTexts = computed(() => {
    return languageGeneral.defense
  })
  const opponentTexts = computed(() => {
    return languageOpponents.opponents
  })
  const miscTexts = computed(() => {
    return languageGeneral.misc
  })
  const headingTexts = computed(() => {
    return languageGeneral.headings
  })
  const gameHelpTexts = computed(() => {
    return languageGeneral.gameHelp
  })
  const difficultyHelpTexts = computed(() => {
    return languageGeneral.difficultyHelp
  })
  const difficultyTexts = computed(() => {
    return languageGeneral.difficulty
  })


  return { setupTexts, difficultyTexts,pageTexts,mainText,choicesTexts,abilityTexts,headingTexts,attributeTexts,modifierTexts,itemTexts,temporaryTexts,defenseTexts,opponentTexts,miscTexts,gameHelpTexts,difficultyHelpTexts,backgroundTexts,introTexts }
}