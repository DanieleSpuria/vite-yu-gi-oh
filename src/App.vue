<script>
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import {store} from './assets/js/store';
  import axios from 'axios';
  export default {
    name: 'App',

    components: {
      Header,
      Main
    }, 
   
    data() {
      return {
        store
      }
    },

    methods: {
      getApi() {
        axios.get(store.api)
        .then(result => {
          store.cardList = result.data.data
          console.log(store.cardList);
          store.load = true
          console.log(store.load);
        })

      }
    },

    mounted() {
      this.getApi()
      console.log(store.load);
    }
  }
</script>

<template>
  <Header/>
  <Main/>
</template>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
