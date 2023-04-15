<script lang="ts" setup>
  import { useMainStore, usePlayerStore, useTextStore, usePageStore } from "@/stores"
  import { ref } from "vue"
  import { useDice } from "@/utils/dice"
  import { EPlayerModifiers } from "@/assets/enums"
  import { EOpponents } from "@/assets/enums"

  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  const pageStore = usePageStore()
  const textStore = useTextStore()
  
  const dice = useDice()

  const isSuccess = ref()
  const resultText = ref("")

  const doRoll = () => {
    const condition = pageStore.specialCondition

    // Use fate defaults if no attack
    let attack = condition?.attack || "2T6"
    let defense = condition?.defense || 6 // Faith rolls need to be seven or above
    let modifier = 0

    if (condition?.type === "fate") {
      modifier = playerStore.modifiers["fate" as EPlayerModifiers]
    } else {
      modifier = playerStore.modifiers[condition?.modifier as EPlayerModifiers]
    }

    const roll = dice.doRoll(attack, modifier)
    isSuccess.value = condition?.type === "block" ? roll < defense : roll > defense

    resultText.value = `Du slår ${attack} och resultatet blir ${roll}.`
    if (condition?.type === "fate") {
      resultText.value += " Ett ödesslag behöver vara över 7.\n"
      resultText.value += `<b>Ödet ${isSuccess.value ? "ler mot dig!" : "vänder dig ryggen."}</b>`
    } else if (condition?.type === "block") {
      const opponentName = textStore.misc[condition?.opponent as EOpponents]
      resultText.value += ` Du har ${condition?.defense} i försvar.\n`
      resultText.value += `<b>${opponentName} träffar ${isSuccess.value ? "inte" : ""} dig.</b>`
    }else {
      const opponentName = textStore.misc[condition?.opponent as EOpponents]
      resultText.value += ` ${opponentName} har ${condition?.defense} i försvar.\n`
      resultText.value += `<b>Du träffar ${isSuccess.value ? "" : "inte"} ${opponentName.toLowerCase()}.</b>`
    }
  }

  const gotoPage = (success: boolean) => {
    mainStore.currentPageId = pageStore.choices?.[success ? 0 : 1].goto as number
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

    <ul>
      <li>
        <!-- First choice in page spec is for a successful roll -->
        <a
          v-if="isSuccess"
          href="#"
          @click="gotoPage(true)"
        >
          {{ textStore.page.choices?.[0] }}
        </a>
        <a
          v-else
          href="#"
          @click="gotoPage(false)"
        >
          {{ textStore.page.choices?.[1] }}
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  .side-effects {
    background-color: #c5d5da !important;
  }
</style>