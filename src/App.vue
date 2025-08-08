<script setup>
// ===== IMPORTACIONES =====
import HeaderComponent from "./components/HeaderComponent.vue";
import ChildComponent from "./components/ChildComponent.vue";
import { RouterView } from "vue-router";

// ===== 1. VARIABLES REACTIVAS Y EVENTOS =====
// Se importa ref para que las variables sean reactivas y funcionales
// import {ref} from "vue";
// let number = ref(0);
// const addOne = () => {
//   number.value++;
// }

// ===== 2. VARIABLES Y BINDING DINÁMICO =====
// const myId = "papa";
// const myValue = ref("some value")
// let myCondition = true;

// ===== 3. DIRECTIVAS CONDICIONALES =====
// Variables para demostrar v-if, v-else-if, v-else
// const condition = false;
// const condition2 = true;

// ===== 4. RENDERIZADO DE LISTAS - ARRAYS SIMPLES =====
// Array simple para usar con v-for
// const movies = ["Lord of rings", "Star wars", "Dune"];

// ===== 5. RENDERIZADO DE LISTAS - OBJETOS (COMO APIS) =====
// Lista de objetos para simular datos de una API
// const animals = [
//   {
//     id: 1,
//     name: "dog",
//     img: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
//   },
//   {
//     id: 2,
//     name: "cat",
//     img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
//   },
//   {
//     id: 3,
//     name: "bird",
//     img: "https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg",
//   },
// ];

// ===== 6. PROPS - COMUNICACIÓN PADRE A HIJO =====
// Datos que se envían del componente padre al hijo
// const person = {
//   sex: "hombre",
//   age: 20,
// };
// const text = "info del padre";

// ===== 7. EMITS - COMUNICACIÓN HIJO A PADRE =====
// Variables para recibir datos del componente hijo
// const displayName = ref("");
// const setName = (e) => {
//   displayName.value = e;
// };

// ===== 8. COMPUTED PROPERTIES - VARIABLES CALCULADAS =====
// import { computed, ref } from "vue";
// const userName = ref("Dalila");
// La función computed sirve para crear variables que dependen de otras
// Si cambiamos userName, nameLenght se actualiza automáticamente
// const nameLenght = computed(() => {
//   return userName.value.length;
// });

// ===== 9. WATCHERS - OBSERVAR CAMBIOS EN VARIABLES =====
// import { ref, watch, watchEffect } from "vue";
// const userName = ref("adrian");
// const setName = () => {
//   userName.value = "marta";
// };

// WATCH: Este método recibe al menos 2 parámetros
// El 3er parámetro es un objeto de configuración
// watch(
//   userName,
//   () => {
//     console.log("Usuario modificado");
//   },
//   {
//     // immediate: true hace que se ejecute inmediatamente
//     immediate: true,
//   }
// );

// WATCHEFFECT: Funciona igual pero se ejecuta automáticamente sin configuración
// watchEffect(() => {
//   console.log("Usuario modificado", userName.value);
// });

// ===== 10. FORMULARIOS CON REACTIVE =====
// import { reactive } from "vue";
// const movie = reactive({
//   title: "",
//   duration: 0,
//   director: "",
// });

// const handleSubmit = () => {
//   if (!movie.title || !movie.duration || !movie.director) {
//     alert("Por favor rellena todos los campos");
//     return;
//   }
//   console.log(movie);
// };
</script>

<template>
  <!-- ===== COMPONENTE HEADER ===== -->
  <!-- <HeaderComponent></HeaderComponent> -->

  <!-- ===== EJEMPLOS COMENTADOS DE CONCEPTOS APRENDIDOS ===== -->

  <!-- 1. EVENTOS: @click para manejar clicks (en lugar de onclick) -->
  <!-- <h2 @click="addOne">{{ number }}</h2> -->

  <!-- 2. V-BIND (:) - Hace que los atributos sean dinámicos -->
  <!-- <h1>{{ myValue }}</h1> -->

  <!-- 3. V-MODEL - Datos bidireccionales para formularios reactivos -->
  <!-- <input type="text" v-model="myValue"> -->

  <!-- 4. CLASES DINÁMICAS - Se aplican según condiciones -->
  <!-- <h1 :class="{high: myCondition, red: false}">Hello</h1> -->

  <!-- 5. V-IF, V-ELSE-IF, V-ELSE - Renderizado condicional -->
  <!-- <h1>Directiva v-if</h1> -->
  <!-- <h2 v-if="condition">La condición se cumple</h2> -->
  <!-- <h2 v-else-if="condition2">Condición 2</h2> -->
  <!-- <h2 v-else="condition">La condición no se cumple</h2> -->

  <!-- 6. V-FOR - Renderizar listas simples -->
  <!-- v-for renderiza listas y :key es una llave única que Vue necesita -->
  <!-- <div> -->
  <!--   <p v-for="(movie, index) in movies" :key="movie"> -->
  <!--     {{ index + 1 }} - {{ movie }} -->
  <!--   </p> -->
  <!-- </div> -->

  <!-- 7. V-FOR con objetos - Para renderizar datos de APIs -->
  <!-- <ul> -->
  <!--   <li v-for="animal in animals" :key="animal.id"> -->
  <!--     {{ animal.name }} -->
  <!--     <img :src="animal.img" alt="" width="200" /> -->
  <!--   </li> -->
  <!-- </ul> -->

  <!-- 8. PROPS - Envío de datos del padre al hijo -->
  <!-- Así se pasan valores del componente padre al hijo -->
  <!-- <ChildComponent :msg="text" :person="person" /> -->

  <!-- 9. EMITS - Comunicación del hijo al padre -->
  <!-- @login escucha el evento que viene del componente hijo -->
  <!-- <ChildComponent @login="setName" /> -->
  <!-- <h1>Props desde hijo: {{ displayName }}</h1> -->

  <!-- 10. SLOTS - Envío de contenido HTML al componente hijo -->
  <!-- <h1>Slots</h1> -->
  <!-- Slot simple: envía el h3 al componente hijo -->
  <!-- <ChildComponent><h3>Contenido del slot</h3></ChildComponent> -->

  <!-- Slots con nombre: envía contenido a slots específicos -->
  <!-- <ChildComponent> -->
  <!--   <template v-slot:top> -->
  <!--     <h3>Contenido top</h3> -->
  <!--   </template> -->
  <!--   <template v-slot:bottom> -->
  <!--     <h3>Contenido bottom</h3> -->
  <!--   </template> -->
  <!-- </ChildComponent> -->

  <!-- 11. COMPUTED PROPERTIES - Variables calculadas -->
  <!-- <h3>Variables computadas</h3> -->
  <!-- <input type="text" v-model="userName" /> -->
  <!-- <h5>Hola {{ userName }}</h5> -->
  <!-- <h5>Tiene {{ nameLenght }} letras</h5> -->

  <!-- 12. WATCHERS - Observar cambios en variables -->
  <!-- <h1>Watch</h1> -->
  <!-- <h2>Hola {{ userName }}</h2> -->
  <!-- <button @click="setName">Cambiar nombre</button> -->

  <!-- 13. FORMULARIOS REACTIVOS -->
  <!-- <h1>Formulario</h1> -->
  <!-- @submit.prevent previene el comportamiento por defecto del formulario -->
  <!-- <form @submit.prevent="handleSubmit()"> -->
  <!--   <label for="title">Título</label> -->
  <!--   <input v-model="movie.title" type="text" id="title" /> -->

  <!--   <label for="duration">Duración</label> -->
  <!--   <input v-model="movie.duration" type="number" id="duration" /> -->

  <!--   <label for="director">Director</label> -->
  <!--   <input v-model="movie.director" type="text" id="director" /> -->

  <!--   <button type="submit">Enviar</button> -->
  <!-- </form> -->
  <RouterView />
</template>

<style scoped>
/* ===== ESTILOS PARA FORMULARIOS ===== */
/* form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
} */

/* ===== CLASES DINÁMICAS - EJEMPLOS ===== */
/* Estas clases se aplican condicionalmente con :class */
/* .high {
    background-color: black;
    color: wheat;
  }

  .red {
    color: red;
  } */

/* ===== NOTA SOBRE SCOPED ===== */
/* 
  El atributo 'scoped' hace que estos estilos solo se apliquen
  a este componente específico, no afectan a otros componentes
*/
</style>
