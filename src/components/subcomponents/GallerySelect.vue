<template>
  <div class="flex flex-row items-center gap-2 h-12 bg-white px-4">
    <div>Groupe de photos:</div>
    <select
      :value="filter"
      @change="onChange"

      class="border-1 px-2 py-2 rounded-md"
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
  </div>
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