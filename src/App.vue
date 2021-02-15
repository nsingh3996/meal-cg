<template>
  <div id="app">
    <h1 class="title text-center text-secondary">Meal Capgemini</h1>
    <MealWorld msg="Welcome to Meal App"/>
  </div>
</template>

<script>
import MealWorld from './components/MealWorld.vue'

export default {
  name: 'App',
  components: {
    MealWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-size: 1.5cm;
}
</style>
