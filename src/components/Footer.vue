<script>
  import {store} from '../assets/js/store';
  export default {
    name: 'Footer',

    data() {
      return {
        store
      }
    },

    methods: {
      nextPrev(value) {
        store.offsetCard += value;
        this.$emit ('nextPrevOffset')
      }
    }
  }
</script>

<template>
  <footer>
    <button @click="nextPrev(-store.numCard)" v-if="store.offsetCard">PREV</button>
    <button @click="nextPrev(store.numCard)">NEXT</button>
  </footer>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/partials/mixin' as *;

  footer {
    @include flex;
    padding: 20px;

    button {
      margin: 0 10px;
      padding: 2px 5px;
      background-color: lightblue;
    }
  }
</style>