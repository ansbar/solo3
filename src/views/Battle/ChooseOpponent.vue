<script lang="ts" setup>
  import { onMounted } from "vue"
  import { useMainStore, useOpponentStore } from "@/stores"
  import { EBattleStates } from "../../assets/enums"

  const mainStore = useMainStore()
  const opponentStore = useOpponentStore()

  onMounted(() => {
    /* Show opponent list to choose from if more than one opponent
     * Also skip choice if player did a succesful throw (the next attack should be the same opponent)
     * Otherwise carry on to next phase */
    if (opponentStore.opponents.length === 1) {
      mainStore.battlestate = EBattleStates.innerStrength
    } else if (mainStore.thrownOpponent) {
      mainStore.setCurrentOpponent(mainStore.thrownOpponent)
      mainStore.battlestate = EBattleStates.innerStrength      
    }
  })

  const chooseOpponent = (index: number) => {
    mainStore.setCurrentOpponent(index)
    mainStore.setBattlestate(EBattleStates.innerStrength)
  }
</script>

<template>
  Välj motståndare att angripa
  <div class="button-group">
    <button
      v-for="(opponent, index) in opponentStore.opponents"
      :key="index"
      :disabled="opponent.hp === 0"
      class="cta"
      @click="chooseOpponent(index)"
    >
      {{ opponent.name }}
    </button>
  </div>
</template>