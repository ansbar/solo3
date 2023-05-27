import { defineStore } from "pinia"
import { EAbilities, EAddedAbilities, ECondition, EItems } from "@/assets/enums"
import { type Player } from "./playerInterfaces"
import { useMainStore } from "./mainStore"

export const usePlayerStore = defineStore("player", {
  state: (): Player => ({
    abilities: [],
    items: {
      shuriken: 5,
      flashPowder: 1,
      poison: 1,
      gold: 0,
      opalring: 0,
      healingPotion: 0,
      glove: 0,
      magicShuriken: 0,
      fireLizardEssence: 0,
      herbs: 0,
      amulet: 0,
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
      innerForce: 5,
      innerForceMax: 5
    },
    conditions: {
      hasNotVisitedSwordOfDoomTower: true,
    },
    temporary: {
      useInnerForce: null,
      attackModifier: 0,
      damageModifier: 0
    }
  }),
  actions: {
    initPlayer () {
      this.$reset() 
    },
    // Abilities
    addPlayerAbility (payload: EAbilities | EAddedAbilities) {
      this.abilities.push(payload)
    },
    removePlayerAbility (payload: number) {
      this.abilities.splice(payload, 1)
    },
    // Conditions
    toggleCondition (payload: { condition: ECondition, state: boolean}) {
      this.conditions[payload.condition] = payload.state
    },
    // Items
    setPlayerItem (payload: {item: EItems, amount: number }){
      this.items[payload.item] += payload.amount 
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
    setAttributeInnerForce (payload: number) {
      this.attributes.innerForce += payload
      if (this.attributes.innerForce > this.attributes.innerForceMax) {
        this.attributes.innerForce = this.attributes.innerForceMax
      } else if (this.attributes.innerForce < 0) {
        this.attributes.innerForce = 0
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
    setTemporaryInnerForce (payload: boolean | null) {
      this.temporary.useInnerForce = payload
    },
    setTemporaryAttackModifier (payload: number) {
      const mainStore = useMainStore()
      if (payload) mainStore.addToHistory(`- Ny temporär attackmodifierare: ${payload}`)
      this.temporary.attackModifier = payload
    },
    setTemporaryDamageModifier (payload: number) {
      const mainStore = useMainStore()
      if (payload) mainStore.addToHistory(`- Ny temporär skademodifierare: ${payload}`)
      this.temporary.damageModifier = payload === 0 ? payload : this.temporary.damageModifier + payload
    }
  }
})
