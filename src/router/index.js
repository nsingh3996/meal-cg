import Vue from 'vue';
import Router from 'vue-router';

import MealWorld from '../components/MealWorld.vue';
import ErrorPage from '../components/ErrorPage.vue';

Vue.use(Router);

const routes = [
    {
      path: "/",
      name: "Home",
      component: MealWorld
    },
    {
      path: "/error",
      name: "ItemNotFound",
      component: ErrorPage,
    },
    {
      path: "*",
      redirect: "/error"
    },
  ];

    const router = new Router({
        mode: "history",
        routes,
      });

export default router;
