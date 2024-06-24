<template>
  <div class="page-container">
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100vh;
  background-color: #0f0f0f;
}
</style>
