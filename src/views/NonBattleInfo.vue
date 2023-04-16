<script lang="ts" setup>
  /* 
    * This is a component which displays basic player info and the option to use 
    * healing items outside battle 
   */
  
  import { computed } from "vue"
  import { EItems } from "@/assets/enums"
  import { usePlayerStore } from "@/stores"
  import { languageGeneral } from "@/assets/languages/swedish"
  import { useTexts } from "@/utils/texts"

  const playerStore = usePlayerStore()
  const { choicesTexts } = useTexts()

  interface Item {
    key: EItems,
    value: number
  }

  const nonBattleItems = {
    healingPotion: {
      key: EItems.healingPotion,
      value:10,
    },
    herbs: {
      key: EItems.herbs,
      value: 8
    }
  } satisfies { [key: string]: Item }


  const playerNonBattleItems = computed(() => {
    const list: Item[] = []
    Object.values(nonBattleItems).forEach(item => {
      if (playerStore.items[item.key]) list.push(item)
    })
    return list
  })

  const useItem = (item: Item) => {
    playerStore.togglePlayerItem({ item: item.key, toggle: false })
    playerStore.setPlayerAttributeHp(item.value)
  }
</script>

<template>
  <section class="card">
    <div>
      <h4>Hämnaren (du)</h4>
      Du har {{ playerStore.attributes.hp }} av {{ playerStore.attributes.hpMax }} kroppspoäng.
      <template v-if="playerNonBattleItems.length">
        <h4>Använd något ur din packning:</h4>
        <ul
          v-if="choicesTexts"
          class="choices"
        >
          <li
            v-for="(item,) in playerNonBattleItems"
            :key="item.key"
            class="choice"
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
      </template>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .card {
    margin-top: 2rem;
    background-color: #f7f7f7;
    border: 2px dashed #ddd;

    h4 {
      &:first-child {
        margin-top: 0;
      }
      
      margin-bottom: 0.5rem;
    }
  }
</style>