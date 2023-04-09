import { useMainStore } from "../stores/mainStore"

export function useDice() {  
  const mainStore = useMainStore()
  
  const doRoll = (diceValue: string, extraModifier?: number) => {
    /* Takes the following format: "1T6+1" where "+1" is optional. */
    const numberOfDices: number = parseInt(diceValue.substring(0, 1))
    const numberOfSides: number = parseInt(diceValue.substring(2, 3))
    const modifierOperator: string = diceValue.substring(3, 4)
    const modifier: number = parseInt(diceValue.substring(4)) || 0
    let extraModifierText = ""
    let diceRolls = ""
    let diceResult = 0

    function randomDiceRoll(dice: number) {
      const diceRoll = Math.floor(Math.random() * dice + 1)
      return diceRoll
    }

    for (let i = 0; i < numberOfDices; i++) {
      const _diceResult = randomDiceRoll(numberOfSides)
      diceRolls += _diceResult + ", "
      diceResult += _diceResult
    }

    if (modifierOperator === "+") {
      diceResult += modifier
    } else if (modifierOperator === "-") {
      diceResult -= modifier
    }

    if (extraModifier) {
      diceResult += extraModifier
      if (extraModifier > 0) {        
        extraModifierText = "+" + extraModifier
      } else {
        extraModifierText = extraModifier.toString()
      }
    }

    mainStore.addToHistory(`- Slag: ${diceValue} (${diceRolls.slice(0, -2)}) ${extraModifierText} = ${diceResult}`)

    return diceResult
  }

  return { doRoll }
}