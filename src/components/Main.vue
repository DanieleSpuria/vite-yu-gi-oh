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
  <main>
    <div class="container">
      <Card
        v-for="card in store.cardList"
        :key="card.id"
        :img="card.card_images[0].image_url"        
        :name="card.name"
        :archetype="card.archetype"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/general/var' as *;

  main {
    padding: 50px 0;
    background-color: $primary-color;

    .container {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      padding: 30px;
      background-color: white;
    }
  }
</style>