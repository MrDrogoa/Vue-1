<script setup>
import HeaderComponent from "./components/HeaderComponent.vue";
import ChildComponent from "./components/ChildComponent.vue";
// se importa este valor para que pueda funcionar nuestro setInterval y sea funcional
// import {ref} from "vue";

// let number = ref(0);

// const addOne = () => {
//   number.value++;
// }

// const myId = "papa";
// const myValue = ref("some value")
// let myCondition = true;

// const condition = false;
// const condition2 = true;

// const movies = ["Lord of legens", "Star wars", "dune"];
// lista de objetos
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

// const person = {
//   sex: "hombre",
//   age: 20,
// };

// const text = "info del padre";

import { ref } from "vue";

const displayName = ref("");

const setName = (e) => {
  displayName.value = e;
};
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <!-- evento onclick @click -->
  <!-- <h2 @click="addOne">{{ number }}</h2> -->
  <!-- v-bind o ":" se hace para darle dinamismo a los atributos -->
  <!-- <h1>{{ myValue }}</h1> -->
  <!-- el v-model sirve para tener datos bidireccionales sirve para tener formularios reactivos  -->
  <!-- <input type="text" v-model="myValue"> -->
  <!-- son clases que se da de manera dinamica si se cumple la condicion -->
  <!-- <h1 :class="{high: myCondition, red: false}">Hello</h1> -->
  <!-- <h1>Directiva v-if</h1> -->
  <!-- la directiva v-if comprueba si la condicion se cumple -->
  <!-- <h2 v-if="condition">la condicion se cumple </h2>
  <h2 v-else-if="condition2">condicion 2 </h2>
  <h2 v-else="condition">la condicion no se cumple </h2> -->

  <h1>Props {{ displayName }}</h1>
  <!-- <div> -->
  <!-- el v-for sirve para renderizar listas y el :key sirve como una llave unica porque vue necesita 
     una llave unica para cada elemento. El index sirve para identificar cada elemento renderizado 
    -->
  <!-- <p v-for="(movie, index) in movies" :key="movie">
      {{ index + 1 }} - {{ movie }}
    </p>

    <ul> -->
  <!-- renderizamos la lista de objetos y traendo la informacion de cada cosa -->
  <!-- <li v-for="animal in animals" :key="animal.id">
        {{ animal.name }}
        <img :src="animal.img" alt="" width="200" />
      </li>
    </ul>
  </div> -->
  <!-- desde aca paso al valor msg y agrego algo y es asi como se lo pasa al hijo -->
  <!-- <ChildComponent :msg="text" :person="person" /> -->
  <ChildComponent @login="setName" />
</template>

<style>
/* .high {
    background-color: black;
    color: wheat;
  }

  .red {
    color: red;
  } */
</style>
