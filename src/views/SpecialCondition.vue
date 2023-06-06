<script lang="ts" setup>
  import { useMainStore, usePlayerStore, usePageStore } from "@/stores"
  import { ref } from "vue"
  import { useDice } from "@/utils/dice"
  import { useTexts } from "@/utils/texts"
  import { TCondition, TOpponents, TPlayerModifiers } from "@/assets/types"
  import { satisfies } from "semver"

  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  const pageStore = usePageStore()
  const { opponentTexts, choicesTexts } = useTexts()
  
  const dice = useDice()

  const isSuccess = ref()
  const resultText = ref("")
  const condition = pageStore.specialCondition
  let roll = ref()

  const doRoll = () => {
    // Use fate defaults if no attack
    let attack = condition?.attack || "2T6"
    let defense = condition?.defense || 6 // Faith rolls need to be seven or above
    let modifier = 0

    // FIXME
    if (condition?.type === "fate") {
      modifier = playerStore.modifiers["fate"]
    } else {
      modifier = playerStore.modifiers[condition?.modifier as TPlayerModifiers]
    }

    roll.value = dice.doRoll("Slag", attack, modifier)

    isSuccess.value = condition?.type === "block" ? roll.value < defense : roll.value > defense

    resultText.value = `Du slår ${attack} och resultatet blir ${roll.value}.`
    if (condition?.type === "fate") {
      resultText.value += " Ett ödesslag behöver vara över 7.\n"
      resultText.value += `<b>Ödet ${isSuccess.value ? "ler mot dig!" : "vänder dig ryggen."}</b>`
    } else if (condition?.type === "block") {
      const opponentName = opponentTexts.value[condition?.opponent as TOpponents]
      resultText.value += ` Du har ${condition?.defense} i försvar.\n`
      resultText.value += `<b>${opponentName} träffar ${isSuccess.value ? "inte" : ""} dig.</b>`
    } else if (condition?.type !== "roll") {
      const opponentName = opponentTexts.value[condition?.opponent as TOpponents]
      resultText.value += ` ${opponentName} har ${condition?.defense} i försvar.\n`
      resultText.value += `<b>Du lyckas${isSuccess.value ? "!" : " inte."}</b>`
    }
  }

  const gotoPage = (i: number) => {
    mainStore.currentPageId = pageStore.choices?.[i].goto as number
  }
</script>

<template>
  <section
    v-if="isSuccess === undefined"
    class="special-condition"
  >
    <button      
      class="cta"
      @click="doRoll()"
    >
      Slå slaget
    </button>      
  </section>
  <section v-else>
    <div class="battle">
      <div
        class="text"
        v-html="resultText"
      />
    </div>

    <ul v-if="condition?.type !== 'roll'">
      <li>
        <!-- First choice in page spec is for a successful roll -->
        <a
          v-if="isSuccess"
          href="#"
          @click="gotoPage(0)"
        >
          {{ choicesTexts?.[0] }}
        </a>
        <a
          v-else
          href="#"
          @click="gotoPage(1)"
        >
          {{ choicesTexts?.[1] }}
        </a>
      </li>
    </ul>
    <ul v-else>
      <template v-for="(r, i) in condition.rolls" :key="i">
        <li v-if="roll >= r[0] && roll <= r[1]">        
          <a         
            href="#"
            @click="gotoPage(i)"
          >
            {{ choicesTexts?.[i] }}
          </a>        
        </li>
      </template>      
    </ul>
  </section>
</template>

<style lang="scss">
  .side-effects {
    background-color: #c5d5da !important;
  }
</style>