<script setup lang="ts">
import CreateTodo from './CreateTodo.vue'
</script>

<template>
  <header>
    <h1>
      todo
      <img src="../assets/vue.svg" alt="vue-logo" />
    </h1>
    <CreateTodo />
  </header>
</template>

<style scoped>
img {
  width: 60px;
  height: auto;
}
</style>