<script lang="ts" setup>
  import { useMainStore, usePlayerStore, useOpponentStore } from "@/stores"
  import { EBattleStates } from "@/assets/enums"
  import { computed, onMounted } from "vue"
  import { useTexts } from "@/utils/texts"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const { gameHelpTexts } = useTexts()

  const showInnerForce = computed(() => {
    /* Cant use inner strength if:
      * - out of inner strength (<1)
      * - if attack type is a throw (can use inner force in the following attack instead)
      * - if attack type is instant and enableInnerForce is false */
    return playerStore.attributes.innerForce > 0 
      && opponentStore.playerAttackType !== "throw"
      && (opponentStore.playerAttackType !== "instant" || opponentStore.enableInnerForce)
  })

  onMounted(() => {
    // Clear any thrown opponent
    mainStore.clearThrownOpponent()
    if (!showInnerForce.value) startBattle(false)
  })

  const startBattle = (useInnerForce: boolean) => { 
    // Battle start always returns a bool depending on the players choice to use inner strength. 
    // After that the battle attack phase begins
    if(useInnerForce) {
      playerStore.setAttributeInnerForce(-1)
      mainStore.addToHistory(`- Använde inre kraft (${playerStore.attributes.innerForce} kvar)`)
    }
    playerStore.setTemporaryInnerForce(useInnerForce)
    mainStore.setBattlestate(EBattleStates.attack)
  }
</script>

<template>
  <section>
    <div class="text">
      <div v-if="showInnerForce">
        Vill du använda din <a :title="gameHelpTexts.innerForce">inre kraft</a>   
        i attacken ({{ playerStore.attributes.innerForce }} kvar)?
        <div class="button-group">                    
          <button
            class="cta"
            @click="startBattle(false)"
          >
            Nej
          </button>
          <button @click="startBattle(true)">
            Ja
          </button>
        </div>
      </div>      
    </div>
  </section>
</template>