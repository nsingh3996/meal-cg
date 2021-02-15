<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <form class="d-flex" @submit.prevent="searchMeal()">
        <input class="form-control me-2" type="search" v-model="searchItem" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>

    <div v-if="searchCheck">
      <div class="card text-white bg-dark mb-3" v-for="(dish, index) in meal.meals" :key="index">
        <div class="row">
          <div class="col"></div>
          <div class="col-6"><img :src="dish.strMealThumb" class="card-img-top"></div>
          <div class="col"></div>
        </div>
        <div class="card-body">
          <h1 class="card-title">{{dish.strMeal}}</h1>
          <p class="card-text">{{dish.strInstructions}}</p>
          <h5 class="card-text" style="color: red">How to prepare {{dish.strMeal}} video !</h5>
          <hr/>
          <video-embed css="embed-responsive-21by9" :src="dish.strYoutube"></video-embed>
          <hr/>
          <table class="card-text table table-dark table-borderless">
              <thead>
                <tr>
                  <th style="color: red"><h5>Ingredient</h5></th>
                  <th style="color: red"><h5>Measure</h5></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{dish.strIngredient1}}</td>
                  <td>{{dish.strMeasure1}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient2}}</td>
                  <td>{{dish.strMeasure2}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient3}}</td>
                  <td>{{dish.strMeasure3}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient4}}</td>
                  <td>{{dish.strMeasure4}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient5}}</td>
                  <td>{{dish.strMeasure5}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient6}}</td>
                  <td>{{dish.strMeasure6}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient7}}</td>
                  <td>{{dish.strMeasure7}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient8}}</td>
                  <td>{{dish.strMeasure8}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient9}}</td>
                  <td>{{dish.strMeasure9}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient10}}</td>
                  <td>{{dish.strMeasure10}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient11}}</td>
                  <td>{{dish.strMeasure11}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient12}}</td>
                  <td>{{dish.strMeasure12}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient13}}</td>
                  <td>{{dish.strMeasure13}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient14}}</td>
                  <td>{{dish.strMeasure14}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient15}}</td>
                  <td>{{dish.strMeasure15}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient16}}</td>
                  <td>{{dish.strMeasure16}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient17}}</td>
                  <td>{{dish.strMeasure17}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient18}}</td>
                  <td>{{dish.strMeasure18}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient19}}</td>
                  <td>{{dish.strMeasure19}}</td>
                </tr>
                <tr>
                  <td>{{dish.strIngredient20}}</td>
                  <td>{{dish.strMeasure20}}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else><h1>Meal Not Found !</h1></div>

  </div>
</template>

<script>
import { getRandomMeal,getMealBySearchName } from '../store/meal.service.js';

export default {
  name: 'MealWorld',
  created() {
    const response = getRandomMeal();
     response
    .then((result) => this.meal = result.data )
    .catch(console.error);
  },
  updated() {

        if(this.meal.meals == null) {
          this.searchCheck = false;
          this.searchItem="";
          window.location.href = '';
        }
  },
  props: {
    msg: String
  },
  data() {
    return {
      meal: {},
      searchItem: "",
      searchCheck: Boolean,
    };
  },
  methods: {
    searchMeal() {
      if(this.searchItem != "")
      {
        const responseSearch = getMealBySearchName(this.searchItem);
        responseSearch
        .then((result) => this.meal = result.data)
        .catch((error) => console.log(error))
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: x-large;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: blue;
}
</style>
