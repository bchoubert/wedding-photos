<template>
  <div class="flex-1 p-4 columns-2 md:columns-4 gap-4 space-y-4 overflow-hidden">

    <GalleryPhoto
      v-for="photo of photos"
      :key="photo"

      :num="photo"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { categories } from '@/lib/filter.js'
import GalleryPhoto from './GalleryPhoto.vue';

const { filter } = defineProps({
  filter: {
    type: String,
    required: true,
  }
});

const photos = computed(() => categories.find(c => c.title === filter)?.photos || []);
</script>
