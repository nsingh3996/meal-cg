<template>

  <div id="app">
    <div class="container">
      <h1 class="title text-center text-success">Meal</h1>
    </div>
    <router-view></router-view>
    <!-- <MealWorld/> -->

  </div>

</template>

<script>
//import MealWorld from './components/MealWorld.vue'

export default {
  name: 'App',
  // components: {
  //   MealWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.title {
  font-size: 1.5cm;
}
</style>
