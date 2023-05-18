import { computed } from "vue"
import { useOpponentStore } from "@/stores/opponentStore"

export function useOpponents() {
  const opponentStore = useOpponentStore()  

  // Returns number of opponents alive
  const opponentsAlive = computed(() => {    
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


  return { opponentsAlive, playerDefense, playerThrowDefense, firstOpponentAlive }
}