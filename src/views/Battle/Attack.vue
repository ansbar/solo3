<script lang="ts" setup>
  import { useBattle } from "./helpers"
  import { useDice } from "@/utils/dice"
  import { useTexts } from "@/utils/texts"
  import { useGeneric } from "@/utils/generic"
  import { ref, onMounted, computed } from "vue"
  import { useOpponents } from "@/utils/opponents"
  import { languageGeneral } from "@/assets/languages/swedish"
  import { useMainStore, usePlayerStore, useOpponentStore, usePageStore } from "@/stores"

  // Composables
  const dice = useDice()  
  const battle = useBattle()
  const generic = useGeneric()
  const pageStore = usePageStore()
  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore() 
  const { pageTexts } = useTexts()
  const { opponentsAlive, opponentDefense, currentOpponent } = useOpponents() 
  
  // Local vars
  const isHit = ref(false)
  const rollText = ref("")
  const damageText = ref("")  
  const rollTextAlly = ref("")
  const damageTextAlly = ref("")  
  const attackChance = ref("2T6")  
  const stillAliveDamage = ref("")
  

  onMounted(() => {    
    if(opponentStore.playerAttackType === "instant") {
      // If the attack is instant no roll has to be made and only the damage part is needed
      battle.dealDamage(damageText, currentOpponent)

      // If opponent causes damage on player when "still alive", after player attack. Like page 278
      if (currentOpponent.value.hp > 0 && opponentStore.stillAliveDamage) {
        stillAliveDamage.value = battle.takeDamage(stillAliveDamage, opponentStore.stillAliveDamage)
      }
    } else if (opponentStore.playerAttackType === "defense")
      // If battle starts with the defense phase, attack phase is skipped of various reasons
      battle.changeState("defend")
    else {
      doAttack()     
      // In the rare case you have an ally (like page 165)
      if (opponentStore.enableAlly && currentOpponent.value.hp > 0) doAllyAttack()   
    }
  })


  const doAllyAttack = () => {
    // When you have an ally fighting side by side with you
    const _attackRoll = dice.doRoll("Attackslag allierad", attackChance.value) 
    const _isHit = (_attackRoll > opponentStore.allyAttack!.defense)
    const _hitText = _isHit ? "träffar!" : "missar."

    rollTextAlly.value = `${languageGeneral.opponents[opponentStore.allyAttack!.ally]} slår ${attackChance.value} och resultatet blir ${_attackRoll}.`
    rollTextAlly.value += ` ${currentOpponent.value.name} har ${currentOpponent.value.defense} i försvar.\n`
    rollTextAlly.value += `<b>Attacken ${_hitText}</b>`

    if (_isHit)
      damageTextAlly.value += battle.dealDamage(damageTextAlly, currentOpponent, true)     
  }

  // Attack opponent
  const doAttack = () => {      
    const attackModifier = battle.calculateAttackModifier()          
    const attackRoll = dice.doRoll("Attackslag", attackChance.value, attackModifier) 
    isHit.value = (attackRoll > opponentDefense())  

    const hitText = computed(() => {      
      if (opponentStore.playerAttackType === "throw")       
        return isHit.value ? "Du lyckas med att kasta" : "Du misslyckas med att kasta"
      else
        return isHit.value ? "Du träffar" : "Du missar"
    })

    rollText.value = `Du slår ${attackChance.value} och resultatet blir ${attackRoll}.`
    rollText.value += ` ${currentOpponent.value.name} har ${opponentDefense()} i försvar.\n`
    rollText.value += `<b>${hitText.value} ${currentOpponent.value.name}!</b>`

    // Handle hit or miss
    if(isHit.value){
      // In the case damage is applied when player succeeds with an attack (like page 131)
      if (opponentStore.directDamageOnPlayer?.onlyOnHit) {
        damageText.value += battle.takeDamage(damageText, opponentStore.directDamageOnPlayer.damage)

        // If player should die during direct damage we skip the normal damage phase
        if (playerStore.attributes.hp > 0) {
          damageText.value += "\n\n"
          battle.dealDamage(damageText, currentOpponent)
        }          
      
      // No damage if direct win or throw
      } else if(opponentStore.playerAttackType !== "throw" && !opponentStore.directWin){
        battle.dealDamage(damageText, currentOpponent)

      } else if (!opponentStore.directWin) {        
        // A successful throw
        mainStore.setThrownOpponent(mainStore.currentOpponent)
        // A successful throw adds 2 to damage on next attack
        playerStore.setTemporaryDamageModifier(2)
        // and most often a better chance to hit the opponent on next attack. 
        if (currentOpponent.value.attackModification) playerStore.setTemporaryAttackModifier(currentOpponent.value.attackModification)
      }

    } else if (opponentStore.missDamage) {
      // In the case a static damage is applied when player fails with an attack (like page 267 and 259)
      playerStore.setPlayerAttributeHp(opponentStore.missDamage)
    }     
  }

  const handleWin = (pageId: number) => {
    mainStore.currentPageId = pageId
    mainStore.battlestate = "none"
  }

  const handleSpecialMiss = () => {
    mainStore.battlestate = "pending"
    mainStore.setCurrentPageId(opponentStore.miss as number)
  }

  const handleSuccessfulThrow = () => {
    battle.changeState("pending")
  }
</script>


<template>
  <section>
    <!-- Attack text -->
    <div v-if="rollText" class="text" v-html="rollText" />


    <!-- Damage texts -->
    <div class="text" v-html="damageText" />    


    <!-- Ally texts -->
    <div v-if="rollTextAlly" class="text" v-html="rollTextAlly" />
    <div v-if="damageTextAlly" class="text" v-html="damageTextAlly" />    


    <!-- Direct win -->
    <template v-if="opponentStore.directWin && isHit">
      <div v-if="pageTexts.directWin" class="text">
        {{ pageTexts.directWin }}
      </div>
      <a href="#" @click="handleWin(opponentStore.directWin as number)">
        Gå vidare
      </a>     
    </template>


    <!-- Miss or not Throw -->
    <template v-else-if="!isHit || opponentStore.playerAttackType != 'throw'">
      <!-- If opponent is still alive -->
      <div v-if="currentOpponent.hp > 0 && playerStore.attributes.hp > 0" class="text">        
        <template v-if="opponentStore.playerAttackType === 'throw'">
          <!-- Unsuccessful throw text -->
          {{ pageTexts.unsuccessfulThrow }}
        </template>        
        <template v-else-if="pageTexts.stillAlive">
          <!-- If opponent and player is still alive text -->
          {{ pageTexts.stillAlive }}
        </template>       
      </div>


      <!-- If special skip defend phase at miss (go to special page) -->
      <a v-if="!isHit && opponentStore.miss" href="#" @click="handleSpecialMiss()">
        {{ pageTexts.miss }}
      </a>  


      <!-- If special skip defend phase at hit (go to special page) -->
      <template v-else-if="isHit && opponentStore.miss">
        <button v-if="!opponentsAlive" @click="handleWin(opponentStore.win)">
          Gå vidare
        </button>
        <button v-else @click="battle.changeState('pending')">
          Gå vidare
        </button>
      </template>    


      <!-- If opponent is alive and attack is not instant -->
      <template v-else-if="currentOpponent.hp > 0 && opponentStore.playerAttackType !== 'instant'">
        <button v-if="playerStore.attributes.hp > 0" @click="battle.changeState('defend')">
          Försvara dig
        </button>
        <a 
          v-else href="#" 
          class="red"
          @click="generic.doStartOver()"
        >
          Du har misslyckats. Börja om?
        </a>     
      </template>
      

      <!-- If opponent is dead -->
      <template v-else-if="currentOpponent.hp === 0">
        <div class="text">
          <b>{{ currentOpponent.name }} är besegrad</b>
        </div>
        
        <button v-if="!opponentsAlive" @click="handleWin(opponentStore.win)">
          Gå vidare
        </button>
        <button v-else @click="battle.changeState('defend')">
          Försvara dig
        </button>
      </template>

      
      <!-- If instant attack and not a combined special condition (these buttons will override) -->
      <template v-else-if="opponentStore.playerAttackType === 'instant' && !pageStore.specialCondition">
        <p v-html="stillAliveDamage" />
        <a 
          v-if="playerStore.attributes.hp === 0"
          class="red"
          @click="generic.doStartOver()"
        >
          Du har misslyckats. Börja om?
        </a>     
        <button v-else @click="battle.changeState('pending')">
          Gå vidare
        </button>
      </template>
    </template>


    <!-- Throw -->
    <div v-else>
      <div v-if="pageTexts.successfulThrow" class="text">
        {{ pageTexts.successfulThrow }}
      </div>

      <button @click="handleSuccessfulThrow()">
        Kastet lyckas, välj attack
      </button>
    </div>
  </section>
</template>