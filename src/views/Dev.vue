<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { storeToRefs } from "pinia"  

  const { currentPageId } = storeToRefs(useMainStore())
</script>


<template>
  <section class="dev">
    <div class="wrapper">  
      <select v-model="currentPageId">
        <option
          v-for="i in 420"
          :key="i"
          :value="i"
        >
          Gå till {{ i }}
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

    @media screen and (max-width: 600px) {
      padding: 0
    }
  }

  select {
    margin: 0 auto;
  }
</style>