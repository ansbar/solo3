<script lang="ts" setup>
  import { useGeneric } from "@/utils/generic"
  import Modal from "@/utils/modal.vue"

  const { getImageUrl } = useGeneric()
</script>


<template>
  <Modal active-modal="map">
    <img
      :src="getImageUrl('map')"
    >
  </Modal>
</template>