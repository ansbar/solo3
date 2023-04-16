<script lang="ts" setup>
  import { storeToRefs } from "pinia"
  import { useTextStore } from "@/stores"

  const { page } = storeToRefs(useTextStore())
</script>

<template>
  <div class="main-text">
    {{ page.mainText }}
  </div>
</template>

<style lang="scss">
  .main-text {
    line-height: 1.4;
    white-space: pre-line;
    margin-bottom: 1em;
  }
</style>