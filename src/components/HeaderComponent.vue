<script setup></script>

<template>
  <header class="header">
    <nav>
      <ul class="nav-list">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li><router-link class="link" to="/movies">Movies</router-link></li>
        <li><router-link class="link" to="/create">Create</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #000022;
  color: white;
  text-align: center;
  padding: 20px;
}
.nav-list {
  display: flex;
  justify-content: space-around;
}
.link {
  color: white;
  text-decoration: none;
}
</style>
