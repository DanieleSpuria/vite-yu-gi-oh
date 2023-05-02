<script>
  export default {
    name: 'Card'
  } 
</script>

<template>
  <div class="col">
    <div class="card">
      <img src="" alt="img">
      <h3>NAME</h3>
      <span>TYPE</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/general/var' as *;
  
  .col {
    padding: 20px;
    
    .card {
      width: calc(100% / 5);
      background-color: $primary-color;
      text-align: center;
    }
  }
</style>