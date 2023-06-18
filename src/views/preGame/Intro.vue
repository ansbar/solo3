<script lang="ts" setup>
  import { useMainStore, usePersistantStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"
  import { useTexts } from "@/utils/texts"
  
  const { getImageUrl } = useGeneric()
  const mainStore = useMainStore()
  const persistantStore = usePersistantStore()
  const versionNumber = "1.0.0"

  const { introTexts, headingTexts } = await useTexts()
</script>

<template>
  <div>   
    <img :src="getImageUrl('cover')">

    <h1>{{ introTexts.title }}</h1>

    <div class="text small">
      {{ introTexts.copyright }}<br>
      {{ introTexts.illustratedBy }} <br>
      {{ introTexts.translatedBy }}<br>
      {{ introTexts.localCopyRight }}<br>
      {{ introTexts.scan }}
    </div>
    
    <div class="text">
      {{ introTexts.booksInfo }}
    </div>

    <div class="text small" :class="{ red: persistantStore.book === 'assassin' }">
      <b>Version {{ versionNumber }}</b><br>
      {{ introTexts.versionInfo }}
    </div>
    <section class="card">
      <div v-html="introTexts.saveInfo" />
    </section>
  </div>

  <button @click="mainStore.mainPage = 'background'">
    {{ headingTexts.background }}
  </button>

  <button @click="mainStore.mainPage = 'setup'">
    {{ headingTexts.createCharacter }}
  </button>
</template>