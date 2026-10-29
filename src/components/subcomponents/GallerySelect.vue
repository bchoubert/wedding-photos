<template>
  <select
    :value="filter"
    @change="onChange"
  >
    <option
      v-for="o in categories.filter(c => c.type === 'base')"
      :key="o.title"
      :value="o.title"
    >
      {{ o.title }}
    </option>

    <optgroup label="Chronologie">
      <option
        v-for="o in categories.filter(c => c.type === 'timeline')"
        :key="o.title"
        :value="o.title"
      >
        {{ o.title }}
      </option>
    </optgroup>

    <optgroup label="Thèmes">
      <option
        v-for="o in categories.filter(c => c.type === 'theme')"
        :key="o.title"
        :value="o.title"
      >
        {{ o.title }}
      </option>
    </optgroup>
  </select>
</template>

<script setup>
import { categories } from '@/lib/filter.js'

defineProps({
  filter: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['change-filter'])

function onChange(event) {
  emit('change-filter', event.target.value)
}
</script>