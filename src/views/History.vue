<script setup lang="ts">
  import { useMainStore } from "../stores/mainStore"

  const mainStore = useMainStore()

</script>

<template>
  <aside class="card history">
    <div>
      <h3>Detaljerad logfil</h3>
      <ul>
        <li
          v-for="(history, index) in mainStore.history"
          :key="index"
          :style="index > 0 ? '' : 'font-weight: bold'"
        >
          {{ history }}
        </li>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss">
  .history {
    min-width: 200px;
    max-width: 340px;
    padding-right: 1rem !important;
    position: absolute;
    top: 300px;
    right: -5px;
    max-height: 300px;
    overflow: auto;
    font-size: 14px;
    font-family: monospace;
  }
</style>