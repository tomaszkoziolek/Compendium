<template>
  <div class="container">
    <div class="content">
      <img src="/src/images/goat-logo1.png" alt="Goat logo" />
      <div class="text-content">
        <h1>Kompendium Prywatnych Projektów Web-Dev</h1>
        <h2>Tomasz Koziołek</h2>
        <!-- <a href="https://github.com/tomaszkoziolek">GitHub</a> -->
        <button class="arrow-button">
          <i class="arrow right"></i>
          <i class="arrow right"></i>
          <i class="arrow right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
  max-width: 700px;
  height: auto;
  margin-bottom: 20px;
  border: 2px solid white;
  border-radius: 10px;
}

.text-content {
  text-align: center;
  font-size: 12px;
}

h1 {
  margin-bottom: 20px;
}

/* Button */

button {
  width: 70%;
  height: 5vh;
  max-height: 60px;
  margin-top: 30px;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
  }

  img {
    width: 40%;
    margin-bottom: 0;
  }

  .text-content {
    width: 60%;
    padding-left: 60px;
    /* white-space: nowrap; */
    font-size: 1vw;
  }
}
</style>
