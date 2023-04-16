<script lang="ts" setup>
  import { useTexts } from "@/utils/texts"

  const { mainText } = useTexts()
</script>

<template>
  <div class="main-text">
    {{ mainText }}
  </div>
</template>

<style lang="scss">
  .main-text {
    line-height: 1.4;
    white-space: pre-line;
    margin-bottom: 1em;
  }
</style>