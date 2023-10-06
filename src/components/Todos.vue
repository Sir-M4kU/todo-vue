<script setup lang="ts">
import type { Todo as TodoType } from '../index.d'
import Todo from './Todo.vue'

defineProps<{
  todos: TodoType[]
}>()
</script>

<template>
  <ul class="todo-list">
    <li v-for="{ id, title, completed } of todos" :key="id" :class="completed ? 'completed' : ''">
      <Todo
        :title="title"
        :id="id"
        :completed="completed"
      />
    </li>
  </ul>
</template>
