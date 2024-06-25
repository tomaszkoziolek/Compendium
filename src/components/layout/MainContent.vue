<template>
  <section class="main-section">
    <view-switch @toggle-view="switchView"></view-switch>
    <component :is="currentComponent"></component>
  </section>
</template>

<script>
import CarouselLayout from "./carousel-wiev/CarouselLayout.vue";
import ViewSwitch from "../UI/ViewSwitch.vue";
import GridLayout from "./grid-view/GridLayout.vue";

export default {
  components: {
    ViewSwitch,
    CarouselLayout,
    GridLayout,
  },
  data() {
    return {
      currentComponent: "carousel-layout",
    };
  },
  methods: {
    switchView(currentCmp) {
      this.currentComponent = currentCmp;
    },
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
