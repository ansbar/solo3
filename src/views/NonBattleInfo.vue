<script lang="ts" setup>
  /* 
    * This is a component which displays basic player info and the option to use 
    * healing items outside battle 
   */
  
  import { computed } from "vue"
  import { usePlayerStore, useMainStore } from "@/stores"
  import { languageGeneral } from "@/assets/languages/swedish"
  import { useTexts } from "@/utils/texts"
  import mapModal from "./modals/mapModal.vue"
  import { TItems } from "@/assets/types"

  const playerStore = usePlayerStore()
  const mainStore = useMainStore()
  const { choicesTexts } = useTexts()

  interface Item {
    key: TItems,
    value: number
  }

  const nonBattleItems = {
    healingPotion: {
      key: "healingPotion",
      value: 10,
    },
    herbs: {
      key: "herbs",
      value: 8
    }
  } satisfies { [key: string]: Item }

  const itemsVisibleEvenAsEmpty = [ "flashPowder", "gold" ]

  const playerNonBattleItems = computed(() => {
    const list: Item[] = []
    Object.values(nonBattleItems).forEach(item => {      
      if (playerStore.items[item.key]) list.push(item)
    })
    return list
  })

  const useItem = (item: Item) => {
    playerStore.setPlayerItem({ item: item.key, amount: -1 })
    playerStore.setPlayerAttributeHp(item.value)
  } 
</script>

<template>
  <section class="card">
    <div class="first-col">
      <h4>Dina attribut</h4>
      Kroppspoäng: {{ playerStore.attributes.hp }} av {{ playerStore.attributes.hpMax }}<br>
      Inre kraft: {{ playerStore.attributes.innerForce }} av {{ playerStore.attributes.innerForceMax }} 
      <br>
      <h4>Färdigheter</h4>
      <ul>
        <li v-for="ability in playerStore.abilities" :key="ability" class="firstCapital">
          {{ languageGeneral.abilities[ability] }}<br>
        </li>
      </ul>     
    </div>
    <div class="second-col">
      <h4>Föremål</h4>
      <template v-for="amount, item in playerStore.items" :key="item">
        <div v-if="(itemsVisibleEvenAsEmpty[item as any] || playerStore.items[item])" class="firstCapital">
          {{ languageGeneral.items[item] }}: {{ amount }}<br>
        </div>
      </template>      
    </div>
    <div v-if="playerNonBattleItems.length" class="full-col">
      <h4>Använd något ur din packning:</h4>
      <ul v-if="choicesTexts">
        <li
          v-for="(item,) in playerNonBattleItems"
          :key="item.key"
        >
          <a
            v-if="playerStore.attributes.hp !== playerStore.attributes.hpMax"
            href="#"
            @click="useItem(item)"
          >
            Använd {{ languageGeneral.items[item.key] }}
          </a>
          <span
            v-else
            class="non-active-link"
            title="Du har redan fulla kroppspoäng"
          >
            Använd {{ languageGeneral.items[item.key] }}
          </span>
        </li>
      </ul>
    </div>
    <div class="full-col">
      <a href="javascript:void(0);" @click="mainStore.currentModal = 'map'">
        Karta över Orb
      </a>
    </div>
  </section>
  <mapModal />
</template>

<style lang="scss" scoped>
  .firstCapital::first-letter {
      text-transform: uppercase
  }

  .card {
    margin-top: 2rem;
    background-color: #f7f7f7;
    border: 2px dashed #ddd;

    h4 {
      &:first-child {
        margin-top: 0;
      }
      + ul {
        margin-top: 0
      }
      margin-bottom: 0.2rem;
    }

    .first-col {
      width: 42%;
      padding-right: 2rem;
    }
    .second-col {
      > div + div {
          margin-top: 0;
      }
    }
    .full-col {
      margin-top: 1.5rem;
      flex-basis: 100%;
    }
    
    @media screen and (max-width: 600px) {
      .first-col, .second-col {
        width: 100%;
        border: 0;
        padding: 0;
      }
      .second-col {
        margin-top: 1rem;
      }
    }
  }

  
</style>