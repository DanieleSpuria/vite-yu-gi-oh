<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import {store} from './assets/js/store';
  import axios from 'axios';
  export default {
    name: 'App',

    components: {
      Header,
      Main,
      Footer
    }, 
   
    data() {
      return {
        store
      }
    },

    methods: {
      getApi() {
        axios.get(store.api, {
          params: {
            num: store.numCard,
            offset: store.offsetCard,
            type: store.typeValue
          }
        })
        .then(result => {
          store.cardList = result.data.data;
          store.load = true;
        }),

        axios.get(store.api)
        .then(result => {
          result.data.data.forEach(card => {
            if (!store.typeList.includes(card.type)) store.typeList.push(card.type);
          })
        })
      },

      search() {
        store.offsetCard = 0;
        this.getApi()
      },

      reset() {
        store.typeValue = null
        this.getApi()
      }
    },

    mounted() {
      this.getApi();
    }
  }
</script>

<template>
  <Header/>
  <Main @search="search()" @reset="reset()"/>
  <Footer @nextPrevOffset="getApi()"/>
</template>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
