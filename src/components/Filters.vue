<script setup lang="ts">
import { FILTERS_BUTTONS } from '../consts'
import type { FilterValue } from '../index.d'
import { useTodosStore } from '../hooks/useTodosStore'

const { setFilter } = useTodosStore()

defineProps<{
  filterSelected: FilterValue,
}>()
</script>

<template>
  <ul class="filters">
    <li v-for="([key, { href, literal }]) of Object.entries(FILTERS_BUTTONS)" :key="key">
      <a :class="filterSelected === key ? 'selected' : ''" :href="href" @click.stop.prevent="setFilter(key as FilterValue)">
        {{ literal }}
      </a>
    </li>
  </ul>
</template>