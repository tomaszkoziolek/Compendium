<template>
  <header>
    <div class="left">
      <img src="/src/images/goat-logo3.png" alt="Goat logo" />
      <div class="text-content">
        <h1>Portfolio Projektów</h1>
        <h1>Web-Dev</h1>
        <h2>Tomasz Koziołek</h2>
        <a
          href="https://github.com/tomaszkoziolek?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
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
  /* color: white; */
}

header {
  /* background-color: red; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
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
  font-size: 15px;
}

h2 {
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
  margin-bottom: 5px;
}

a {
  display: inline-block;
  display: flex;
  background-color: rgb(77, 77, 77);
  color: white;
  width: 100px;
  justify-content: center;
  align-items: center;
  height: 30px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

a:link {
  text-decoration: none;
}

a:hover {
  background-color: rgba(77, 77, 77, 0.636);
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
