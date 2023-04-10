<script lang="ts" setup>
  import { ref, onMounted, computed, Ref, watch } from "vue"
  import { useDice } from "../../utils/dice"
  import { usePlayerStore } from "../../stores/playerStore"
  import { useMainStore } from "../../stores/mainStore"
  import { useOpponentStore } from "../../stores/opponentStore"
  import { useOpponents } from "../../utils/opponents"
  import { EBattleStates } from "../../assets/enums"
  import { useGeneric } from "../../utils/generic"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const { playerDefense } = useOpponents()
  const dice = useDice()
  const generic = useGeneric()

  const isHit = ref(false)
  const rollText = ref("")
  const damageText =  ref("")
  const hasBlocked = ref(false)
  const currentAttackingOpponent = ref(0)

  onMounted(() => {    
    currentAttackingOpponent.value = firstOpponentAlive(0) as number
    defend()    
  })

  // Returns current opponents data
  const opponent = computed(() => {
    return opponentStore.opponents[currentAttackingOpponent.value]
  })

  /* Returns the index of the first opponent alive
   * It is used for:
   * - check the first opponent alive at mounted (start of defense phase)
   * - check if there are any opponents alive to attack (when deciding which button to show; next opponent or next round)
   * - check which opponent is the next current attacker (needed when an opponent in the middle is dead) */
  const firstOpponentAlive = (opponentIndex: number) => {
    for (let i = opponentIndex; i < opponentStore.opponents.length; i++) {      
      if (opponentStore.opponents[i].hp > 0) {
        return i
      }   
    }
    return false
  }

  const commitBattleState = (battleState: string) => {
    mainStore.setBattlestate(battleState as EBattleStates)
  }

  // Watch for block click
  const useBlock = (value: boolean) => {
    damageText.value = ""
            
    // Do damage
    if(value){
      hasBlocked.value = true
      const blockRoll = dice.doRoll("2T6")

      if(blockRoll < playerDefense.value){
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
  }

  // Do a player defense roll 
  const defend = () => {
    const attackRoll = dice.doRoll("2T6", undefined)
    isHit.value = (attackRoll > playerDefense.value) ? true : false

    rollText.value = opponent.value.name + " slår 2T6 och resultatet blir: " + attackRoll + ". "
    rollText.value += "Du har " + playerDefense.value + " i försvar.\n"
    rollText.value += "<b>" + opponent.value.name + (isHit.value ? " träffar " : " missar ") + " dig!</b>"         
            
    // If a hit and opponent attack isnt blockable, do damage directly
    if(isHit.value && (hasBlocked.value || !opponentStore.blockable))
      takeDamage()  
  }

  // Do a player damage roll
  const takeDamage = () => {
    const damageRoll = dice.doRoll(opponent.value.damage, undefined)  
    playerStore.setPlayerAttributeHp(-damageRoll)
            
    damageText.value += "Du tar " + damageRoll + " i skada (" + opponent.value.damage + ")"
    if(playerStore.attributes.hp < 1){
      damageText.value += " <b>och besegras!</b>"
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
    }else{
      damageText.value += " och har " + playerStore.attributes.hp + " kroppspoäng kvar."
    }

    isHit.value = false
  }

  // Determines and sets the next attacker in a multiple opponent attack
  const setNextAttacker = () => {
    currentAttackingOpponent.value = firstOpponentAlive(currentAttackingOpponent.value + 1) as number
    damageText.value = ""
    defend()
  }
  // If player loses a battle but is still alive
  const doLoss = () => {
    mainStore.currentPageId = opponentStore.loss as number
    mainStore.battlestate = EBattleStates.none
  }
</script>


<template>
  <section>
    <div
      class="text"
      v-html="rollText"
    />

    <!-- Question about blocking. Only when opponent attack is punch. Only one block per round (if many opponents) -->
    <div
      v-if="isHit && opponentStore.blockable && !hasBlocked"
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
          @click="useBlock(false)"
        >
          Nej
        </button>
        <button @click="useBlock(true)">
          Ja
        </button>
      </div>
    </div>


    <!-- Damage texts and buttons -->
    <template v-else-if="rollText">
      <div
        class="text"
        v-html="damageText"
      />        

      <button
        v-if="playerStore.attributes.hp > 0 && !firstOpponentAlive(currentAttackingOpponent + 1)"
        @click="commitBattleState('pending')"
      >
        Nästa runda
      </button>
      <button
        v-else-if="playerStore.attributes.hp > 0"
        @click="setNextAttacker()"
      >
        Nästa attackerare
      </button>

      <button
        v-else-if="playerStore.attributes.hp === 0 && opponentStore.loss"
        @click="doLoss"
      >
        Du är besegrad
      </button>     
      <a 
        v-else
        href="#"
        @click="generic.doStartOver()"
      >
        Du är död. Börja om?
      </a>     
    </template>
  </section>
</template>