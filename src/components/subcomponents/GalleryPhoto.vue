<template>
  <a :href="`/public/output_high/${num}.jpg`" target="_blank" class="w-full block">
    <img class="rounded-md w-full hover:scale-105 transition-transform" :src="`/public/output_low/${num}.webp`" />
  </a>

</template>

<script setup>

defineProps({
  num: {
    type: Number,
    required: true,
  }
})
</script>
