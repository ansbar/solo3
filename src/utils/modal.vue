<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { EModals } from "@/assets/enums"
  import { PropType, onMounted, watch } from "vue"

  defineProps({
    activeModal: {
      type: String as PropType<EModals>,
      default: EModals.none
    }
  })

  onMounted(() => {
    document.addEventListener("keyup", function(e) {
      if(e.key === "Escape") mainStore.closeModal()
    })
  })

  const mainStore = useMainStore()

  watch(() => mainStore.currentModal, (_currentModal) => {
    if (_currentModal === EModals.none) document.documentElement.style.overflow = "auto"
    else document.documentElement.style.overflow = "hidden"
  })
</script>


<template>
  <div v-if="mainStore.currentModal === activeModal" class="modal">
    <div class="modal-inner">
      <div class="modal-header">
        <span class="close-button" @click="mainStore.closeModal">×</span>
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.modal {
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-inner {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 68px);
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  max-height: calc(100% - 52px);  

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 140px);
    width: auto;
    max-width: 800px;
  }
}

.modal-content {
  overflow-y: auto;      
  height: 94vh;

  @media screen and (min-width: 600px) {
    height: auto;
    max-height: 84vh;
  }
}

.close-button {
  position: fixed;
  right: 22px;
  width: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: lightgray;
}

.close-button:hover {
  background-color: darkgray;
}
</style>