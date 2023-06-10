<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"
  import { storeToRefs } from "pinia"  

  const { language } = storeToRefs(useMainStore())
  const { getImageUrl } = useGeneric()

  const mainStore = useMainStore()

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
    <h4>Choose book</h4>     

    <div class="books">
      <img
        v-for="(key, book) in books"
        :key="book"
        class="cover"
        :class="{ selected: mainStore.book === book }"
        :src="getImageUrl(book, true)"
        @click="mainStore.book = book"
      >
    </div>

    <section v-if="mainStore.book">
      <h4>And language</h4>
      <select v-model="language">
        <option
          v-for="lang in books[mainStore.book]"
          :key="lang"
          :value="lang"
        >
          {{ lang }}
        </option>
      </select>
    </section>

    <br>
    <button v-if="mainStore.book && mainStore.language" @click="mainStore.mainPage = 'intro'">
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