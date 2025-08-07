<script setup>
// con esto recibe la informacion la mayoria del tiempo se usa para llevar objetos
// defineProps({
//   msg: String,
//   person: {
//     sex: String,
//     age: Number,
//   },
// });

// import
// import { ref } from "vue";

// const emit = defineEmits(["login"]);

// const userName = ref("ara");

// // con esta funcion vamos emitir la informacion de emit
// const login = () => {
//   emit("login", userName.value);
// };
</script>
<template>
  <!-- lo extrae de defineProps -->
  <!-- <div>
    <h2>Componente hijo</h2>

    <p>{{ msg }}</p>
    <div>{{ person.sex }} - {{ person.age }}</div>
  </div> -->

  <div class="child">
    <!-- <h2>Este es un hijo</h2>
    <p>Nombre user: {{ userName }}</p>
    <button @click="login">Login</button> -->
    <slot name="top"></slot>
    <h2>Componente hijo</h2>
    <slot name="bottom"></slot>

    <!-- <slot>
      <h2>Solt por defecto</h2>
    </slot> -->
  </div>
</template>

<style scoped>
.child {
  border: 5px solid #762828;
}
</style>
