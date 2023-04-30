<script lang="ts" setup>
  import { useBattle } from "./helpers"
  import { useDice } from "@/utils/dice"
  import { useTexts } from "@/utils/texts"
  import { useGeneric } from "@/utils/generic"
  import { ref, onMounted, computed } from "vue"
  import { useOpponents } from "@/utils/opponents"
  import { EAttackType, EBattleStates } from "@/assets/enums"
  import { useMainStore, usePlayerStore, useOpponentStore } from "@/stores"


  const dice = useDice()  
  const battle = useBattle()
  const generic = useGeneric()
  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore() 
  
  const { opponentsAlive } = useOpponents() 
  const { pageTexts } = useTexts()
  
  const isHit = ref(false)
  const rollText = ref("")
  const damageText = ref("")  
  const attackChance = ref("2T6")  
  
  const opponent = computed(() => opponentStore.opponents[mainStore.currentOpponent])


  onMounted(() => {    
    if(opponentStore.playerAttackType === EAttackType.instant)
      // If the attack is instant no roll has to be made and only the damage part is needed
      battle.dealDamage(damageText, opponent)
    else if (opponentStore.playerAttackType === EAttackType.defense)
      // If battle starts with the defense phase, attack phase is skipped of various reasons
      battle.changeState("defend")
    else
      doAttack()        
  })


  // Attack opponent
  const doAttack = () => {      
    const attackModifier = battle.calculateAttackModifier()          
    const attackRoll = dice.doRoll(attackChance.value, attackModifier)      
    isHit.value = (attackRoll > opponent.value.defense) ? true : false    

    const hitText = computed(() => {      
      if (opponentStore.playerAttackType === EAttackType.throw)       
        return isHit.value ? "Du lyckas med att kasta" : "Du misslyckas med att kasta"
      else
        return isHit.value ? "Du träffar" : "Du missar"
    })

    rollText.value = `Du slår ${attackChance.value} och resultatet blir ${attackRoll}.`
    rollText.value += ` ${opponent.value.name} har ${opponent.value.defense} i försvar.\n`
    rollText.value += `<b>${hitText.value} ${opponent.value.name}!</b>`

    // Handle hit or miss
    if(isHit.value){
      // In the case damage is applied when player succeeds with an attack (like page 131)
      if (opponentStore.directDamageOnPlayer?.onlyOnHit) {
        damageText.value += battle.takeDamage(damageText, opponentStore.directDamageOnPlayer.damage)

        // If player should die during direct damage we skip the normal damage phase
        if (playerStore.attributes.hp > 0) {
          damageText.value += "\n\n"
          battle.dealDamage(damageText, opponent)
        }          
      
      // No damage if direct win or throw
      } else if(opponentStore.playerAttackType !== EAttackType.throw && !opponentStore.directWin){
        battle.dealDamage(damageText, opponent)

      } else if (!opponentStore.directWin) {          
        // A successful throw instead adds 2 to damage on next attack
        mainStore.setThrownOpponent(mainStore.currentOpponent)
        playerStore.setTemporaryDamageModifier(2)
      }

    } else if (opponentStore.missDamage) {
      // In the case a static damage is applied when player fails with an attack (like page 267)
      playerStore.setPlayerAttributeHp(opponentStore.missDamage)
    }     
  }

  const doWin = () => {
    mainStore.currentPageId = opponentStore.win
    mainStore.battlestate = EBattleStates.none
  }

  const handleSpecialMiss = () => {
    mainStore.battlestate = EBattleStates.pending
    mainStore.setCurrentPageId(opponentStore.miss as number)
  }
</script>

<template>
  <section>
    <!-- Attack text -->
    <div v-if="rollText" class="text" v-html="rollText" />

    <!-- Damage texts -->
    <div class="text" v-html="damageText" />    

    <!-- Direct win -->
    <template v-if="pageTexts.directWin && isHit">
      <div class="text">
        {{ pageTexts.directWin }}
      </div>
      <a href="#" @click="generic.gotoPage(opponentStore.directWin as number)">
        Gå vidare
      </a>     
    </template>

    <!-- Miss or not Throw -->
    <template v-else-if="!isHit || opponentStore.playerAttackType != 'throw'">
      <!-- If opponent is still alive -->
      <div v-if="opponent.hp > 0 && playerStore.attributes.hp > 0" class="text">
        <!-- Unsuccessful throw text -->
        <template v-if="opponentStore.playerAttackType === 'throw'">
          {{ pageTexts.unsuccessfulThrow }}
        </template>

        <!-- If opponent and player is still alive text -->
        <template v-else>
          {{ pageTexts.stillAlive }}
        </template>       
      </div>

      <!-- If special skip defend phase at miss (go to special page) -->
      <a v-if="!isHit && opponentStore.miss" href="#" @click="handleSpecialMiss()">
        {{ pageTexts.miss }}
      </a>  

      <!-- If special skip defend phase at hit (go to special page) -->
      <template v-else-if="isHit && opponentStore.miss">
        <button v-if="!opponentsAlive" @click="doWin">
          Gå vidare
        </button>
        <button v-else @click="battle.changeState('pending')">
          Gå vidare
        </button>
      </template>    

      <!-- If opponent is alive and attack is not instant -->
      <template v-else-if="opponent.hp > 0 && opponentStore.playerAttackType !== 'instant'">
        <button v-if="playerStore.attributes.hp > 0" @click="battle.changeState('defend')">
          Försvara dig
        </button>

        <a v-else href="#" @click="generic.doStartOver()">
          Du är död. Börja om?
        </a>     
      </template>

      <!-- If instant attack -->
      <button v-else-if="opponentStore.playerAttackType === 'instant'" @click="battle.changeState('pending')">
        Gå vidare
      </button>

      <!-- If opponent is dead -->
      <template v-else-if="opponent.hp === 0">
        <div class="text">
          <b>{{ opponent.name }} är besegrad</b>
        </div>
        
        <button v-if="!opponentsAlive" @click="doWin">
          Gå vidare
        </button>
        <button v-else @click="battle.changeState('defend')">
          Försvara dig
        </button>
      </template>
    </template>


    <!-- Throw -->
    <div v-else>
      <div v-if="pageTexts.successfulThrow" class="text">
        {{ pageTexts.successfulThrow }}
      </div>

      <button @click="battle.changeState('pending')">
        Kastet lyckas, välj attack
      </button>
    </div>
  </section>
</template>