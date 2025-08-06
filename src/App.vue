<script setup>
  import HeaderComponent from './components/HeaderComponent.vue';
  // se importa este valor para que pueda funcionar nuestro setInterval y sea funcional
  // import {ref} from "vue";

  // let number = ref(0);

  // const addOne = () => {
  //   number.value++;
  // }

  // const myId = "papa";
  // const myValue = ref("some value")
  // let myCondition = true;

  const condition = false;
  const condition2 = true;

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
  <h1>Directiva v-if</h1>
  <!-- la directiva v-if comprueba si la condicion se cumple -->
  <h2 v-if="condition">la condicion se cumple </h2>
  <h2 v-else-if="condition2">condicion 2 </h2>
  <h2 v-else="condition">la condicion no se cumple </h2>

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