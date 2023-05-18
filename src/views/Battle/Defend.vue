<script lang="ts" setup>
  import { ref, onMounted, computed } from "vue"
  import { useDice } from "@/utils/dice"
  import { useTexts } from "@/utils/texts"
  import { useMainStore, usePlayerStore, useOpponentStore } from "@/stores"
  import { useOpponents } from "@/utils/opponents"
  import { EBattleStates } from "@/assets/enums"
  import { useGeneric } from "@/utils/generic"
  import { useBattle } from "./helpers"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const { playerDefense, playerThrowDefense, firstOpponentAlive } = useOpponents()
  const { pageTexts } = useTexts()  
  const generic = useGeneric()
  const battle = useBattle()
  const dice = useDice()
  

  const isHit = ref(false)
  const rollText = ref("")
  const throwRollText = ref("")
  const directDamageText =  ref("")
  const damageText =  ref("")
  const hasBlocked = ref(false)
  const currentAttackingOpponent = ref(0)


  onMounted(() => {    
    // Get data for first opponent alive
    currentAttackingOpponent.value = firstOpponentAlive(0) as number

    // In the rare case damage is applied when player attacks but attack phase is skipped (like page 109)
    if (opponentStore.directDamageOnPlayer?.state === EBattleStates.defend && !opponentStore.directDamageOnPlayer.onlyOnHit){
      directDamageText.value = battle.takeDamage(directDamageText, opponentStore.directDamageOnPlayer.damage)

      // If player should die during direct damage we skip the normal defence phase 
      if (playerStore.attributes.hp > 0) defend()
    } else {
      defend()    
    }
  })

  // Returns current opponents data
  const opponent = computed(() => opponentStore.opponents[currentAttackingOpponent.value])

  // Watch for block click
  const useBlock = (value: boolean) => {
    damageText.value = ""
            
    // Deal damage
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

  const defendThrow = () => {
    //In the rare case the opponent performs a throw we need to separate the throw from the following attack (if hit). Like in page 244.
    if (!playerThrowDefense.value) return true // If no throw exists for the page (normally)
    
    const throwAttackRoll = dice.doRoll("2T6", undefined)
    isHit.value = (throwAttackRoll > playerThrowDefense.value) ? true : false

    throwRollText.value = opponent.value.name + " slår 2T6 och resultatet blir: " + throwAttackRoll + ". "
    throwRollText.value += "Du har " + playerThrowDefense.value + " i försvar.\n"
    throwRollText.value += "<b>" + opponent.value.name + (isHit.value ? " lyckas " : " misslyckas med att ") + " kasta dig!</b>\n"    
    throwRollText.value += isHit.value ? pageTexts.value.successfulOpponentThrow : ""

    return isHit.value
  }
  
  const defend = () => {
    // Do a player defense roll 
    // Skip the normal defend roll if opponent an throw happend and was unsuccesful
    if (!defendThrow()) return
  
    const attackRoll = dice.doRoll("2T6", undefined)
    isHit.value = (attackRoll > playerDefense.value) ? true : false

    rollText.value = opponent.value.name + " slår 2T6 och resultatet blir: " + attackRoll + ". "
    rollText.value += "Du har " + playerDefense.value + " i försvar.\n"
    rollText.value += "<b>" + opponent.value.name + (isHit.value ? " träffar " : " missar ") + " dig!</b>"         
            
    // If a hit and opponent attack isn't blockable, do damage directly
    if(isHit.value && (hasBlocked.value || !opponentStore.blockable))
      takeDamage()  
  }

  // Do a player damage roll
  const takeDamage = () => {
    damageText.value = battle.takeDamage(damageText, opponent.value.damage)
    isHit.value = false
  }  

  // Determines and sets the next attacker in a multiple opponent attack
  const setNextAttacker = () => {
    currentAttackingOpponent.value = firstOpponentAlive(currentAttackingOpponent.value + 1) as number
    damageText.value += ""
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
      v-if="directDamageText"
      class="text"
      v-html="directDamageText"
    />

    <div
      v-if="throwRollText"
      class="text"
      v-html="throwRollText"
    />
    
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
    <template v-else>
      <div
        class="text"
        v-html="damageText"
      />        

      <button
        v-if="playerStore.attributes.hp > 0 && !firstOpponentAlive(currentAttackingOpponent + 1)"
        @click="battle.changeState('pending')"
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
        class="red"
        href="#"
        @click="generic.doStartOver()"
      >
        Du har misslyckats. Börja om?
      </a>     
    </template>
  </section>
</template>