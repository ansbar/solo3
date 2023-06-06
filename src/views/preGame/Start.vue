<script lang="ts" setup>
  import { useMainStore } from "@/stores"
  import { useGeneric } from "@/utils/generic"

  const { getImageUrl } = useGeneric()
  const mainStore = useMainStore()
</script>

<template>
  <section class="center">
    <img
      :src="getImageUrl('tiger', true)"
    >
    <br>
    <h1>The Way of the Tiger</h1>
    <br>
    <div class="text small">
      <b>COPYRIGHT</b><br>
      Mark Smith & Jamie Thomson 1985<br>
      Illustations by Bob Harvey<br>
      Scan & PDF Gothmog
    </div>
    <br>
    <h4>Choose book</h4>
        
    <div class="books">
      <a href="javascript:void(0);" @click="mainStore.mainPage = 'intro'">
        <img
          class="cover"
          :src="getImageUrl('cover')"
        ></a>
    </div>
  </section>
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
    border: 5px solid white;
    border-radius: 5px;
    height: 150px;
    margin: 10px 0 0;

    @media screen and (min-width: 600px) {
      height: 250px;
    }  

    &:hover {
      border: 5px solid black;      
    }
  }
  .books {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>