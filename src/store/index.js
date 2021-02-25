import Vue from 'vue';
import Vuex from 'vuex';
import { getRandomMeal } from '../service/meal.service.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meal: {},
  },
  mutations: {

    updateMeal(state, meal) {
      state.meal = meal;
    },
  },
  actions: {
    getMeal({ commit }) {
        const response = getRandomMeal();
        response
        .then((result) => commit('updateMeal', result.data))
        .catch(console.error);
    },
  },
});
