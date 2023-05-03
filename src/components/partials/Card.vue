<script>
  export default {
    name: 'Card',

    props: {
      img: String,
      name: String,
      type: String
    }
  } 
</script>

<template>
  <div class="col">
    <div class="card">
      <img :src="img" :alt="name">
      <h3>{{name}}</h3>
      <span>{{ type }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/partials/var' as *;
  
  .col {
    width: calc(100% / 5);
    padding: 10px;
    
    .card {
      height: 480px;
      background-color: $primary-color;
      text-align: center;

      h3,
      span {
        padding: 10px
      }

      h3 {
        color: white
      }
    }
  }
</style>