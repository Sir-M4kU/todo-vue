<script setup lang="ts">
import Filters from './Filters.vue'
import type { FilterValue } from '../index.d'
import { useTodosStore } from '../hooks/useTodosStore'

const store = useTodosStore()
const { removeCompleted } = store

defineProps<{
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
}>()
</script>

<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ activeCount }}</strong> tareas pendientes
    </span>

    <Filters
      :filterSelected="filterSelected"
    />
    <button v-if="completedCount > 0" class="clear-completed" @click="removeCompleted">
      Borrar completadas
    </button>
  </footer>
</template>
