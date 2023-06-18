<script lang="ts" setup>
  import { useMainStore, usePersistantStore } from "@/stores"
  import { storeToRefs } from "pinia"
  import { ref } from "vue"
  import RulesModal from "./modals/rulesModal.vue"

  const { currentPageId, currentModal } = storeToRefs(useMainStore())
  const { book } = storeToRefs(usePersistantStore())
  const mailTo = ref(`mailto:ansbar@gmail.com?subject=Soloäventyr&body=Gällande sida ${currentPageId.value} i boken ${book?.value}.`)
</script>

<template>
  <section class="bottom-bar">
    <div class="wrapper">  
      <a href="javascript:void(0);" @click="currentModal = 'rules'">Regler</a>

      <a :href="mailTo">Kontakt</a>
    </div>
  </section>
  <RulesModal />
</template>

<style lang="scss">
  .bottom-bar {
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
  }

  select {
    margin: 0 auto;
  }
</style>