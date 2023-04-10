<script lang="ts" setup>
  import { ref, onMounted, computed } from "vue"
  import { useDice } from "../../utils/dice"
  import { usePlayerStore } from "../../stores/playerStore"
  import { useTextStore } from "../../stores/textStore"
  import { useMainStore } from "../../stores/mainStore"
  import { useOpponentStore } from "../../stores/opponentStore"
  import { useOpponents } from "../../utils/opponents"
  import { EAttackType, EBattleStates } from "../../assets/enums"

  const textStore = useTextStore()
  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const { opponentsAlive } = useOpponents()
  const dice = useDice()

  const isHit = ref(false)
  const attackChance = ref("2T6")
  const rollText = ref("")
  const damageText =  ref("")

  const opponent = computed(() => {
    return opponentStore.opponents[mainStore.currentOpponent]
  })

  onMounted(() => {
    // If attack is instant only damage part is needed
    if(opponentStore.playerAttackType !== EAttackType.instant){
      attack()
    }else{
      doDamage()
    }            
  })

  const commitBattleState = (battleState: string) => {
    mainStore.setBattlestate(battleState as EBattleStates)
  }

  const calculateAttackModifier = () => {
    // Calculate attack modifiers. 
    // First modifier for the type, like punch. 
    // And then the temporary modifier, like block.
    let totalModifier = 0
    let permanentModifier = 0
    if (opponentStore.playerAttackType === EAttackType.kick 
      || opponentStore.playerAttackType === EAttackType.punch 
      || opponentStore.playerAttackType === EAttackType.throw) {
      permanentModifier = playerStore.modifiers[opponentStore.playerAttackType]
    }     
    totalModifier = permanentModifier + playerStore.temporary.attackModifier
    
    if (permanentModifier || playerStore.temporary.attackModifier)
      mainStore.addToHistory(`- Använde attackmodifierare: p${permanentModifier}, t${playerStore.temporary.attackModifier}`)
    
    playerStore.setTemporaryAttackModifier(0) // Reset after use

    return totalModifier
  }

  // Attack opponent
  const attack = () => {      
    const attackModifier = calculateAttackModifier()          
    const attackRoll = dice.doRoll(attackChance.value, attackModifier)
    const hitText = computed(() => {
      if (opponentStore.playerAttackType === EAttackType.throw)       
        return isHit.value ? "Du lyckas med att kasta" : "Du misslyckas med att kasta"
      else
        return isHit.value ? "Du träffar" : "Du missar"
    })
         
    isHit.value = (attackRoll > opponent.value.defense) ? true : false    
            
    rollText.value = `Du slår ${attackChance.value} och resultatet blir ${attackRoll}.`
    rollText.value += ` ${opponent.value.name} har ${opponent.value.defense} i försvar.\n`
    rollText.value += `<b>${hitText.value} ${opponent.value.name}!</b>`

    if(isHit.value){
      // A successful throw adds 2 to damage on next attack
      if(opponentStore.playerAttackType === EAttackType.throw){
        mainStore.setThrownOpponent(mainStore.currentOpponent)
        playerStore.setTemporaryDamageModifier(2)
      }else{
        doDamage()
      }
    }                
  }

  // Damage on opponent
  const doDamage = () => {
    let damageRoll = dice.doRoll(opponentStore.playerDamage || "", playerStore.temporary.damageModifier)  
    let innerStrengthText = ""
    let damageModifierText = ""
              
    if(playerStore.temporary.damageModifier)
      damageModifierText = "+" + playerStore.temporary.damageModifier    

    if(playerStore.temporary.useInnerStrength){                
      damageRoll = damageRoll * 2
      innerStrengthText = " gånger 2"  
      playerStore.setTemporaryInnerStrength(null)              
    }                

    opponentStore.setOpponentHp(mainStore.currentOpponent, damageRoll)

    damageText.value = `${opponent.value.name} tar ${damageRoll} i skada (${opponentStore.playerDamage}${damageModifierText}${innerStrengthText})`

    if(opponent.value.hp < 1){
      damageText.value += " och besegras!"
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
    }else{
      damageText.value += ` och har ${opponent.value.hp} kroppspoäng kvar.`
    }       
              
    playerStore.setTemporaryDamageModifier(0)
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
    <div
      v-if="rollText"
      class="text"
      v-html="rollText"
    />

    <!-- Damage texts -->
    <div
      class="text"
      v-html="damageText"
    />            
      
    <!-- Miss or not Throw -->
    <template v-if="!isHit || opponentStore.playerAttackType != 'throw'">
      <div
        v-if="opponent.hp > 0"
        class="text"
      >
        {{ textStore.page.stillAlive }}
      </div>
      <!-- If special case when player misses (skip defend phase and go to special page) -->
      <a
        v-if="!isHit && opponentStore.miss"
        href="#"
        @click="handleSpecialMiss()"
      >
        {{ textStore.page.miss }}
      </a>    
      <!-- If special case when player hits (skip defend phase and go to special page) -->
      <template v-else-if="isHit && opponentStore.miss">
        <button    
          v-if="!opponentsAlive"   
          class="cta"
          @click="doWin"
        >
          Gå vidare
        </button>
        <button      
          v-else  
          class="cta"
          @click="commitBattleState('pending')"
        >
          Gå vidare
        </button>
      </template>      
      <!-- If playes is alive and attack is not instant -->
      <button
        v-else-if="opponent.hp > 0 && opponentStore.playerAttackType !== 'instant'"
        class="cta"
        @click="commitBattleState('defend')"
      >
        Försvara dig
      </button>
      <!-- If instant attack -->
      <button
        v-else-if="opponentStore.playerAttackType === 'instant'"
        class="cta"
        @click="commitBattleState('pending')"
      >
        Gå vidare
      </button>
      <!-- If player is dead -->
      <template v-else-if="opponent.hp === 0">
        <div class="text">
          <b>{{ opponent.name }} är besegrad</b>
        </div>
        
        <button    
          v-if="!opponentsAlive"   
          class="cta"
          @click="doWin"
        >
          Gå vidare
        </button>
        <button
          v-else
          class="cta"
          @click="commitBattleState('defend')"
        >
          Försvara dig
        </button>
      </template>
    </template>
    <!-- Throw -->
    <div v-else>
      <button
        class="cta"
        @click="commitBattleState('pending')"
      >
        Kastet lyckas, välj attack
      </button>
    </div>
  </section>
</template>