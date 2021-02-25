<template>
  <div class="container-fluid">
    <div v-if="searchCheck">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <form class="d-flex" @submit.prevent="searchMeal()">
        <input class="form-control me-2" type="search" v-model="searchItem" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </nav>

      <div class="card text-white bg-dark mb-3" v-for="(dish, index) in availableMeal.meals" :key="index">
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
          <h5 class="card-text" style="color: red">Ingredients and Measures</h5>
          <p class="card-text">{{dish.strIngredient1}}  {{dish.strMeasure1}}</p>
          <p class="card-text">{{dish.strIngredient2}}  {{dish.strMeasure2}}</p>
          <p class="card-text">{{dish.strIngredient3}}  {{dish.strMeasure3}}</p>
          <p class="card-text">{{dish.strIngredient4}}  {{dish.strMeasure4}}</p>
          <p class="card-text">{{dish.strIngredient5}}  {{dish.strMeasure5}}</p>
          <p class="card-text">{{dish.strIngredient6}}  {{dish.strMeasure6}}</p>
          <p class="card-text">{{dish.strIngredient7}}  {{dish.strMeasure7}}</p>
          <p class="card-text">{{dish.strIngredient8}}  {{dish.strMeasure8}}</p>
          <p class="card-text">{{dish.strIngredient9}}  {{dish.strMeasure9}}</p>
          <p class="card-text">{{dish.strIngredient10}}  {{dish.strMeasure10}}</p>
          <p class="card-text">{{dish.strIngredient11}}  {{dish.strMeasure11}}</p>
          <p class="card-text">{{dish.strIngredient12}}  {{dish.strMeasure12}}</p>
          <p class="card-text">{{dish.strIngredient13}}  {{dish.strMeasure13}}</p>
          <p class="card-text">{{dish.strIngredient14}}  {{dish.strMeasure14}}</p>
          <p class="card-text">{{dish.strIngredient15}}  {{dish.strMeasure15}}</p>
          <p class="card-text">{{dish.strIngredient16}}  {{dish.strMeasure16}}</p>
          <p class="card-text">{{dish.strIngredient17}}  {{dish.strMeasure17}}</p>
          <p class="card-text">{{dish.strIngredient18}}  {{dish.strMeasure18}}</p>
          <p class="card-text">{{dish.strIngredient19}}  {{dish.strMeasure19}}</p>
          <p class="card-text">{{dish.strIngredient20}}  {{dish.strMeasure20}}</p>
        </div>
      </div>
    </div>
    <div v-else>
    </div>

  </div>
</template>

<script>
import { getMealBySearchName } from '../service/meal.service.js';


export default {
  name: 'MealWorld',

  mounted() {
    this.$store.dispatch('getMeal');
  },
  updated() {
        if(this.availableMeal.meals == null) {
          this.searchCheck = false;
          this.$router.push('/error');
          this.searchItem="";

        }
  },

  data() {
    return {
      searchItem: "",
      searchCheck: Boolean,
    };
  },
  computed: {
    availableMeal() {
      return this.$store.state.meal;
    },
  },
  methods: {
    searchMeal() {
      if(this.searchItem != "")
      {
        const responseSearch = getMealBySearchName(this.searchItem);
        responseSearch
        .then((result) => this.$store.commit('updateMeal', result.data))
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
