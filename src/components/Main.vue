<script>
  import Card from './partials/Card.vue';
  // import Select from './partials/Select.vue';
  import {store} from '../assets/js/store';
  export default {
   name: 'Main',

   components: {
    Card, 
    // Select
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
      <div class="select">
        <select v-model="store.typeValue">
          <option value="">Select type</option>
          <option
            v-for="(type, index) of store.typeList"
            :key="index"
            :value="type"
          >{{ type }}</option>
        </select>

        <button>Search</button>
      </div>

      <div class="found">
        <span>Found {{ store.cardList.length }} cards</span>
      </div>

      <div class="row">
        <Card
          v-for="card in store.cardList"
          :key="card.id"
          :img="card.card_images[0].image_url"        
          :name="card.name"
          :type="card.type"
        />
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/partials/var' as *;
  @use '../assets/scss/partials/mixin' as *;

  main {
    @include flex;
    padding-bottom: 50px;
    background-color: $primary-color;

    .container {
      width: 90%;
      margin: 0 auto;

      .select {
        @include flex;
        padding: 20px;

        select {
          padding: 2px 5px;
          background-color: lightblue;
        }

        @include button;
      }

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