import { defineStore } from 'pinia'
import { EnumBattleStates } from '../assets/enums'

interface Main {
  battlestate: EnumBattleStates
}

export const useMainStore = defineStore('main', {
  state: (): Main => (
    { 
      battlestate: EnumBattleStates.pending
    }
  ),
  actions: {
    set_main_battlestate (payload: EnumBattleStates) {
      this.battlestate = payload
    }
  }
})
