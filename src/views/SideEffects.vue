<script lang="ts" setup>
  import { useTextStore } from "../stores/textStore"
  import { usePageStore } from "../stores/pageStore"

  const pageStore = usePageStore()
  const textStore = useTextStore()
</script>

<template>
  <section class="card side-effects">
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
            {{ textStore.items[key] }} 
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
            {{ textStore.attributes[key] }} {{ (value && value > 0) ? "+" : "" }}{{ value }} 
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
            {{ textStore.temporary[key] }} {{ (value && value > 0) ? "+" : "" }}{{ value }} 
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
            {{ textStore.modifiers[key] }} {{ (value && value > 0) ? "+" : "" }}{{ value }} 
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
            {{ textStore.abilities[key] }} {{ value ? "har lagts till" : "har tagits bort" }}
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