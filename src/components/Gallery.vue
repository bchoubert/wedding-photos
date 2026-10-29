<template>
  <div class="w-full bg-white text-[#181818] min-h-2 relative">
    <!-- Filter for mobile -->
    <div class="block lg:hidden w-full sticky top-0 z-1000">
      <GallerySelect :filter="filter" @change-filter="changeFilter" />
    </div>

    <!-- Filter for desktop + results -->
     <div class="flex flex-row w-full">
      <div class="hidden lg:block relative">
        <GalleryRadio :filter="filter" @change-filter="changeFilter" />
      </div>
      <GalleryResults :filter="filter" />
     </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import GalleryRadio from './subcomponents/GalleryRadio.vue';
import GalleryResults from './subcomponents/GalleryResults.vue';
import GallerySelect from './subcomponents/GallerySelect.vue';


const filter = ref('Photos officielles');

const changeFilter = (newFilter) => filter.value = newFilter;

</script>
