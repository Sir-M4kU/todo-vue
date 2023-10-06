<script setup lang="ts">
import { useTodosStore } from '../hooks/useTodosStore'
import type { Id } from '../index.d'

const { setCompletedTodo, removeTodo } = useTodosStore()

function handleChange (el: HTMLInputElement, id: Id) {
  const completed = el.checked
  setCompletedTodo({ id, completed })
}

defineProps<{
  id: Id,
  title: string,
  completed: boolean
}>()
</script>

<template>
  <div class="view">
    <input
      class="toggle"
      :checked="completed"
      type="checkbox"
      @change="handleChange($event.target as HTMLInputElement, id)"
    />
    <label>{{ title }}</label>
    <button class="destroy" @click="removeTodo({ id })" />
  </div>
</template>
