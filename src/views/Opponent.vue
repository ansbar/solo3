<script lang="ts" setup>
  import { usePlayerStore } from "../stores/playerStore"
  import { useTextStore } from "../stores/textStore"
  import { useOpponentStore } from "../stores/opponentStore"
  import { storeToRefs } from "pinia"
  import { EDefenseType } from "../assets/enums"

  const opponentStore = useOpponentStore()
  const { playerAttackType, playerDamage } = storeToRefs(useOpponentStore())
  const { attributes } = storeToRefs(usePlayerStore())

  const textStore = useTextStore()
</script>

<template>
  <div class="card">
    <div class="player">
      <h3>Hämnaren (du)</h3>
      <ul>
        <li>Kroppspoäng: {{ attributes.hp }}/{{ attributes.hpMax }}</li>
        <li>
          Ditt försvar: 
          <span
            v-for="(o) in opponentStore.opponents"
            :key="o.name"
          >
            {{ o.playerDefense }}
          </span>
        </li>
        
        <li>Skada: {{ playerDamage }}</li>
      </ul>
      <ul>
        <li>Inre kraft: {{ attributes.innerStrength }}</li>
      </ul>
    </div>
    <div
      v-for="(o) in opponentStore.opponents"
      :key="o.name"
    >
      <h3>{{ o.name }}</h3>
      <ul>
        <li>Kroppspoäng: {{ o.hp }}/{{ o.hpMax }}</li>
        <li>
          {{ textStore.defense[playerAttackType as unknown as EDefenseType] }}: {{ o.defense }}
        </li>
        
        <li v-if="o.damage">
          Skada: {{ o.damage }}
        </li>
      </ul>
    </div>
  </div>
</template>