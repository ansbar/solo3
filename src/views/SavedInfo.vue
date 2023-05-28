<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { storeToRefs } from "pinia"
  import { ref } from "vue"
  import RulesModal from "./modals/rulesModal.vue"
  import { EModals } from "@/assets/enums"

  const { savedData, currentPageId, currentModal } = storeToRefs(useMainStore())
  const mailTo = ref(`mailto:ansbar@gmail.com?subject=Soloäventyr&body=Gällande sida ${currentPageId.value}`)
</script>

<template>
  <section class="saved-info">
    <div class="wrapper">  
      <span v-if="savedData">Ditt data är sparat.</span>
      <span v-else>Ditt spel är INTE sparat</span>

      <a href="javascript:void(0);" @click="currentModal = EModals.rules">Regler</a>

      <a :href="mailTo">Kontakt</a>
    </div>
  </section>
  <RulesModal />
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
  }

  select {
    margin: 0 auto;
  }
</style>