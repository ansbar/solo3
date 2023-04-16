<script lang="ts" setup>
  import { EBattleStates } from "@/assets/enums"
  import { useMainStore } from "@/stores"

  const mainStore = useMainStore()
</script>

<template>
  <div>
    <h1>Tigerns väg - Hämnaren</h1>
    <h2 class="red">
      Beta 0.1
    </h2>
    <div class="text small">
      Copyright Mark Smith & Jamie Thomson 1985<br>
      Illustreringar av Bob Harvey<br>
      Översatt av Gunilla Jonsson 1986<br>
      Svensk copyright Äventyrsspel 1986
    </div>

    <div class="text">
      Detta är en portad version av boken Hämnaren från 1985. 
      Reglerna fungerar enligt originalet och upplevelsen är därför utmanande. 
      Det kommer krävas många försök innan du kommer nära att slutföra äventyret.
    </div>

    <div class="text red">
      Ungefär 40% av innehållet är portat för tillfället så det går inte att spela klart äventyret.
      Om du hittar buggar, har feedback om något eller vill hjälpa till med översättning till andra språk så finns kontaktuppgifter i botten.
    </div>    
   
    <section class="card">
      <div>
        <h4>Spara</h4>
        Ditt spel sparas automatiskt i webbläsarens minne under förutsättning att:
        <ul>
          <li>du är utanför strid</li>
          <li>sidan inte har några sidoeffekter (som att få kroppspoäng)</li>
          <li>inga tärningsslag sker (som Ödesslag) </li>
        </ul>
        Längst ner på sidan står det ifall spelet är sparat eller inte. 
      </div>
    </section>
  </div>

  <button @click="mainStore.setBattlestate(EBattleStates.none)">
    Välj färdigheter
  </button>
</template>

<style lang="scss">
  .red {
    color: red
  }
</style>