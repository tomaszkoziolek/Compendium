<template>
  <component :is="currentComponent"></component>
</template>

<script>
import TheIntro from "./components/layout/TheIntro.vue";
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheIntro,
  },
  data() {
    return {
      currentComponent: "the-intro",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #fff;
  font-family: sans-serif;
  color: #000;
}
</style>
