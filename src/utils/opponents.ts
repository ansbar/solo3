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

  // Returns the player defens for current opponent
  const playerDefense = computed(() => opponentStore.opponents[0].playerDefense[opponentsAlive.value - 1])

  return { opponentsAlive, playerDefense }
}