<script lang="ts" setup>
  import { usePersistantStore, useMainStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"
  import { storeToRefs } from "pinia"  

  const { language } = storeToRefs(usePersistantStore())
  const { mainPage } = storeToRefs(useMainStore())
  const { getImageUrl } = useGeneric()

  const persistantStore = usePersistantStore()

  const books = {
    "avenger": ["swedish"],
    //"destroyer": ["english", "swedish"]
  }

</script>

<template>
  <div class="center">
    <img
      :src="getImageUrl('tiger', true)"
    >
    <br>
    <h1>The Way of the Tiger</h1>
    <h3>Online solo adventure</h3>
    <br>
    <div class="books">
      <img
        v-for="(key, book) in books"
        :key="book"
        class="cover"
        :class="{ selected: persistantStore.book === book }"
        :src="getImageUrl(book, true)"
        @click="persistantStore.book = book"
      >
    </div>

    <section v-if="persistantStore.book">
      <select v-model="language">
        <option
          value="none" selected disabled
        >
          Choose language
        </option>
        <option
          v-for="lang in books[persistantStore.book]"
          :key="lang"
          :value="lang"
        >
          {{ lang }}
        </option>
      </select>
    </section>

    <br>
    <button v-if="persistantStore.book && persistantStore.language !== 'none'" @click="mainPage = 'intro'">
      Start
    </button>
  </div>
</template>


<style lang="scss">
  .center {
    margin-top: 20px;
    & > * {
      display: block;
      margin: 0 auto;
      text-align: center;
    }
  }
  .cover {
    border: 3px solid white;
    border-radius: 5px;
    height: 150px;
    margin: 10px 10px 0;
    cursor: pointer;

    @media screen and (min-width: 600px) {
      height: 250px;
    }  

    &:hover, &.selected {
      border: 3px solid black;      
    }
  }
  .books {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
  }
</style>