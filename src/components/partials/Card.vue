<script>
  export default {
    name: 'Card',

    props: {
      img: String,
      name: String,
      archetype: String
    }
  } 
</script>

<template>
  <div class="col">
    <div class="card">
      <img :src="img" :alt="name">
      <h3>{{name}}</h3>
      <span>{{ archetype }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/general/var' as *;
  
  .col {
    width: calc(100% / 5);
    padding: 20px;
    
    .card {
      background-color: $primary-color;
      text-align: center;
    }
  }
</style>