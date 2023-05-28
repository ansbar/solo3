<script lang="ts" setup>
  import { EBattleStates } from "@/assets/enums"
  import { useMainStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"

  const { getImageUrl } = useGeneric()
  const mainStore = useMainStore()
</script>

<template>
  <div>
    <h1>Tigerns väg - soloäventyr</h1>
    
    <h2 class="red">
      Beta 0.7.0
    </h2>
    <img
      :src="getImageUrl()"
    >
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

    <div class="text red">
      Allt innehåll är portat men det finns fortfarande en hel del buggar så det finns en risk att äventyret inte kan spelas klart.
      Om du hittar buggar, har feedback om något eller vill hjälpa till med översättning till andra språk så finns kontaktuppgifter i botten =)
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
        Längst ner på sidan står det ifall spelet är sparat eller inte. <br>        
        Ditt spel sparas automatiskt i webbläsarens minne.
      </div>
    </section>
  </div>

  <button @click="mainStore.setBattlestate(EBattleStates.none)">
    Starta din karaktär
  </button>
</template>