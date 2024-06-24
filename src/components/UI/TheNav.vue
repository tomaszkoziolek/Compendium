<template>
  <nav>
    <ul class="sidebar" :style="{ display: sidebarOn ? 'flex' : 'none' }">
      <li @click="hideSidebar">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </a>
      </li>
      <li><a href="#">Kontakt</a></li>
      <li><a href="#">O mnie</a></li>
    </ul>
    <ul>
      <li class="hideOnMobile"><a href="#">Kontakt</a></li>
      <li class="hideOnMobile"><a href="#">O mnie</a></li>
      <li class="menu-button" @click="showSidebar()">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sidebarOn: false,
    };
  },
  methods: {
    showSidebar() {
      this.sidebarOn = true;
    },
    hideSidebar() {
      this.sidebarOn = false;
    },
  },
};
</script>

<style scoped>
nav ul {
  width: 100%;
  list-style: none;
  display: flex;
  margin-right: 30px;
  gap: 25px;
}

nav a {
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100px;
  border-radius: 15px;
  text-decoration: none;
  background-color: rgb(15, 0, 222);
  color: white;
}

nav a:hover {
  background-color: rgba(15, 0, 222, 0.786);
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: 150px;
  background-color: black;
  display: none;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 10px;
  margin-right: 0;
  margin-top: 20px;
}

.menu-button {
  display: none;
}
@media (max-width: 800px) {
  .hideOnMobile {
    display: none;
  }

  .menu-button {
    display: block;
  }
}
</style>
