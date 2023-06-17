<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"
  import { useTexts } from "@/utils/texts"
  
  const { getImageUrl } = useGeneric()
  const mainStore = useMainStore()

  const { introTexts } = await useTexts()
</script>

<template>
  <div>   
    <img
      :src="getImageUrl('cover')"
    >
    <h1>{{ introTexts.title }}</h1>
    <div class="text small">
      Copyright Mark Smith & Jamie Thomson 1985<br>
      Illustreringar av Bob Harvey<br>
      Översatt av Gunilla Jonsson 1986<br>
      Svensk copyright Äventyrsspel 1986<br>
      Scan & PDF Gothmog
    </div>
    
    <div class="text">
      Detta är en portad version av boken Hämnaren från 1985. 
      Reglerna fungerar enligt originalet och upplevelsen är därför utmanande. 
      Det kommer krävas många försök innan du kommer nära att slutföra äventyret.
    </div>

    <div class="text small">
      <b>Betaversion 0.9.3</b><br>Allt innehåll är portat men det finns sannolikt en del buggar kvar. Om du hittar några, har feedback om något eller vill hjälpa till med översättning till andra språk så finns kontaktuppgifter i botten =)
    </div>    
   
    <section class="card">
      <div>
        <h4>Spara</h4>
        Om du vill ta en paus i spelet så är det möjligt under följande förutsättningar:
        <ul>
          <li>du är utanför strid</li>
          <li>sidan inte har några sidoeffekter (som att få kroppspoäng)</li>
          <li>inga tärningsslag sker (som Ödesslag) </li>
        </ul>
        högst upp på sidan står det ifall spelet är sparat eller inte. <br>        
        Ditt spel sparas automatiskt i webbläsarens minne.
      </div>
    </section>
  </div>

  <button @click="mainStore.mainPage = 'background'">
    Bakgrund
  </button>

  <button @click="mainStore.mainPage = 'setup'">
    Skapa din karaktär
  </button>
</template>