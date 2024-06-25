<template>
  <section class="main-section">
    <carousel-layout></carousel-layout>
  </section>
</template>

<script>
import CarouselLayout from "./carousel-wiev/CarouselLayout.vue";

export default {
  components: {
    CarouselLayout,
  },
};
</script>

<style scoped>
.main-section {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
