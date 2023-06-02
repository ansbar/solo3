import { defineStore } from "pinia"
import { IPage } from "./pageInterfaces"
import { usePlayerStore } from "./playerStore"
import { EAddedAbilities, ECondition, EItems } from "@/assets/enums"

export const usePageStore = defineStore("page", {
  state: (): IPage => (
    {
      opponent: undefined,
      image: undefined,
      choices: undefined,
      successfulThrowChoices: undefined,
      specialCondition: undefined,
      autoEndBattle: false,
      sideEffects: undefined,
      endPage: false
    }
  ),
  actions: {
    setPageData(payload: IPage) {      
      const playerStore = usePlayerStore()
      this.$reset() // Reset page state at every page change      

      this.$patch({ choices: payload.choices })
      this.$patch({ successfulThrowChoices: payload.successfulThrowChoices })
      this.$patch({ specialCondition: payload.specialCondition })
      this.$patch({ image: payload.image })
      this.$patch({ sideEffects: payload.sideEffects })

      this.opponent = payload.opponent 
      this.autoEndBattle = payload.autoEndBattle
      this.endPage = payload.endPage

      if (this.sideEffects?.modifiers) {
        const modifiers = this.sideEffects.modifiers        
        if (modifiers.fate) playerStore.setPlayerModifierFate(modifiers.fate)
        if (modifiers.kick) playerStore.setPlayerModifierKick(modifiers.kick)
        if (modifiers.punch) playerStore.setPlayerModifierPunch(modifiers.punch)
        if (modifiers.throw) playerStore.setPlayerModifierThrow(modifiers.throw)
      }

      if (this.sideEffects?.temporary) {
        const temporary = this.sideEffects.temporary        
        if (temporary.attack) playerStore.setTemporaryAttackModifier(temporary.attack)    
        if (temporary.damage) playerStore.setTemporaryAttackModifier(temporary.damage)       
      }

      if (this.sideEffects?.conditions) {
        const c = this.sideEffects.conditions     
        console.log(c)
        if (c.hasNotKilledHonoric) playerStore.toggleCondition({ condition: ECondition.hasNotKilledHonoric, state: false})      
      }
      
      if (this.sideEffects?.items) {        
        const items = this.sideEffects.items   
        
        for (const key in items) {
          if (Object.hasOwn(items, key)) {
            playerStore.setPlayerItem({ item: key as EItems, amount: items[key] || 0 })
          }
        }
      }      
      
      if (this.sideEffects?.attributes) {
        const attributes = this.sideEffects.attributes        
        if (attributes.hp) playerStore.setPlayerAttributeHp(attributes.hp)
        if (attributes.innerForce) playerStore.setAttributeInnerForce(attributes.innerForce)
      }   

      if (this.sideEffects?.abilities) {
        const abilities = this.sideEffects.abilities        
        if (abilities.kwonsFlail) {
          playerStore.addPlayerAbility(EAddedAbilities.kwonsFlail)
        } else {
          const index = playerStore.abilities.indexOf(EAddedAbilities.kwonsFlail)
          if (index != -1) playerStore.removePlayerAbility(index)
        }
      }      
    }
  }
})
