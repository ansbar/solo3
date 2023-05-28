<script setup lang="ts">
  import { computed, ref, watch, onMounted } from "vue"
  import { useMainStore, usePlayerStore } from "@/stores"
  import { EAbilities, EDifficulty } from "@/assets/enums"
  import { useTexts } from "@/utils/texts"

  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  const { abilityTexts, difficultyTexts, difficultyHelpTexts } = useTexts()

  const playerAbilities = computed(() => playerStore.abilities)
  const difficultyChoice = ref("veryHard")

  // Abilities not already chosen by player
  const availableAbilities = computed((): EAbilities[] => {
    return Object.values(EAbilities).filter(a => !hasAbility(a))
  })

  // Returns true if player has the requested ability
  const hasAbility = (ability: EAbilities) => playerStore.abilities.includes(ability)
  const isAllAbilitiesChosen = computed(() => playerAbilities.value.length >= mainStore.numberOfAbilities)
  
  const startGame = () => {
    mainStore.setCurrentPageId(1)
    mainStore.mainPage = "started"
  }

  watch(difficultyChoice, (value) => {
    mainStore.setDifficulty(value as EDifficulty)
  })  

  onMounted(() => {
    //Reset all player values
    playerStore.initPlayer()
    mainStore.setDifficulty(EDifficulty.veryHard)
  })
</script>

<template>
  <div>
    <h1>Skapa din karaktär</h1>    
    <h2>Välj svårighetsgrad</h2>
    <div class="card">
      <div>
        <select v-model="difficultyChoice">
          <option
            v-for="(difficulty, index) in EDifficulty"
            :key="difficulty"
            :value="index"
          >
            {{ difficultyTexts[difficulty] }}
          </option>
        </select>
        <hr>
        <div
          class="text"
          v-html="difficultyHelpTexts[mainStore.difficulty]"
        />
      </div>
    </div>

    <h2>Välj {{ mainStore.numberOfAbilities }} färdigheter</h2>
    <div class="card">
      <div class="first-col">
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
      <div class="second-col">
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


<style lang="scss">
  .card select {
    margin-bottom: 0.6rem
  }
</style>