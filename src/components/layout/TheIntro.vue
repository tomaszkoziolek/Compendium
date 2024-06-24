<template>
  <div class="container">
    <div class="content" :class="{ show: contentIsVisible }">
      <img src="/src/images/goat-logo3.png" alt="Goat logo" />
      <div class="text-content">
        <h1>Kompendium Prywatnych Projektów Web-Dev</h1>
        <h2>Tomasz Koziołek</h2>
        <!-- <a href="https://github.com/tomaszkoziolek">GitHub</a> -->
        <button class="btn" @click="goToMainPage">
          <span class="circle">
            <span class="arrow"></span>
          </span>
          <span class="text">Kontynuuj</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["change-component"],
  data() {
    return {
      contentIsVisible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.contentIsVisible = true;
    }, 100);
  },
  methods: {
    goToMainPage() {
      this.$emit("change-component", "main-page");
    },
  },
};
</script>

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
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}

.text-content {
  text-align: center;
  font-size: 12px;
}

h1 {
  margin-bottom: 20px;
}

h2 {
  font-style: italic;
}

/* Button */

.btn {
  position: relative;
  margin-top: 25px;
  width: 300px;
  height: 80px;
  border: 2px solid #000;
  border-radius: 40px;
  background: #fff;
  z-index: 1;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}

.circle {
  position: absolute;
  height: 80px;
  width: 80px;
  background: #000;
  border-radius: 40px;
  left: -1px;
  top: -2px;
  z-index: 2;
  transition: 0.5s cubic-bezier(1, 0, 0.8, 1);
}

.btn:hover .circle {
  width: 300px;
}

.arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg);
  top: 30px;
  left: 25px;
  transition: 0.5s;
}

.btn:hover .arrow {
  left: 40px;
}

.arrow:before {
  content: "";
  position: absolute;
  width: 35px;
  height: 3px;
  background: #fff;
  transform: rotate(-45deg);
  left: -10px;
  top: 10px;
  opacity: 0;
  transition: 0.5s;
}

.btn:hover .arrow:before {
  opacity: 1;
}

.text {
  position: absolute;
  top: 0;
  left: 92px;
  font-size: 25px;
  line-height: 80px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  z-index: 3;
  transition: 0.5s;
}

.btn:hover .text {
  color: #fff;
}

.btn:hover {
  cursor: pointer;
}

/* animacja pojawiania sie kontentu */

.content {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 2.5s ease;
}

.content.show {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) {
  .content {
    flex-direction: row;
    padding: 100px;
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
