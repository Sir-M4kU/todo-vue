<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '../hooks/useTodosStore'

const input = ref('')
const { addTodo } = useTodosStore()

const handleSubmit = () => {
  addTodo({ title: input.value })
  input.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="new-todo"
      v-model="input"
      placeholder="¿Que quieres hacer?"
      autofocus
    />
  </form>
</template>