<template>
  <header>
    <div class="left">
      <img src="/src/images/goat-logo3.png" alt="Goat logo" />
      <div class="text-content">
        <h1>Kompendium Projektów Web-Dev</h1>
        <h2>Tomasz Koziołek</h2>
        <a href="https://github.com/tomaszkoziolek?tab=repositories">GitHub</a>
      </div>
    </div>
    <div class="right">
      <the-nav></the-nav>
    </div>
  </header>
</template>

<script>
import TheNav from "../UI/TheNav.vue";

export default {
  components: {
    TheNav,
  },
};
</script>

<style scoped>
* {
  color: white;
}

header {
  /* background-color: red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  align-items: center;
}

img {
  height: 15vh;
  width: auto;
  max-height: 150px;
}

h1 {
  font-size: 16px;
}

h2 {
  font-size: 15px;
  font-style: italic;
  font-weight: normal;
  margin-bottom: 5px;
}

a {
  display: inline-block;
  display: flex;
  background-color: rgb(15, 0, 222);
  width: 100px;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 10px;
}

a:link {
  text-decoration: none;
}

a:hover {
  background-color: rgba(15, 0, 222, 0.786);
}

.right {
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 30px;
}

@media (min-width: 768px) {
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>
