import type { type TODO_FILTERS } from "./consts"

export interface Todo {
  id: Id
  title: Title
  completed: Completed
}

export type Id = `${string}-${string}-${string}-${string}-${string}`
export type Title = string
export type Completed = boolean
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export function setCompletedTodo ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void
export function removeTodo ({ id }: TodoId): void
export function setFilter (filter: FilterValue): void
export function addTodo ({ title }: TodoTitle): void
