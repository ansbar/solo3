<script lang="ts" setup>
  import { computed } from "vue"
  import { useOpponentStore, useMainStore } from "@/stores"
  import { useTexts } from "@/utils/texts"
  import { EBattleStates } from "@/assets/enums"

  const { mainText, miscTexts } = useTexts()
  const mainStore = useMainStore()
  const opponentStore = useOpponentStore()

  const text = computed(() => {
    // In some scenarios we need to hide the mainText until a choce has been made.
    // For example in page 340 the player hase to choose to use InnerForce before reading text.
    // This only affets the innerForce phase
    if (mainStore.battlestate !== EBattleStates.innerForce) return mainText.value

    return opponentStore.enableInnerForce ? miscTexts.value.hiddenMainText : mainText.value 
  })
 </script>

<template>
  <div class="main-text">
    {{ text }}
  </div>
</template>

<style lang="scss">
  .main-text {
    line-height: 1.4;
    white-space: pre-line;
    margin-bottom: 1em;
  }
</style>