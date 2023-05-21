import { computed } from "vue"
import { useOpponentStore, useMainStore } from "@/stores/"

export function useOpponents() {
  const mainStore = useMainStore()
  const opponentStore = useOpponentStore()  

  const currentOpponent = computed(() => opponentStore.opponents[mainStore.currentOpponent])

  const firstOpponentAlive = (opponentIndex: number) => {
    /* Returns the index of the first opponent alive
     * It is used for:
     * - check the first opponent alive at mounted (start of defense phase)
     * - check if there are any opponents alive to attack (when deciding which button to show; next opponent or next round)
     * - check which opponent is the next current attacker (needed when an opponent in the middle is dead) 
     * firstOpponentAlive(0) */
    
    for (let i = opponentIndex; i < opponentStore.opponents.length; i++) {      
      if (opponentStore.opponents[i].hp > 0) {
        return i
      }   
    }
    return false
  }

  
  const opponentsAlive = computed(() => {    
    // Returns number of opponents alive
    let alive = 0
    opponentStore.opponents.forEach(opponent => {
      if (opponent.hp > 0) alive ++
    }) 
    return alive
  })

  
  const playerDefense = computed(() => {
    // Returns the player defense for current opponent
    const currentAttackingOpponent = firstOpponentAlive(0)
    if (currentAttackingOpponent === false) return 0

    return opponentStore.opponents[currentAttackingOpponent].playerDefense[opponentsAlive.value - 1]
  })


  const playerThrowDefense = computed(() => {
    // Returns the player throw defense for current opponent
    const currentAttackingOpponent = firstOpponentAlive(0)
    if (currentAttackingOpponent === false) return 0

    const playerThrowDefense = opponentStore.opponents[currentAttackingOpponent].playerThrowDefense
    if (!playerThrowDefense) return 0
    
    return playerThrowDefense[opponentsAlive.value - 1]
  })


  const opponentDefense = (defense?: number) => {
    // Returns either the added param opponent or the current opponents defense for the page
    // In some battles (like page 61) a successful throw gives the opponent a static defense value.
    defense = defense || currentOpponent.value.defense
       
    // In others (like page 236) the opponent will have slightly lower defense in the first attack
    if (opponentStore.firstAttackBonus && !opponentStore.attacksUsed.includes(mainStore.currentPageId))
      return defense - opponentStore.firstAttackBonus
    return defense
  }

  return { currentOpponent, opponentsAlive, playerDefense, playerThrowDefense, firstOpponentAlive, opponentDefense }
}