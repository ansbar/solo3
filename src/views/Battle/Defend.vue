<script lang="ts" setup>
  import { ref, onMounted, computed, Ref, watch } from "vue"
  import { useDice } from "../../utils/dice"
  import { usePlayerStore } from "../../stores/playerStore"
  import { useMainStore } from "../../stores/mainStore"
  import { useOpponentStore } from "../../stores/opponentStore"
  import { EBattleStates } from "../../assets/enums"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const dice = useDice()

  const isHit = ref(false)
  const rollText = ref("")
  const damageText =  ref("")
  const useBlock: Ref<null | boolean> = ref(null)

  const opponent = computed(() => {
    // Todo: let user choose which opponent to attack
    return opponentStore.opponents[0]
  })

  onMounted(() => {
    defend()  
  })

  const commitBattleState = (battleState: string) => {
    mainStore.setBattlestate(battleState as EBattleStates)
  }

  watch(useBlock, (value) => {
    damageText.value = ""
            
    // Do damage
    if(value){
      const blockRoll = dice.doRoll("2T6")

      if(blockRoll < opponent.value.playerDefense){
        isHit.value = false
        damageText.value = "Du lyckas blockera!\n"
      }else{
        damageText.value = "Du misslyckas med att blockera.\n"
      }
      // Blocks give a minus 2 to next attack roll
      playerStore.setTemporaryAttackModifier(-2) 
    }

    if(isHit.value)
      takeDamage()
  })

  // Player defend 
  const defend = () => {
    const attackRoll = dice.doRoll("2T6", undefined)
    isHit.value = (attackRoll > opponent.value.playerDefense) ? true : false

    rollText.value = opponent.value.name + " slår 2T6 och resultatet blir: " + attackRoll + ". "
    rollText.value += "Du har " + opponent.value.playerDefense + " i försvar.\n"
    rollText.value += "<b>" + opponent.value.name + (isHit.value ? " träffar " : " missar ") + " dig!</b>"         
            
    // If a hit and opponent attack isnt blockable, do damage directly
    if(!opponentStore.blockable && isHit.value)
      takeDamage()  
  }

  // Damage on player
  const takeDamage = () => {
    const damageRoll = dice.doRoll(opponent.value.damage, undefined)  
    playerStore.setPlayerAttributeHp(-damageRoll)
            
    damageText.value += "Du tar " + damageRoll + " i skada (" + opponent.value.damage + ")"
    if(playerStore.attributes.hp < 1){
      damageText.value += " och besegras!"
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
    }else{
      damageText.value += " och har " + playerStore.attributes.hp + " kroppspoäng kvar."
    }

    isHit.value = false
  }

  const doLoss = () => {
    mainStore.currentPageId = opponentStore.loss
    mainStore.battlestate = EBattleStates.none
  }
</script>

<template>
  <section>
    <div
      class="text"
      v-html="rollText"
    />

    <!-- Question about blocking. Only when opponent attack is punch -->
    <div
      v-if="isHit && opponentStore.blockable && useBlock === null"
      class="text"
    >
      Vill du försöka 
      <a
        href="#"
        title="Chansen att lyckas är ungefär 60% och innebär att du inte tar någon skada. Nästa attack du gör kommer dock få en slagmodifikation på minus 2 vilket gör det något svårare att träffa."
      >blockera</a>?<br>                
      <div class="button-group">                    
        <button
          class="cta"
          @click="useBlock = false"
        >
          Nej
        </button>
        <button @click="useBlock = true">
          Ja
        </button>
      </div>
    </div>

    <!-- Damage texts -->
    <template v-if="useBlock !== null || !isHit || !opponentStore.blockable">
      <div
        class="text"
        v-html="damageText"
      />        

      <button
        v-if="playerStore.attributes.hp > 0"
        @click="commitBattleState('pending')"
      >
        Nästa runda
      </button>
      <button
        v-else
        @click="doLoss"
      >
        Du är besegrad
      </button>     
    </template>
  </section>
</template>