<script lang="ts" setup>
  import {  usePlayerStore, useOpponentStore } from "@/stores"
  import { storeToRefs } from "pinia"
  import { useOpponents } from "@/utils/opponents"
  import { useTexts } from "@/utils/texts"
  import { TDefenseTypes } from "@/assets/types"

  const opponentStore = useOpponentStore()
  const { defenseTexts } = useTexts()
  const { playerDefense, opponentDefense } = useOpponents()

  const { playerAttackType, playerDamage } = storeToRefs(useOpponentStore())
  const { attributes } = storeToRefs(usePlayerStore())
</script>

<template>
  <div class="card">
    <div 
      class="first-col"
      :class="attributes.hp === 0 ? 'dead' : ''"
    >
      <h3>Hämnaren (du)</h3>
      <ul>
        <li>Kroppspoäng: {{ attributes.hp }}/{{ attributes.hpMax }}</li>
        <li v-if="playerAttackType !== 'instant'">
          Ditt försvar: {{ playerDefense }}
        </li>
        
        <li v-if="playerDamage">
          Skada: {{ playerDamage }}
        </li>
      </ul>
      <ul>
        <li>Inre kraft: {{ attributes.innerForce }}</li>
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
          <li v-if="playerAttackType !== 'instant' && o.defense">
            {{ defenseTexts[playerAttackType as TDefenseTypes] }}: {{ opponentDefense(o.defense) }}
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