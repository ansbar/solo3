<script setup lang="ts">
import { computed, onMounted } from "vue"
import { usePlayerStore } from './stores/player'
import { useTextsStore } from './stores/texts'
import { useMainStore } from './stores/main'
import { useStoryStore } from './stores/story'
import { EnumAbilities, EnumBattleStates } from './assets/enums'
import { generalTexts } from "./assets/swedish"

const playerStore = usePlayerStore()
const textsStore = useTextsStore()
const storyStore = useStoryStore()
const mainStore = useMainStore()

const player_abilities = computed(() => playerStore.abilities)
const text_abilities = computed(() => textsStore.abilities)

// get main_battlestate () { return store.getters.main_battlestate }
//     get player_abilities () { return store.getters.player_abilities }
//     get text_abilities () { return store.getters.text_abilities }

onMounted(() => {
  init()
  playerStore.add_player_ability(EnumAbilities.escapeArtist)
  playerStore.add_player_ability(EnumAbilities.acrobat)
  playerStore.add_player_ability(EnumAbilities.immunity)
  //startGame()
})

const init = () => {
  textsStore.set_text_ability(generalTexts.abilities)
  textsStore.set_text_defense(generalTexts.defense)
  mainStore.set_main_battlestate(EnumBattleStates.pending)
}

const availableAbilities = computed((): EnumAbilities[] => {
  let list = []
  for (let ability in text_abilities.value) {
    if (!hasAbility(ability as EnumAbilities)) list.push(ability as EnumAbilities)
  }
  return list
})

const allAbilitiesChosen = computed(() => {
  return player_abilities.value.length > 2
})

// Returns true if player has the requested ability
const hasAbility = (ability: EnumAbilities) => playerStore.abilities.includes(ability)

const addAbility = (ability: EnumAbilities) => {
  playerStore.add_player_ability(ability)
}

const removeAbility = (abilityIndex: number) => {
  playerStore.remove_player_ability(abilityIndex)
}

const startGame = () => {
  storyStore.set_story_id(1)
}
</script>

<template>
  <div>
    <h1>Tigerns väg - Hämnaren</h1>
    <h2>Välj tre färdigheter</h2>
    <div class="opponent">
      <div>
        <h3>Tillgängliga</h3>
        <ul>
          <li v-for="(ability, index) in availableAbilities" :key="index">
            <a v-if="!allAbilitiesChosen" href="#" title="Välj" @click="addAbility(ability)">{{ text_abilities[ability]
            }}</a>
            <span v-if="allAbilitiesChosen" title="Ta bort en färdighet för att välja denna" class="non-active-link">{{
              text_abilities[ability] }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 v-if="player_abilities.length">
          Valda
        </h3>
        <ul>
          <li v-for="(ability, index) in player_abilities" :key="index">
            <a href="#" title="Ta bort" @click="removeAbility(index)">{{ text_abilities[ability] }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="text">
      <div class="button-group">
        <button class="cta" :disabled="!allAbilitiesChosen" @click="startGame">
          Starta äventyret!
        </button>
      </div>
    </div>
  </div>
</template>