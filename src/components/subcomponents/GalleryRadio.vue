<template>
  <div class="sticky top-4 mt-4 max-h-full overflow-y-auto w-[250px] block px-5 border-r border-black">

    <Radio
      v-for="o in categories.filter(c => c.type === 'base')"
      :key="o.title"
      :label="o.title"
      :value="o.title"
      :checked="filter === o.title"
      @change="emit('change-filter', $event)"
    />

    <h2 class="font-bold">Chronologie</h2>

    <div class="ml-5">
      <Radio
        v-for="o in categories.filter(c => c.type === 'timeline')"
        :key="o.title"
        :label="o.title"
        :value="o.title"
        :checked="filter === o.title"
        @change="emit('change-filter', $event)"
      />
    </div>

    <h2 class="font-bold">Thèmes</h2>

    <div class="ml-5">
      <Radio
        v-for="o in categories.filter(c => c.type === 'theme')"
        :key="o.title"
        :label="o.title"
        :value="o.title"
        :checked="filter === o.title"
        @change="emit('change-filter', $event)"
      />
    </div>

  </div>
</template>

<script setup>
import { categories } from '@/lib/filter.js'
import Radio from './Radio.vue'

defineProps({
  filter: {
    type: String,
    required: true
  }
})

const emit = defineEmits({
  'change-filter': value => typeof value === 'string'
})
</script>