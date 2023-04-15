<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { storeToRefs } from "pinia"  
  import { languagePages } from "@/assets/languages/swedish"

  const { currentPageId } = storeToRefs(useMainStore())
</script>

<template>
  <section class="dev">
    <div class="wrapper">  
      <select v-model="currentPageId">
        <option
          v-for="(page, index) in languagePages"
          :key="page.mainText"
          :value="index"
        >
          Gå till {{ index }}
        </option>
      </select>
    </div>
  </section>
</template>

<style lang="scss">
  .dev {
    width: 100%;
    padding: 20px 0;
    border-bottom: 2px solid #ddd;
  }

  select {
    margin: 0 auto;
  }
</style>