<template>
  <div class="grid-layout-container">
    <the-grid></the-grid>
  </div>
</template>

<script>
import TheGrid from "./TheGrid.vue";

export default {
  components: {
    TheGrid,
  },
};
</script>

<style scoped>
.grid-layout-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
