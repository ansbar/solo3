import { defineStore } from "pinia"
import { IPage } from "./pageInterfaces"
import { usePlayerStore } from "./playerStore"

export const usePageStore = defineStore("page", {
  state: (): IPage => (
    {
      opponent: undefined,
      image: undefined,
      choices: undefined,
      choiceSpec: undefined,
      autoEndBattle: false,
      sideEffects: undefined
    }
  ),
  actions: {
    setPageData(payload: IPage) {      
      const playerStore = usePlayerStore()
      this.$reset() // Reset page state at every page change      

      this.$patch({ choices: payload.choices })
      this.$patch({ choiceSpec: payload.choiceSpec })
      this.$patch({ image: payload.image })
      this.$patch({ sideEffects: payload.sideEffects })

      this.opponent = payload.opponent 
      this.autoEndBattle = payload.autoEndBattle

      if (this.sideEffects?.modifiers) {
        const modifiers = this.sideEffects.modifiers        
        if (modifiers.fate) playerStore.setPlayerModifierFate(modifiers.fate)
        if (modifiers.kick) playerStore.setPlayerModifierFate(modifiers.kick)
        if (modifiers.punch) playerStore.setPlayerModifierFate(modifiers.punch)
        if (modifiers.throw) playerStore.setPlayerModifierFate(modifiers.throw)
      }

      if (this.sideEffects?.temporary) {
        const temporary = this.sideEffects.temporary        
        if (temporary.attack) playerStore.setTemporaryAttackModifier(temporary.attack)    
        if (temporary.damage) playerStore.setTemporaryAttackModifier(temporary.damage)       
      }
      
      if (this.sideEffects?.items) {
        const items = this.sideEffects.items        
        if (items.opalring) playerStore.togglePlayerItemOpalring(items.opalring)        
        if (items.glove) playerStore.togglePlayerItemGlove(items.glove)
        if (items.healingPotion) playerStore.togglePlayerItemHealingPotion(items.healingPotion)
        if (items.magicShuriken) playerStore.togglePlayerItemMagicShuriken(items.magicShuriken)
        if (items.gold) playerStore.setPlayerItemGold(items.gold)
        if (items.shuriken) playerStore.setPlayerItemShuriken(items.shuriken)
      }      
      
      if (this.sideEffects?.attributes) {
        const attributes = this.sideEffects.attributes        
        if (attributes.hp) playerStore.setPlayerAttributeHp(attributes.hp)
        if (attributes.innerStrength) playerStore.setAttributeInnerStrength(attributes.innerStrength)
      }      
    }
  }
})
