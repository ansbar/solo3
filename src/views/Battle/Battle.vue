<script lang="ts" setup>
  import { useMainStore, useOpponentStore } from "@/stores"
  import InnerForce from "./InnerForce.vue"
  import Attack from "./Attack.vue"
  import Defend from "./Defend.vue"

  import ChooseOpponent from "./ChooseOpponent.vue"
  import { storeToRefs } from "pinia"

  const opponentStore = useOpponentStore()
  const { battlestate } = storeToRefs(useMainStore())
</script>

<template>
  <div
    v-if="opponentStore.playerAttackType !== 'none'"
    class="battle"
    :class="battlestate === 'pending' ? 'hide' : ''"
  >
    <ChooseOpponent v-if="battlestate === 'chooseOpponent'" />
    <InnerForce v-if="battlestate === 'innerForce'" />
    <Attack v-if="battlestate === 'attack'" />
    <Defend v-if="battlestate === 'defend'" />
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
    font-family: Times New Roman;
    font-size: 20px;
    border: 2px dashed #9eb890;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 2em 2.5em 2em 2em;

    @media screen and (max-width: 600px) {
      padding: 1em 1.5em 1em 1em;
      font-size: 18px;
    }

    &.hide {
      border: 0;
      padding: 0;
    }
  }
</style>