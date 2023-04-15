<script lang="ts" setup>
  import { ref, onMounted, computed } from "vue"
  import { useDice } from "@/utils/dice"
  import { useMainStore, usePlayerStore, useTextStore, useOpponentStore } from "@/stores"
  import { useOpponents } from "@/utils/opponents"
  import { EAttackType, EBattleStates } from "@/assets/enums"
  import { useGeneric } from "@/utils/generic"

  const textStore = useTextStore()
  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const dice = useDice()
  const generic = useGeneric()
  const { opponentsAlive } = useOpponents() 

  const isHit = ref(false)
  const attackChance = ref("2T6")
  const rollText = ref("")
  const damageText =  ref("")

  const opponent = computed(() => {
    return opponentStore.opponents[mainStore.currentOpponent]
  })

  onMounted(() => {
    // If attack is instant only the damage part is needed
    if(opponentStore.playerAttackType !== EAttackType.instant)
      attack()
    else
      doDamage()      
  })

  const commitBattleState = (battleState: string) => {
    mainStore.setBattlestate(battleState as EBattleStates)
  }

  const calculateAttackModifier = () => {
    // First permanent modifier for the type, like punch. 
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

    if(isHit.value){      
      if(opponentStore.playerAttackType !== EAttackType.throw && !opponentStore.directWin){
        doDamage()        
      } else {
        if (opponentStore.directWin) {
          //
        } else {
          // A successful throw instead adds 2 to damage on next attack
          mainStore.setThrownOpponent(mainStore.currentOpponent)
          playerStore.setTemporaryDamageModifier(2)
        }
      }
    } else if (opponentStore.missDamage) {
      // In the case a static damage is applied when player fails with attack (like page 267)
      playerStore.setPlayerAttributeHp(opponentStore.missDamage)
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
    <template v-if="textStore.page.directWin && isHit">
      <div class="text">   
        {{ textStore.page.directWin }}
      </div>
      <a 
        href="#"
        @click="generic.gotoPage(opponentStore.directWin as number)"
      >
        Gå vidare
      </a>     
    </template>

    <!-- Miss or not Throw -->
    <template v-else-if="!isHit || opponentStore.playerAttackType != 'throw'">
      <!-- If opponent is still alive -->
      <div
        v-if="opponent.hp > 0"
        class="text"
      >
        <!-- Unsuccessful throw text -->
        <template v-if="opponentStore.playerAttackType === 'throw'">
          {{ textStore.page.unsuccessfulThrow }}
        </template>

        <!-- If opponent is still alive text -->
        <template v-else>
          {{ textStore.page.stillAlive }}
        </template>       
      </div>

      <!-- If special skip defend phase at miss (go to special page) -->
      <a
        v-if="!isHit && opponentStore.miss"
        href="#"
        @click="handleSpecialMiss()"
      >
        {{ textStore.page.miss }}
      </a>  

      <!-- If special skip defend phase at hit (go to special page) -->
      <template v-else-if="isHit && opponentStore.miss">
        <button    
          v-if="!opponentsAlive"   
          @click="doWin"
        >
          Gå vidare
        </button>
        <button      
          v-else  
          @click="commitBattleState('pending')"
        >
          Gå vidare
        </button>
      </template>    

      <!-- If opponent is alive and attack is not instant -->
      <template v-else-if="opponent.hp > 0 && opponentStore.playerAttackType !== 'instant'">
        <button
          v-if="playerStore.attributes.hp > 0"
          @click="commitBattleState('defend')"
        >
          Försvara dig
        </button>

        <a 
          v-else
          href="#"
          @click="generic.doStartOver()"
        >
          Du är död. Börja om?
        </a>     
      </template>

      <!-- If instant attack -->
      <button
        v-else-if="opponentStore.playerAttackType === 'instant'"
        @click="commitBattleState('pending')"
      >
        Gå vidare
      </button>

      <!-- If opponent is dead -->
      <template v-else-if="opponent.hp === 0">
        <div class="text">
          <b>{{ opponent.name }} är besegrad</b>
        </div>
        
        <button    
          v-if="!opponentsAlive"   
          @click="doWin"
        >
          Gå vidare
        </button>
        <button
          v-else
          @click="commitBattleState('defend')"
        >
          Försvara dig
        </button>
      </template>
    </template>


    <!-- Throw -->
    <div v-else>
      <div
        v-if="textStore.page.successfulThrow"
        class="text"
      >
        {{ textStore.page.successfulThrow }}
      </div>

      <button
        @click="commitBattleState('pending')"
      >
        Kastet lyckas, välj attack
      </button>
    </div>
  </section>
</template>