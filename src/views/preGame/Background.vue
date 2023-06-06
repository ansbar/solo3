<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { languageTexts } from "@/assets/languages/swedish"

  const mainStore = useMainStore()
</script>

<template>
  <div>
    <h1>Bakgrund</h1>    

    <div class="text">
      {{ languageTexts.background1 }}
    </div>
    <div class="text">
      {{ languageTexts.background2 }}
    </div>
    <div class="text">
      {{ languageTexts.background3 }}
    </div>
    <div class="text">
      {{ languageTexts.background4 }}
    </div>
    
    <h3>NINJA NO CHIGIRI</h3>
    <div class="text italic">
      {{ languageTexts.background5 }}
    </div>
    
    <div class="text">
      {{ languageTexts.background6 }}
    </div>
  </div>
  <p>
    <button @click="mainStore.mainPage = 'setup'">
      Skapa din karaktär
    </button>
  </p>
</template>