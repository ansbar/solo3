<script lang="ts" setup>
  import { ref, onMounted, computed } from "vue"
  import { useDice } from "@/utils/dice"
  import { useMainStore, usePlayerStore, useOpponentStore } from "@/stores"
  import { useOpponents } from "@/utils/opponents"
  import { EAttackType, EBattleStates } from "@/assets/enums"
  import { useGeneric } from "@/utils/generic"
  import { useTexts } from "@/utils/texts"

  const mainStore = useMainStore()
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore() 
  
  const { opponentsAlive } = useOpponents() 
  const { pageTexts } = useTexts()
  const generic = useGeneric()
  const dice = useDice()  
  
  const attackChance = ref("2T6")  
  const damageText =  ref("")
  const rollText = ref("")
  const isHit = ref(false)

  const opponent = computed(() => opponentStore.opponents[mainStore.currentOpponent])

  onMounted(() => {
    // If attack is instant only the damage part is needed
    if(opponentStore.playerAttackType === EAttackType.instant)
      doDamage()    
    // If battle starts with defense phase
    else if (opponentStore.playerAttackType === EAttackType.defense)
      commitBattleState("defend")
    else
      attack()        
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

    // Hit
    if(isHit.value){     
      // No damage if direct win or throw
      if(opponentStore.playerAttackType !== EAttackType.throw && !opponentStore.directWin){
        doDamage()        
      } else {
        if (!opponentStore.directWin) {          
          // A successful throw instead adds 2 to damage on next attack
          mainStore.setThrownOpponent(mainStore.currentOpponent)
          playerStore.setTemporaryDamageModifier(2)
        }
      }
    } else if (opponentStore.missDamage) {
      // In the case a static damage is applied when player fails with an attack (like page 267)
      playerStore.setPlayerAttributeHp(opponentStore.missDamage)
    }     
  }


  // Damage on opponent
  const doDamage = () => {
    if (!opponentStore.playerDamage) return

    let damageRoll = 0
    // If set damge (not a roll like 1T6) we skip damageRoll
    if (opponentStore.playerDamage.length > 2)
      damageRoll = dice.doRoll(opponentStore.playerDamage || "", playerStore.temporary.damageModifier)  
    else
      damageRoll = parseInt(opponentStore.playerDamage)

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
      <div v-if="opponent.hp > 0" class="text">
        <!-- Unsuccessful throw text -->
        <template v-if="opponentStore.playerAttackType === 'throw'">
          {{ pageTexts.unsuccessfulThrow }}
        </template>

        <!-- If opponent is still alive text -->
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
        <button v-else @click="commitBattleState('pending')">
          Gå vidare
        </button>
      </template>    

      <!-- If opponent is alive and attack is not instant -->
      <template v-else-if="opponent.hp > 0 && opponentStore.playerAttackType !== 'instant'">
        <button v-if="playerStore.attributes.hp > 0" @click="commitBattleState('defend')">
          Försvara dig
        </button>

        <a v-else href="#" @click="generic.doStartOver()">
          Du är död. Börja om?
        </a>     
      </template>

      <!-- If instant attack -->
      <button v-else-if="opponentStore.playerAttackType === 'instant'" @click="commitBattleState('pending')">
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
        <button v-else @click="commitBattleState('defend')">
          Försvara dig
        </button>
      </template>
    </template>


    <!-- Throw -->
    <div v-else>
      <div v-if="pageTexts.successfulThrow" class="text">
        {{ pageTexts.successfulThrow }}
      </div>

      <button @click="commitBattleState('pending')">
        Kastet lyckas, välj attack
      </button>
    </div>
  </section>
</template>