<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { storeToRefs } from "pinia"

  const { savedData } = storeToRefs(useMainStore())
</script>

<template>
  <section class="saved-info">
    <div class="wrapper">  
      <span v-if="savedData">Ditt data är sparat.</span>
      <span v-else>Ditt spel är INTE sparat</span>
      <a href="mailto:ansbar@gmail.com?subject=Soloäventyr">Kontakt</a>
    </div>
  </section>
</template>

<style lang="scss">
  .saved-info {
    background-color: #fff;
    width: 100%;
    border-top: 2px solid #ddd;
    position: fixed;
    bottom: 0;
    color: #bbb;

    .wrapper {
      display: flex;
      justify-content: space-between;
    }

    @media screen and (max-width: 600px) {

    }
  }

  select {
    margin: 0 auto;
  }
</style>