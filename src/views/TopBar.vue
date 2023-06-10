<script lang="ts" setup>
  import { useStorage } from "@/utils/storage"
  import { useMainStore } from "@/stores"
  import { storeToRefs } from "pinia"

  const { removeStoreFromStorage } = useStorage()
  const mainStore = useMainStore()
  const { savedData  } = storeToRefs(useMainStore())

  const confirmRestart = (total = true) => {
    if (confirm("Eventuell sparad speldata försvinner om du går vidare")) {
      removeStoreFromStorage("main")
      removeStoreFromStorage("player")
      mainStore.setSavedData(false)
      mainStore.mainPage = total ? "start" : "setup"
    }
  }
</script>

<template>
  <section class="top-bar">
    <div class="wrapper">  
      <span v-if="savedData">Ditt data är sparat.</span>
      <span v-else>Ditt spel är INTE sparat</span>
      <a href="javascript:void(0);" @click="confirmRestart()">Starta om</a>
      <a href="javascript:void(0);" @click="confirmRestart(true)">Ändra bok/språk</a>
    </div>
  </section>
</template>

<style lang="scss">
  .top-bar {
    background-color: #fff;
    width: 100%;
    border-bottom: 2px solid #ddd;
    position: sticky;
    top: 0;
    color: #bbb;

    .wrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  select {
    margin: 0 auto;
  }
</style>