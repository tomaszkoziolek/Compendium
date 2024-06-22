<template>
  <the-intro></the-intro>
</template>

<script>
import TheIntro from "./components/layout/TheIntro.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheIntro,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #0f0f0f;
  font-family: sans-serif;
  color: #e0e0e0;
}
</style>
