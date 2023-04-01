import { defineStore } from 'pinia'
import { EnumAbilities } from '../assets/enums'
import { type Player } from './playerInterfaces'

export const usePlayerStore = defineStore('player', {
  state: (): Player => ({
    abilities: [],
    items: {
      shuriken: 5,
      gold: 0,
      opalring: false,
      healingPotion: false,
      glove: false,
      magicShuriken: false
    },
    modifiers: {
      punch: 0,
      kick: 0,
      throw: 0,
      fate: 0
    },
    attributes: {
      hp: 20,
      hp_max: 20,
      innerStrength: 5
    },
    temporary: {
      useInnerStrength: null,
      attackModifier: null,
      damageModifier: null
    }
  }),
  actions: {
    // Abilities
    add_player_ability (payload: EnumAbilities) {
      this.abilities.push(payload)
    },
    remove_player_ability (payload: number) {
      this.abilities.splice(payload, 1)
    },
    // Items
    set_player_item_shuriken (payload: number) {
      this.items.shuriken += payload
    },
    set_player_item_magicShuriken (payload: boolean) {
      this.items.magicShuriken = payload
    },
    set_player_item_gold (payload: number) {
      this.items.gold += payload
    },
    set_player_item_opalring (payload: boolean) {
      this.items.opalring = payload
    },
    set_player_item_glove (payload: boolean) {
      this.items.glove = payload
    },
    set_player_item_healingPotion (payload: boolean) {
      this.items.healingPotion = payload
    },
    // Attributes
    set_player_attribute_hp (payload: number) {
      this.attributes.hp += payload
      if (this.attributes.hp > 20) {
        this.attributes.hp = 20
      } else if (this.attributes.hp < 0) {
        this.attributes.hp = 0
      }
    },
    set_player_attribute_innerStrength (payload: number) {
      this.attributes.innerStrength += payload
      this.attributes.innerStrength = (this.attributes.innerStrength > 5) ? 5 : this.attributes.innerStrength
    },
    // Modifiers
    set_player_modifier_punch (payload: number) {
      this.modifiers.punch += payload
    },
    set_player_modifier_kick (payload: number) {
      this.modifiers.kick += payload
    },
    set_player_modifier_throw (payload: number) {
      this.modifiers.throw += payload
    },
    set_player_modifier_fate (payload: number) {
      this.modifiers.fate += payload
    },
    // Temporary
    set_player_temporary_useInnerStrength (payload: boolean | null) {
      this.temporary.useInnerStrength = payload
    },
    set_player_temporary_attackModifier (payload: boolean | null) {
      this.temporary.attackModifier = payload
    },
    set_player_temporary_damageModifier (payload: boolean | null) {
      this.temporary.damageModifier = payload
    }
  }
})
