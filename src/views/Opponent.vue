<script lang="ts" setup>
  import {  usePlayerStore, useOpponentStore } from "@/stores"
  import { storeToRefs } from "pinia"
  import { EAttackType, EDefenseType } from "@/assets/enums"
  import { useOpponents } from "@/utils/opponents"
  import { useTexts } from "@/utils/texts"

  const opponentStore = useOpponentStore()
  const { defenseTexts } = useTexts()
  const { playerDefense } = useOpponents()

  const { playerAttackType, playerDamage } = storeToRefs(useOpponentStore())
  const { attributes } = storeToRefs(usePlayerStore())
</script>

<template>
  <div class="card">
    <div class="first-col">
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
    <div class="second-col">
      <div
        v-for="(o) in opponentStore.opponents"
        :key="o.name"
        :class="o.hp === 0 ? 'dead' : ''"
      >
        <h3>{{ o.name }}</h3>
        <ul>
          <li>Kroppspoäng: {{ o.hp }}/{{ o.hpMax }}</li>
          <li v-if="playerAttackType !== EAttackType.instant">
            {{ defenseTexts[playerAttackType as unknown as EDefenseType] }}: {{ o.defense }}
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
  .dead {
    color: #999;
  }
</style>