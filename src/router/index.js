import { createRouter, createWebHistory } from "vue-router";
import HomeViews from "../views/HomeViews.vue";
import MoviesViews from "../views/MoviesViews.vue";
import CreateMovieViews from "../views/CreateMovieViews.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeViews,
    },
    {
      path: "/movies",
      name: "movies",
      component: MoviesViews,
    },
    {
      path: "/create",
      name: "createmovies",
      component: CreateMovieViews,
    },
  ],
});

export default router;
