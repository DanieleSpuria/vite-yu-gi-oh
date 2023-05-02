<script>
  import Card from './partials/Card.vue';
  export default {
   name: 'Main',

   components: {
    Card
   }
  }
</script>

<template>
  <main>
    <div class="container">
      <Card/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/general/var' as *;

  main {
    padding: 50px 0;
    background-color: $primary-color;
    height: 100vh;

    .container {
      width: 90%;
      margin: 0 auto;
      background-color: white;
      height: 90%;
    }
  }
</style>