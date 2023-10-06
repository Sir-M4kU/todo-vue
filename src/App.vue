<script setup lang="ts">
import type { Todo } from './index.d'
import Header from './components/Header.vue'
import Todos from './components/Todos.vue'
import Footer from './components/Footer.vue'
import { useTodosStore } from './hooks/useTodosStore'
import { storeToRefs } from 'pinia'

const mockedTodos: Todo[] =  [
  {
    id: crypto.randomUUID(),
    title: 'Todo 1',
    completed: true
  }
]

const store = useTodosStore()
const { filteredTodos, filterSelected, activeCount, completedCount } = storeToRefs(store)
const { setTodos } = store

setTodos(mockedTodos)
</script>

<template>
  <div class="todoapp">
    <Header />
    <Todos :todos="filteredTodos" />
    <Footer
      :filterSelected="filterSelected"
      :activeCount="activeCount"
      :completedCount="completedCount"
    />
  </div>
</template>
