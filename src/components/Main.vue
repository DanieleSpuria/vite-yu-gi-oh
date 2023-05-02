<script>
  import Card from './partials/Card.vue';
  import {store} from '../assets/js/store';
  export default {
   name: 'Main',

   components: {
    Card
   },

   data() {
    return {
      store
    }
   }
  }
</script>

<template>
  <main :class="{'vh' : !store.load}">
    <h2 v-if="!store.load">Loading...</h2>
    <div
    class="container"
    v-else
    >
      <div class="found">
        <span>Found {{ store.cardList.length }} cards</span>
      </div>

      <div class="row">
        <Card
          v-for="card in store.cardList"
          :key="card.id"
          :img="card.card_images[0].image_url"        
          :name="card.name"
          :archetype="card.archetype"
        />
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/general/var' as *;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    background-color: $primary-color;

    .container {
      width: 90%;
      margin: 0 auto;

      .found {
        padding: 20px;
        color: white;
        background-color: #212529;
      }
      
      .row {
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
        background-color: white;
      }
    }

    h2 {
      color: black;
    }
  }

  .vh {
    height: 100vh;
  }
</style>