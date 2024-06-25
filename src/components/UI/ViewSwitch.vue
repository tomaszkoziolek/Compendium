<template>
  <div class="view-switch">
    <button
      class="btn btn--carousel"
      :style="{ display: currentView === 'grid' ? '' : 'none' }"
      @click="toggleView()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        class="btn-icon"
      >
        <path
          d="M80-360v-240q0-33 23.5-56.5T160-680q33 0 56.5 23.5T240-600v240q0 33-23.5 56.5T160-280q-33 0-56.5-23.5T80-360Zm280 160q-33 0-56.5-23.5T280-280v-400q0-33 23.5-56.5T360-760h240q33 0 56.5 23.5T680-680v400q0 33-23.5 56.5T600-200H360Zm360-160v-240q0-33 23.5-56.5T800-680q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280q-33 0-56.5-23.5T720-360Zm-360 80h240v-400H360v400Zm120-200Z"
        />
      </svg>
    </button>
    <button
      class="btn btn--grid"
      :style="{ display: currentView === 'carousel' ? '' : 'none' }"
      @click="toggleView()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        class="btn-icon"
      >
        <path
          d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentView: "carousel",
    };
  },
  methods: {
    toggleView() {
      if (this.currentView === "carousel") {
        this.currentView = "grid";
        this.$emit("toggle-view", "grid-layout");
      } else {
        this.currentView = "carousel";
        this.$emit("toggle-view", "carousel-layout");
      }
    },
  },
};
</script>

<style scoped>
.view-switch {
  display: flex;
  gap: 10px;
  position: fixed;
  top: 20px;
  right: 20px;
}

.btn {
  width: 60px;
  height: 60px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  border: none;
  background-color: #fff;
  border-radius: 20px;
}

.btn-icon {
  width: 40px;
  height: 40px;
  color: #000;
}

.btn:hover {
  cursor: pointer;
  background-color: #55555514;
}

.btn::after {
  content: "Zmień widok";
  position: absolute;
  left: -100px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, left 0.3s;
}

.btn:hover::after {
  left: -110px;
  opacity: 1;
  visibility: visible;
}
</style>
