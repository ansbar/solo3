import { languagePages, languageGeneral } from "@/assets/languages/swedish"
import { useMainStore } from "@/stores"
import { storeToRefs } from "pinia"
import { computed } from "vue"

export function useTexts() {
  const { currentPageId } = storeToRefs(useMainStore())

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
    return languageGeneral.opponents
  })
  const miscTexts = computed(() => {
    return languageGeneral.misc
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


  return { 
    difficultyTexts,
    pageTexts, 
    mainText, 
    choicesTexts, 
    abilityTexts, 
    attributeTexts, 
    modifierTexts, 
    itemTexts, 
    temporaryTexts, 
    defenseTexts, 
    opponentTexts, 
    miscTexts, 
    gameHelpTexts,
    difficultyHelpTexts
  }
}