<script lang="ts" setup>
  import { storeToRefs } from "pinia"
  import { useTextStore } from "../stores/textStore"

  const { page } = storeToRefs(useTextStore())
</script>

<template>
  <div class="main-text">
    {{ page.mainText }}
  </div>
</template>

<style lang="scss">
  .main-text {
    white-space: pre-line;
    margin-bottom: 1em;
  }
</style>