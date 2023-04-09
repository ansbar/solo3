<script lang="ts" setup>
  import { useMainStore } from "../stores/mainStore"
  import { usePlayerStore } from "../stores/playerStore"
  import { useTextStore } from "../stores/textStore"
  import { usePageStore } from "../stores/pageStore"
  import { EAbilities, EBattleStates } from "../assets/enums"

  const playerStore = usePlayerStore()
  const pageStore = usePageStore()
  const textStore = useTextStore()
  const mainStore = useMainStore()

  // Returns true if player  has the requested ability
  const hasAbility = (ability: EAbilities) => {
    if (playerStore.abilities.includes(ability))
      return true
    return false
  }

  // Change page
  const gotoStory = (pageId: number) => {
    if (mainStore.currentPageId === pageId) {
      mainStore.setBattlestate (EBattleStates.innerStrength)
    } else {
      mainStore.setCurrentPageId(pageId)
    }
  }
</script>

<template>
  <ul
    v-if="textStore.page.choices"
    class="choices"
  >
    <li
      v-for="(choice, index) in pageStore.choices"
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
        {{ textStore.page.choices[index] }}
        <span v-if="choice.ability">({{ textStore.abilities[choice.ability] }})</span>
      </a>

      <!-- Player lacks ability -->
      <span
        v-else
        class="non-active-link"
        title="Du saknar denna förmåga"
      >
        {{ textStore.page.choices[index] }} ({{ textStore.abilities[choice.ability] }})
      </span>
    </li>

    <li v-if="!pageStore.choices?.length">
      <a
        href="#"
        @click="gotoStory(1)"
      >Du är död. Börja om?</a>
    </li>
  </ul>
</template>

<style lang="scss">
.choice {
  margin-bottom: 0.5em;

  a {
    color: #1967dd;
  }

  .non-active-link {
    color: #aaa;
  }
}
</style>