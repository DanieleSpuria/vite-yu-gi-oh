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
            offset: store.offsetCard
          }
        })
        .then(result => {
          store.cardList = result.data.data;
          store.load = true
        })

      }
    },

    mounted() {
      this.getApi()
    }
  }
</script>

<template>
  <Header/>
  <Main/>
  <Footer @nextPrevOffset="getApi()"/>
</template>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
