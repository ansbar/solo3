<script lang="ts" setup>
  import { usePageStore } from "@/stores"
  import { useTexts } from "@/utils/texts"
  import { computed } from "vue"

  const hasActiveSideEffect = computed(() => {
    return !pageStore.sideEffects?.conditions || (pageStore.sideEffects.items || pageStore.sideEffects.abilities || pageStore.sideEffects.attributes || pageStore.sideEffects.modifiers || pageStore.sideEffects.temporary)
  })

  const pageStore = usePageStore()
  const { itemTexts, temporaryTexts, attributeTexts, modifierTexts, abilityTexts } = await useTexts()
</script>

<template>
  <section v-if="hasActiveSideEffect" class="card side-effects">
    <div>
      <div
        v-if="pageStore.sideEffects?.items"
        class="text"
      >
        Följande har ändrats i din packning:<br>
        <ul>
          <li
            v-for="(value, key) in pageStore.sideEffects?.items"
            :key="key"
          >
            {{ itemTexts[key] }} 
            <span v-if="typeof value === 'number'">
              {{ value > 0 ? "+" : "" }}{{ value }}
            </span>
            <span v-else>
              {{ value ? "har lagts till" : "har tagits bort" }}
            </span>
          </li>
        </ul>
      </div>

      <div
        v-if="pageStore.sideEffects?.attributes"
        class="text"
      >
        Följande attribut har justerats:<br>
        <ul>
          <li
            v-for="(value, key) in pageStore.sideEffects?.attributes"
            :key="key"
          >
            {{ attributeTexts[key] }} {{ (value && value > 0) ? "+" : "" }}{{ value }} 
          </li>
        </ul>
      </div>

      <div
        v-if="pageStore.sideEffects?.temporary"
        class="text"
      >
        Följande temporära värden har justerats:<br>
        <ul>
          <li
            v-for="(value, key) in pageStore.sideEffects?.temporary"
            :key="key"
          >
            {{ temporaryTexts[key] }} {{ (value && value > 0) ? "+" : "" }}{{ value }} 
          </li>
        </ul>
      </div>

      <div
        v-if="pageStore.sideEffects?.modifiers"
        class="text"
      >
        Följande värden har justerats:<br>
        <ul>
          <li
            v-for="(value, key) in pageStore.sideEffects?.modifiers"
            :key="key"
          >
            {{ modifierTexts[key] }} {{ (value && value > 0) ? "+" : "" }}{{ value }} 
          </li>
        </ul>
      </div> 

      <div
        v-if="pageStore.sideEffects?.abilities"
        class="text"
      >
        Följande färdigheter har justerats:<br>
        <ul>
          <li
            v-for="(value, key) in pageStore.sideEffects?.abilities"
            :key="key"
          >
            {{ abilityTexts[key] }} {{ value ? "har lagts till" : "har tagits bort" }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .side-effects {
    background-color: #c5d5da !important;
  }
</style>