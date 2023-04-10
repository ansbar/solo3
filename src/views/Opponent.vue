<script lang="ts" setup>
  import { usePlayerStore } from "../stores/playerStore"
  import { useTextStore } from "../stores/textStore"
  import { useOpponentStore } from "../stores/opponentStore"
  import { storeToRefs } from "pinia"
  import { EAttackType, EDefenseType } from "../assets/enums"
  import { useOpponents } from "../utils/opponents"

  const opponentStore = useOpponentStore()
  const textStore = useTextStore()
  const { playerDefense } = useOpponents()

  const { playerAttackType, playerDamage } = storeToRefs(useOpponentStore())
  const { attributes } = storeToRefs(usePlayerStore())
</script>

<template>
  <div class="card">
    <div class="player">
      <h3>Hämnaren (du)</h3>
      <ul>
        <li>Kroppspoäng: {{ attributes.hp }}/{{ attributes.hpMax }}</li>
        <li v-if="playerAttackType !== EAttackType.instant">
          Ditt försvar: {{ playerDefense }}
        </li>
        
        <li>Skada: {{ playerDamage }}</li>
      </ul>
      <ul>
        <li>Inre kraft: {{ attributes.innerStrength }}</li>
      </ul>
    </div>
    <div class="opponents">
      <div
        v-for="(o) in opponentStore.opponents"
        :key="o.name"
      >
        <h3>{{ o.name }}</h3>
        <ul>
          <li>Kroppspoäng: {{ o.hp }}/{{ o.hpMax }}</li>
          <li v-if="playerAttackType !== EAttackType.instant">
            {{ textStore.defense[playerAttackType as unknown as EDefenseType] }}: {{ o.defense }}
          </li>
        
          <li v-if="o.damage">
            Skada: {{ o.damage }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .player {
    width: 35%;
    padding-right: 3rem;
    border-right: 2px #9eb890 dashed;
  }
  .opponents {
    padding-left: 3rem;
    > div + div {
      margin-top: 1rem;
    }
  }
</style>