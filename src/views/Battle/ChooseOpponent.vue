<script lang="ts" setup>
  import { onMounted } from "vue"
  import { useMainStore, useOpponentStore } from "@/stores"
  import { EBattleStates } from "../../assets/enums"
  import { useOpponents } from "@/utils/opponents"

  const mainStore = useMainStore()
  const opponentStore = useOpponentStore()
  const opponent = useOpponents()

  onMounted(() => {
    /* Show opponent list to choose from if more than one opponent
     * Also skip choice if player did a succesful throw (the next attack should be the same opponent)
     * Otherwise carry on to next phase */
    if (opponentStore.opponents.length === 1) {
      mainStore.battlestate = EBattleStates.innerForce
    } else if (opponent.opponentsAlive.value === 1) {
      mainStore.setCurrentOpponent(opponent.firstOpponentAlive(0) as number)
      mainStore.setBattlestate(EBattleStates.innerForce)
    } else if (mainStore.thrownOpponent !== undefined) {
      mainStore.setCurrentOpponent(mainStore.thrownOpponent)
      mainStore.battlestate = EBattleStates.innerForce      
    }
  })

  const chooseOpponent = (index: number) => {
    mainStore.setCurrentOpponent(index)
    mainStore.setBattlestate(EBattleStates.innerForce)
  }
</script>

<template>
  Välj motståndare att angripa
  <div class="button-group">
    <button
      v-for="(o, index) in opponentStore.opponents"
      :key="index"
      :disabled="o.hp === 0"
      class="cta"
      @click="chooseOpponent(index)"
    >
      {{ o.name }}
    </button>
  </div>
</template>