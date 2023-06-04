<script lang="ts" setup>
  import { computed } from "vue"
  import { useOpponentStore, useMainStore, usePageStore } from "@/stores"
  import { useTexts } from "@/utils/texts"
  import { EBattleStates, EDifficulty } from "@/assets/enums"

  const { mainText, miscTexts, difficultyTexts } = useTexts()
  const pageStore = usePageStore()
  const mainStore = useMainStore()
  const opponentStore = useOpponentStore()

  const text = computed(() => {
    // In some scenarios we need to hide the mainText until a choce has been made.
    // For example in page 340 the player hase to choose to use InnerForce before reading text.
    // This only affets the innerForce phase
    if (mainStore.battlestate !== EBattleStates.innerForce) return mainText.value

    return opponentStore.enableInnerForce ? miscTexts.value.hiddenMainText : mainText.value 
  })

  const endText = computed(() => {
    let text = "Du har klarat av äventyret HÄMNAREN på svårighetsgrad <b>"
    text += difficultyTexts.value[mainStore.difficulty] + "</b>.<br/><br/>"

    switch (mainStore.difficulty) {
    case EDifficulty.medium:
      text += "Bra gjort, försök igen på en högre svårighetsgrad för ett mer utmanade äventyr!"
      break
    case EDifficulty.hard:
      text += "Bra gjort! Försök igen på den högsta svårighetsgraden för ett mer utmanade äventyr!"
      break    
    case EDifficulty.veryHard:
      text += "Djupt imponerande! Hur många försök krävdes det för att klara äventyret? Bara att invänta nästa bok, FÖRGÖRAREN!"
      break
    }
    return text
  })
 </script>

<template>
  <div class="main-text">
    {{ text }}
  </div>
  <div v-if="pageStore.endPage" class="card">
    <span v-html="endText" />
  </div>
</template>

<style lang="scss">
  .main-text {
    line-height: 1.4;
    white-space: pre-line;
    margin-bottom: 1em;
  }
</style>