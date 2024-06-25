<template>
  <div class="page-container">
    <the-header></the-header>
    <main-content></main-content>
  </div>
</template>

<script>
import TheHeader from "./layout/TheHeader.vue";
import MainContent from "./layout/MainContent.vue";

export default {
  components: {
    TheHeader,
    MainContent,
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  /* height: 100%; */
  min-height: 100vh;
  /* background-color: #0f0f0f; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
