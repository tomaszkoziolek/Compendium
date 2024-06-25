<template>
  <div class="carousel-layout-container">
    <the-carousel></the-carousel>
  </div>
</template>

<script>
import TheCarousel from "./TheCarousel.vue";
export default {
  components: {
    TheCarousel,
  },
};
</script>

<style scoped>
.carousel-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
