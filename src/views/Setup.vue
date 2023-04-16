<script setup lang="ts">
  import { computed, onMounted } from "vue"
  import { useMainStore, usePlayerStore } from "@/stores"
  import { EAbilities } from "@/assets/enums"
  import { useTexts } from "@/utils/texts"

  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  const { abilityTexts } = useTexts()

  const playerAbilities = computed(() => playerStore.abilities)

  onMounted(() => {
    init()    
  })

  const init = () => {
    // Todo: let user choose a language
  }

  // Abilities not already chosen by player
  const availableAbilities = computed((): EAbilities[] => {
    return Object.values(EAbilities).filter(a => !hasAbility(a))
  })

  // Returns true if player has the requested ability
  const hasAbility = (ability: EAbilities) => playerStore.abilities.includes(ability)

  const isAllAbilitiesChosen = computed(() => playerAbilities.value.length >= 3)

  const startGame = () => {
    mainStore.setCurrentPageId(1)
  }
</script>

<template>
  <div>
    <h1>Tigerns väg - Hämnaren</h1>
    <h2>Välj tre färdigheter</h2>
    <div class="card">
      <div>
        <h3>Tillgängliga</h3>
        <ul>
          <li
            v-for="(ability, index) in availableAbilities"
            :key="index"
          >
            <a
              v-if="!isAllAbilitiesChosen"
              href="#"
              title="Välj"
              :text="abilityTexts[ability]"
              @click="playerStore.addPlayerAbility(ability)"
            />
            <span
              v-else
              title="Ta bort en färdighet för att välja denna"
              class="non-active-link"
              v-text="abilityTexts[ability]"
            />
          </li>
        </ul>
      </div>
      <div>
        <h3 v-if="playerAbilities.length">
          Valda
        </h3>
        <ul>
          <li
            v-for="(ability, index) in playerAbilities"
            :key="index"
          >
            <a
              href="#"
              title="Ta bort"
              :text="abilityTexts[ability]"
              @click="playerStore.removePlayerAbility(index)"
            />
          </li>
        </ul>
      </div>
    </div>

    <div class="text">
      <div class="button-group">
        <button
          :disabled="!isAllAbilitiesChosen"
          @click="startGame"
          v-text="'Starta äventyret!'"
        />
      </div>
    </div>
  </div>
</template>