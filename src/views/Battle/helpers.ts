import { useMainStore, usePlayerStore, useOpponentStore } from "@/stores/"
import { EAttackType, EBattleStates } from "@/assets/enums"
import { useDice } from "@/utils/dice"
import { Ref } from "vue"
import { Opponent } from "@/stores/opponentStore"


export function useBattle() {
  const dice = useDice()
  const mainStore = useMainStore()  
  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  

  // Just a shorter version of changing battle state
  const changeState = (battleState: string) => {
    mainStore.setBattlestate(battleState as EBattleStates)
  }


  // Player takes damage
  const takeDamage = (damageText: Ref<string>, damage: string) => {    
    const staticDamage = damage.length <= 2
    let damageRoll = 0

    // If set damage (like a 5, not a roll like 1T6) we skip damageRoll
    if (!staticDamage)
      damageRoll = dice.doRoll(damage, undefined)  
    else
      damageRoll = parseInt(damage)
      
    playerStore.setPlayerAttributeHp(-damageRoll)
            
    damageText.value += `Du tar ${damageRoll} i skada `
    damageText.value += staticDamage ? "" : `(${damage})`
    
    if(playerStore.attributes.hp < 1){
      damageText.value += " <b>och besegras!</b>"
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
    }else{
      damageText.value += " och har " + playerStore.attributes.hp + " kroppspoäng kvar."
    }

    return damageText.value
  }

  
  // Deal damage to opponent
  const dealDamage = (damageText: Ref<string>, opponent: Ref<Opponent>, ally?: boolean) => {
    // Set correct damage depending on normal attack or ally attack
    const damage = ally ? opponentStore.allyAttack!.damage : opponentStore.playerDamage
    if (!damage) return

    const staticDamage = damage.length <= 2
    let innerStrengthText = ""
    let damageModifierText = ""
    let damageRoll = 0

    // If static damage (like 5, not a roll like 1T6) we skip damageRoll
    if (!staticDamage)
      damageRoll = dice.doRoll(damage || "", ally ? undefined : playerStore.temporary.damageModifier)  
    else
      damageRoll = parseInt(damage)
      
    if (!ally && playerStore.temporary.damageModifier)
      damageModifierText = "+" + playerStore.temporary.damageModifier    

    if (!ally && playerStore.temporary.useInnerStrength){                
      damageRoll = damageRoll * 2
      innerStrengthText = " gånger 2"  
      playerStore.setTemporaryInnerStrength(null)              
    }                

    opponentStore.setOpponentHp(mainStore.currentOpponent, damageRoll)

    damageText.value += `${opponent.value.name} tar ${damageRoll} i skada `
    damageText.value += staticDamage ? "" : `(${damage}${damageModifierText}${innerStrengthText})`

    if (opponent.value.hp < 1){
      damageText.value += " och besegras!"
      mainStore.addToHistory(`Runda ${mainStore.battleRoundCounter} avslutad`)  
    } else{
      damageText.value += ` och har ${opponent.value.hp} kroppspoäng kvar.`
    }       
              
    playerStore.setTemporaryDamageModifier(0)

    return damageText.value
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


  const firstOpponentAlive = (opponentIndex: number) => {
    /* Returns the index of the first opponent alive
     * It is used for:
     * - check the first opponent alive at mounted (start of defense phase)
     * - check if there are any opponents alive to attack (when deciding which button to show; next opponent or next round)
     * - check which opponent is the next current attacker (needed when an opponent in the middle is dead) */
    
    for (let i = opponentIndex; i < opponentStore.opponents.length; i++) {      
      if (opponentStore.opponents[i].hp > 0) {
        return i
      }   
    }
    return false
  }

  return { takeDamage, dealDamage, calculateAttackModifier, changeState, firstOpponentAlive,  }
}