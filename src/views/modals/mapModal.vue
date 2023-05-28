<script lang="ts" setup>
  import { useGeneric } from "@/utils/generic"
  import Modal from "@/utils/modal.vue"
  import { EModals } from "@/assets/enums"

  const { getImageUrl } = useGeneric()
</script>


<template>
  <Modal :active-modal="EModals.map">
    <img
      :src="getImageUrl('map')"
    >
  </Modal>
</template>