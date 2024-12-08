<template>
  <div class="img-slider">
  <carousel :items-to-show="1">
    <slide v-for="slide in 5" :key="slide">
      {{slide}}

      <img :src="`src/assets/images/cities/img_${slide + 1}.jpg`" alt="">

    </slide>


    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'



</script>

<style scoped>
.img-slider {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
</style>