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
      damageRoll = dice.doRoll("Skadeslag", damage, undefined)  
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

  const defaultPlayerDamage = {
    none: "",
    throw: "",
    instant: "",
    defense: "",
    punch: "1T6",
    kick: "1T6+2"    
  }
  
  // Deal damage to opponent
  const dealDamage = (damageText: Ref<string>, opponent: Ref<Opponent>, ally?: boolean) => {
    // If no specific damage is set, use default damage per attack type (normal behaviour)
    let damage = opponentStore.playerDamage || defaultPlayerDamage[opponentStore.playerAttackType]
    // Set correct damage depending on normal attack or ally attack
    if (ally) damage = opponentStore.allyAttack!.damage

    if (!damage) return

    const staticDamage = damage.length <= 2
    let innerForceText = ""
    let damageModifierText = ""
    let damageRoll = 0

    // If static damage (like 5, not a roll like 1T6) we skip damageRoll
    if (!staticDamage)
      damageRoll = dice.doRoll("Skadeslag", damage || "", ally ? undefined : playerStore.temporary.damageModifier)  
    else {
      damageRoll = parseInt(damage)
      mainStore.addToHistory(`- Fast skada: ${damage}`)
     }
      
    if (!ally && playerStore.temporary.damageModifier)
      damageModifierText = "+" + playerStore.temporary.damageModifier    

    if (!ally && playerStore.temporary.useInnerForce){                
      damageRoll = damageRoll * 2
      innerForceText = " gånger 2"  
      playerStore.setTemporaryInnerForce(null)              
    }                

    opponentStore.setOpponentHp(mainStore.currentOpponent, damageRoll)

    damageText.value += `${opponent.value.name} tar ${damageRoll} i skada `
    damageText.value += staticDamage ? "" : `(${damage}${damageModifierText}${innerForceText})`

    if (opponent.value.hp < 1){
      damageText.value += " och besegras!"
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


  return { takeDamage, dealDamage, calculateAttackModifier, changeState,  }
}