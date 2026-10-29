<template>
  <a :href="`${baseUrl}output_high/${num}.jpg`" target="_blank" class="w-full block">
    <img class="rounded-md w-full hover:scale-105 transition-transform" :src="`${baseUrl}output_low/${num}.webp`" />
  </a>

</template>

<script setup>

const baseUrl = import.meta.env.BASE_URL;

defineProps({
  num: {
    type: Number,
    required: true,
  }
})
</script>
