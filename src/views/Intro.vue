<script setup lang="ts">
  import { computed, onMounted } from "vue"
  import { usePlayerStore } from "../stores/playerStore"
  import { useTextStore } from "../stores/textStore"
  import { useMainStore } from "../stores/mainStore"
  import { EBattleStates } from "../assets/enums"
  import { languageGeneral } from "../assets/languages/swedish"
  import { EAbilities } from "../assets/enums"

  const playerStore = usePlayerStore()
  const textsStore = useTextStore()
  const mainStore = useMainStore()

  const playerAbilities = computed(() => playerStore.abilities)
  //const textAbilities = computed(() => textsStore.abilities)

  // get main_battlestate () { return store.getters.main_battlestate }
  //     get player_abilities () { return store.getters.player_abilities }
  //     get text_abilities () { return store.getters.text_abilities }

  onMounted(() => {
    init()
    // Temp add for quick start
    playerStore.addPlayerAbility(EAbilities.escapeArtist)
    playerStore.addPlayerAbility(EAbilities.acrobat)
    playerStore.addPlayerAbility(EAbilities.immunity)
  //startGame()
  })

  const init = () => {
    // Todo: let user choose a language
    textsStore.setGeneralTexts(languageGeneral)
    // mainStore.setBattlestate (EBattleStates.pending)
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
              :text="textsStore.abilities[ability]"
              @click="playerStore.addPlayerAbility(ability)"
            />
            <span
              v-else
              title="Ta bort en färdighet för att välja denna"
              class="non-active-link"
              v-text="textsStore.abilities[ability]"
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
              :text="textsStore.abilities[ability]"
              @click="playerStore.removePlayerAbility(index)"
            />
          </li>
        </ul>
      </div>
    </div>

    <div class="text">
      <div class="button-group">
        <button
          class="cta"
          :disabled="!isAllAbilitiesChosen"
          @click="startGame"
          v-text="'Starta äventyret!'"
        />
      </div>
    </div>
  </div>
</template>