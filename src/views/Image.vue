<script lang="ts" setup>
  import { storeToRefs } from "pinia"
  import { usePageStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"

  const { image } = storeToRefs(usePageStore())  
  const { getImageUrl } = useGeneric()
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