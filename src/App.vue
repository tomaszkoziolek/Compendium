<template>
  <component
    :is="currentComponent"
    v-on="
      currentComponent === 'the-intro'
        ? { 'change-component': changeComponent }
        : {}
    "
  ></component>
</template>

<script>
import TheIntro from "./components/layout/TheIntro.vue";
import MainPage from "./components/MainPage.vue";

export default {
  components: {
    TheIntro,
    MainPage,
  },
  data() {
    return {
      currentComponent: "the-intro",
    };
  },
  methods: {
    changeComponent(newComponent) {
      this.currentComponent = newComponent;
    },
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
