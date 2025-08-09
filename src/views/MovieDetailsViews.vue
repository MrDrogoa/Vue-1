<script setup>
import { useRoute } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";
import { watch } from "vue";

const route = useRoute();

const movieStore = useMovieStore();

// con esto traemos las peliculas
let movieTitle = route.params.movieTitle;
let movie = movieStore.getMovie(movieTitle);

watch(
  () => route.params.movieTitle,
  () => {
    movieTitle = route.params.movieTitle;
    movie = movieStore.getMovie(movieTitle);
  }
);
</script>
<template>
  <HeaderComponent />
  <!-- hacemos un if para manejar errores si no hay peliculas -->
  <h2 v-if="!movie">No hay pelicula</h2>
  <div v-else>
    <h2>Title: {{ movie.title }}</h2>
    <h2>Duration: {{ movie.duration }}</h2>
    <h2>Director: {{ movie.director }}</h2>
  </div>

  <h2>
    <RouterLink
      :to="{ name: 'moviesDetails', params: { movieTitle: 'Interstellar' } }"
    >
      Interstellar
    </RouterLink>
  </h2>
</template>

<style lang="scss" scoped></style>
