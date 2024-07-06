<template>
  <component is="MainPage"></component>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  components: {
    MainPage,
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
