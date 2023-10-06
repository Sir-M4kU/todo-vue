import type {
  Todo,
  removeTodo as RemoveTodo,
  setFilter as SetFilter,
  addTodo as AddTodo,
  setCompletedTodo as SetCompletedTodo,
  FilterValue
} from '../index.d'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { TODO_FILTERS } from '../consts'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])
  const filterSelected = ref<FilterValue>(TODO_FILTERS.ALL)
  const filteredTodos = computed(() => todos.value.filter(todo => {
    if (filterSelected.value === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected.value === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  }))
  const activeCount = computed(() => todos.value.filter(todo => !todo.completed).length)
  const completedCount = computed(() => todos.value.length - activeCount.value)

  const setTodos = (newTodos: Todo[]) => {
    todos.value = newTodos
  }
  const addTodo: typeof AddTodo = ({ title }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos.value, newTodo]

    todos.value = newTodos
  }
  const removeTodo: typeof RemoveTodo = ({ id }) => {
    const newTodos = todos.value.filter(todo => todo.id !== id)

    todos.value = newTodos
  }
  const setCompletedTodo: typeof SetCompletedTodo = ({ id, completed }) => {
    const newTodos = todos.value.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    todos.value = newTodos
  }
  const setFilter: typeof SetFilter = (filter) => {
    filterSelected.value = filter
  }
  const removeCompleted = () => {
    const newTodos = todos.value.filter(todo => !todo.completed)
    todos.value = newTodos
  }

  return {
    filteredTodos,
    setTodos,
    activeCount,
    completedCount,
    filterSelected,
    addTodo,
    removeTodo,
    removeCompleted,
    setCompletedTodo,
    setFilter
  }
})
