<template>
  <div class="my-2">
     <input
      :id="toId(label)"
      type="radio"
      name="filter"
      :value="value"
      :checked="checked"
      @change="emit('change', value)"
      class="hidden"
    />

    <label
      :for="toId(label)"

      :class="`underline cursor-pointer ${checked ? 'font-bold' : ''}`"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits({
  change: value => typeof value === 'string'
})


function toId(label) {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
</script>
