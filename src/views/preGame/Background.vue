<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { useTexts } from "@/utils/texts"

  const { backgroundTexts, headingTexts } = await useTexts()
  const mainStore = useMainStore()
</script>

<template>
  <div>
    <h1>{{ headingTexts.background }}</h1>    

    <div class="text">
      {{ backgroundTexts?.b1 }}
    </div>
    <div class="text">
      {{ backgroundTexts?.b2 }}
    </div>
    <div class="text">
      {{ backgroundTexts?.b3 }}
    </div>
    <div class="text">
      {{ backgroundTexts?.b4 }}
    </div>
    
    <h3>NINJA NO CHIGIRI</h3>
    <div class="text italic">
      {{ backgroundTexts?.b5 }}
    </div>
    
    <div class="text">
      {{ backgroundTexts?.b6 }}
    </div>
  </div>
  <p>
    <button @click="mainStore.mainPage = 'setup'">
      {{ headingTexts.createCharacter }}
    </button>
  </p>
</template>