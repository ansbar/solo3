<script lang="ts" setup>
  import { useMainStore } from "../../stores/mainStore"
  import Start from "./Start.vue"
  import Attack from "./Attack.vue"
  import Defend from "./Defend.vue"
  import { storeToRefs } from "pinia"
  import { EBattleStates } from "../../assets/enums"

  const { battlestate } = storeToRefs(useMainStore())
</script>

<template>
  <div
    class="battle"
    :class="battlestate === EBattleStates.pending ? 'hide' : ''"
  >    
    <Start v-if="battlestate === EBattleStates.innerStrength" />
    <Attack v-if="battlestate === EBattleStates.attack" />
    <Defend v-if="battlestate === EBattleStates.defend" />
  </div>
</template>

<style lang="scss">
  button {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 145px;
    min-height: 50px;
    padding: 0 20px;
    border-radius: 35px;
    background-color: white;
    border: none;
    cursor: pointer;
    line-height: 1;
    color: #4D7373;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

    &:disabled {
      background-color: lightgray !important
    }

    &.cta {
      background-color: #3b6493;
      color: white;
    }

    +button {
      margin-left: .5em;
    }
  }

  .button-group {
    margin: 0.5em 0;
  }

  .battle {
    border: 2px dashed #9eb890;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 2em 2.5em 2em 2em;

    &.hide {
      border: 0;
      padding: 0;
    }
  }
</style>