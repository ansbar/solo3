import { defineStore } from "pinia"
import { EAbilities, EAddedAbilities, EItems } from "@/assets/enums"
import { type Player } from "./playerInterfaces"
import { useMainStore } from "./mainStore"

export const usePlayerStore = defineStore("player", {
  state: (): Player => ({
    abilities: [],
    items: {
      shuriken: 5,
      gold: 0,
      opalring: false,
      healingPotion: false,
      glove: false,
      magicShuriken: false,
      fireLizardEssence: false,
      herbs: false
    },
    modifiers: {
      punch: 0,
      kick: 0,
      throw: 0,
      fate: 0,
    },
    attributes: {
      hp: 20,
      hpMax: 20,
      innerStrength: 5,
      innerStrengthMax: 5
    },
    temporary: {
      useInnerStrength: null,
      attackModifier: 0,
      damageModifier: 0
    }
  }),
  actions: {
    // Abilities
    addPlayerAbility (payload: EAbilities | EAddedAbilities) {
      this.abilities.push(payload)
    },
    removePlayerAbility (payload: number) {
      this.abilities.splice(payload, 1)
    },
    // Items
    togglePlayerItem (payload: {item: EItems, toggle: boolean }){
      this.items[payload.item] = payload.toggle as never // Todo, why is never needed
    },
    setPlayerItemShuriken (payload: number) {
      this.items.shuriken += payload
    },
    togglePlayerItemMagicShuriken (payload: boolean) {
      this.items.magicShuriken = payload
    },
    togglePlayerItemHerbs (payload: boolean) {
      this.items.herbs = payload
    },
    setPlayerItemGold (payload: number) {
      this.items.gold += payload
    },
    togglePlayerItemOpalring (payload: boolean) {
      this.items.opalring = payload
    },
    togglePlayerItemGlove (payload: boolean) {
      this.items.glove = payload
    },
    togglePlayerItemHealingPotion (payload: boolean) {
      this.items.healingPotion = payload
    },
    // Attributes
    setPlayerAttributeHp (payload: number) {
      this.attributes.hp += payload
      if (this.attributes.hp > this.attributes.hpMax) {
        this.attributes.hp = this.attributes.hpMax
      } else if (this.attributes.hp < 0) {
        this.attributes.hp = 0
      }
    },
    setAttributeInnerStrength (payload: number) {
      this.attributes.innerStrength += payload
      if (this.attributes.innerStrength > this.attributes.innerStrengthMax) {
        this.attributes.innerStrength = this.attributes.innerStrengthMax
      } else if (this.attributes.innerStrength < 0) {
        this.attributes.innerStrength = 0
      }
    },
    // Modifiers
    setPlayerModifierPunch (payload: number) {
      this.modifiers.punch += payload
    },
    setPlayerModifierKick (payload: number) {
      this.modifiers.kick += payload
    },
    setPlayerModifierThrow (payload: number) {
      this.modifiers.throw += payload
    },
    setPlayerModifierFate (payload: number) {
      this.modifiers.fate += payload
    },
    // Temporary
    setTemporaryInnerStrength (payload: boolean | null) {
      this.temporary.useInnerStrength = payload
    },
    setTemporaryAttackModifier (payload: number) {
      const mainStore = useMainStore()
      if (payload) mainStore.addToHistory(`- La till temporär attackmodifierare: ${payload}`)
      this.temporary.attackModifier = payload
    },
    setTemporaryDamageModifier (payload: number) {
      const mainStore = useMainStore()
      if (payload) mainStore.addToHistory(`- La till temporär skademodifierare: ${payload}`)
      this.temporary.damageModifier = payload === 0 ? payload : this.temporary.damageModifier + payload
    }
  }
})
