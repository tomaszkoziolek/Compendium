<template>
  <header>
    <div class="main-header">
      <img src="/src/images/goat-logo1.png" />
      <div class="main-header-text-container">
        <h2>Kompendium Prywatnych Projektów Web-Dev</h2>
        <h4>Tomasz Koziołek</h4>
        <a href="https://github.com/tomaszkoziolek">GitHub</a>
      </div>
    </div>
    <nav>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 15vh;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
}

.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2%;
  gap: 2%;
}

.main-header img {
  height: 80%;
  width: auto;
}
</style>
