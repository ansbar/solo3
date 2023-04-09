<script lang="ts" setup>
  import { storeToRefs } from "pinia"
  import { usePageStore } from "../stores/pageStore"
  import { useMainStore } from "../stores/mainStore"

  const { image } = storeToRefs(usePageStore())
  const { currentPageId } = storeToRefs(useMainStore())

  const getImageUrl = () => {
    return new URL(`../assets/images/${currentPageId.value}.png`, import.meta.url).href
  }
</script>

<template>
  <img
    v-if="image"
    :src="getImageUrl()"
  >
</template>

<style lang="scss">
  img { 
    margin-bottom: 20px;
  }
</style>