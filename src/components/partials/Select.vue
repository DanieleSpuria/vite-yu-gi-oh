<script>
  import {store} from '../../assets/js/store';
  export default {
   name: 'Select',
   
   data() {
    return {
      store
    }
   }  
  }
</script>

<template>
  <select name="" id="">
    <option value="">Select type</option>
    <option
    v-for="(type, index) of store.typeList"
    :key="index"
    :value="type"
    >{{ type }}</option>
  </select>
</template>

<style lang="scss" scoped>
  select {
    padding: 2px 5px;
    background-color: lightblue;
  }
</style>