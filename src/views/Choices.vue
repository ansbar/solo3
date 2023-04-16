<script lang="ts" setup>
  import { useMainStore, usePlayerStore, usePageStore } from "@/stores"
  import { useOpponentStore } from "@/stores/opponentStore"
  import { EAbilities, EBattleStates } from "@/assets/enums"
  import { useTexts } from "@/utils/texts"

  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const pageStore = usePageStore()
  const mainStore = useMainStore()
  const { choicesTexts, abilityTexts } = useTexts()

  // Returns true if player  has the requested ability
  const hasAbility = (ability: EAbilities) => {
    if (playerStore.abilities.includes(ability))
      return true
    return false
  }

  // Change page
  const gotoStory = (pageId: number) => {
    if (mainStore.currentPageId === pageId) {
      mainStore.setBattlestate(EBattleStates.chooseOpponent)
    } else {
      mainStore.setCurrentPageId(pageId)
    }
  }

  const handleCounterGoto = () => {
    mainStore.battleRoundCounter = 1
    gotoStory(opponentStore.counterGoto as number)
  }
</script>

<template>
  <!-- Special case for opponents that has to befeated before a certain count -->
  <ul v-if="opponentStore.counter && opponentStore.counter < mainStore.battleRoundCounter">
    <li>
      <a
        href="#"
        :title="'Story ' + opponentStore.counterGoto"
        @click="handleCounterGoto()"
      >
        Du lyckades inte besegra {{ opponentStore.opponents[0].name }} innan runda {{ opponentStore.counter }}
      </a>
    </li>
  </ul>
  <!-- Normal case-->
  <ul
    v-else-if="choicesTexts"
    class="choices"
  >
    <li v-if="!pageStore.choices?.length || playerStore.attributes.hp === 0">
      <a
        href="#"
        @click="gotoStory(1)"
      >Du är död. Börja om?</a>
    </li>
    <li
      v-for="(choice, index) in pageStore.choices"
      v-else
      :key="choice.goto"
      class="choice"
    >
      <!-- If player has ability OR choice has no ability dependence -->
      <a
        v-if="!choice.ability || hasAbility(choice.ability)"
        href="#"
        :title="'Story ' + choice.goto"
        @click="gotoStory(choice.goto)"
      >
        {{ choicesTexts[index] }}
        <span v-if="choice.ability">({{ abilityTexts[choice.ability] }})</span>
      </a>

      <!-- Player lacks ability -->
      <span
        v-else
        class="non-active-link"
        title="Du saknar denna förmåga"
      >
        {{ choicesTexts[index] }} ({{ abilityTexts[choice.ability] }})
      </span>
    </li>
  </ul>
</template>

<style lang="scss">
.choice {
  margin-bottom: 0.5em;

  @media screen and (max-width: 600px) {
    margin: 1.3rem 0;
  }

  a {
    color: #1967dd;
  }

  .non-active-link {
    color: #aaa;
  }
}
</style>