<script lang="ts" setup>
  import { computed } from "vue"
  import { useMainStore, usePlayerStore, usePageStore } from "@/stores"
  import { useOpponentStore } from "@/stores/opponentStore"
  import { EAbilities, EAddedAbilities, EBattleStates, EDifficulty } from "@/assets/enums"
  import opponent from "@/assets/opponents"
  import { useGeneric } from "@/utils/generic"
  import { useTexts } from "@/utils/texts"
  import { IChoice } from "@/stores/pageInterfaces"
  import { pageData } from "@/assets/pages"

  const playerStore = usePlayerStore()
  const opponentStore = useOpponentStore()
  const pageStore = usePageStore()
  const mainStore = useMainStore()
  const { choicesTexts, abilityTexts, itemTexts, difficultyTexts } = useTexts()
  const generic = useGeneric()

  // Returns true if player  has the requested ability
  const hasAbility = (ability: EAbilities | EAddedAbilities) => {
    if (playerStore.abilities.includes(ability))
      return true
    return false
  }

  // Change page
  const gotoStory = (pageId: number) => {
    if (mainStore.currentPageId === pageId) {
      opponentStore.setOpponentPageData(opponent[pageStore.opponent!].pages[mainStore.currentPageId])
      mainStore.setBattlestate(EBattleStates.chooseOpponent)
    } else {
      mainStore.setCurrentPageId(pageId)
    }
  }

  // Checks if there is a condition for displaying the choice. Either an ability or an item
  const fulfillsChoiceCondition = (choice: IChoice) => {
    if (choice.ability) {
      return hasAbility(choice.ability)
    } else if (choice.item) {
      return playerStore.items[choice.item] >= (choice.amount || 1)
    } else if (choice.attribute) {
      return playerStore.attributes[choice.attribute] >= (choice.amount || 1)
    }  else if (choice.condition) {
      return playerStore.conditions[choice.condition]
    } 
    return true
  }

  // If a successful throw has been made and special choices exist, use them.
  // Otherwise use the normal choices
  const choices = computed(() => {
    if (mainStore.thrownOpponent !== undefined && pageStore.successfulThrowChoices) 
      return pageStore.successfulThrowChoices
    return pageStore.choices
  })

  const handleCounterGoto = () => {
    mainStore.battleRoundCounter = 1
    gotoStory(opponentStore.counterGoto as number)
  }

  const leadsToDeath = (page: number) => {
    if (mainStore.difficulty !== EDifficulty.medium || !pageData[page]) 
      return false
    return !pageData[page].choices?.length
  } 

  const endText = computed(() => {
    let text = "Du har klarat av äventyret HÄMNAREN på svårighetsgrad <b>"
    text += difficultyTexts.value[mainStore.difficulty] + "</b>.<br/>"

    switch (mainStore.difficulty) {
    case EDifficulty.medium:
      text += "Bra gjort! Försök igen på en högre svårighetsgrad för ett mer utmanade äventyr!"
      break
    case EDifficulty.hard:
      text += "Bra gjort!! Försök igen på den högsta svårighetsgraden för ett mer utmanade äventyr!"
      break    
    case EDifficulty.veryHard:
      text += "Djupt imponerande! Hur många försök krävdes det för att klara äventyret? Bara att invänta nästa bok, FÖRGÖRAREN!"
      break
    }
    return text
  })
</script>

<template>
  <!-- Special case for opponents that has to be defeated before a certain count -->
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
    v-else
    class="choices"
  >
    <li v-if="pageStore.endPage">
      <span v-html="endText" />
    </li>
    <li v-else-if="!pageStore.choices?.length || playerStore.attributes.hp === 0">
      <a
        href="#"
        class="red"
        @click="generic.doStartOver()"
      >Du har misslyckats. Börja om?</a>
    </li>
    <li
      v-for="(choice, index) in choices"
      v-else-if="choicesTexts"
      :key="choice.goto"
      class="choice"
    >
      <!-- If no condition exists or if player fulfills condition -->
      <a
        v-if="fulfillsChoiceCondition(choice)"
        href="#"
        :title="'Story ' + choice.goto"
        @click="gotoStory(choice.goto)"
      >
        {{ choicesTexts[index] }}
        <span v-if="choice.ability">({{ abilityTexts[choice.ability] }})</span>
        <span v-if="choice.item">({{ itemTexts[choice.item] }})</span>
        <span
          v-if="leadsToDeath(choice.goto)"
          style="color: gray"
        > (Valet leder till döden)</span>
      </a>

      <!-- Player lacks ability -->
      <span
        v-else
        class="non-active-link"
        title="Du saknar denna förmåga eller föremål"
      >
        {{ choicesTexts[index] }} 
        <span v-if="choice.ability">({{ abilityTexts[choice.ability] }})</span>
        <span v-if="choice.item">({{ itemTexts[choice.item] }})</span>
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