<template>
  <div class="grid">
    <grid-item
      v-for="project in projects"
      :img="project.img"
      :title="project.title"
      :description="project.description"
      :link="project.link"
    ></grid-item>
  </div>
</template>

<script>
import data from "/src/projects.json";
import GridItem from "./GridItem.vue";

export default {
  components: {
    GridItem,
  },
  data() {
    return {
      projects: data,
    };
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); */
  border-radius: 20px;
}

@media (min-width: 800px) {
  .grid {
    /* max-width: 85vw; */
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
