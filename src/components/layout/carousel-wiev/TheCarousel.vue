<template>
  <div class="carousel">
    <img :src="projects[currentProjectIndex].img" alt="Sudoku" />
    <div class="description">
      <h1 class="description-title">
        {{ projects[currentProjectIndex].title }}
      </h1>
      <p class="description-text">
        <strong>Opis: </strong>{{ projects[currentProjectIndex].description }}
      </p>
      <button class="description-button">
        <span class="circle">
          <span class="arrow"></span>
        </span>
        <span class="text"
          ><a :href="projects[currentProjectIndex].link" target="_blank"
            >Przejdź do strony</a
          ></span
        >
      </button>
    </div>
    <button class="btn btn--left" @click="previousProject()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        class="button-icon"
      >
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
      </svg>
    </button>
    <button class="btn btn--right" @click="nextProject()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        class="button-icon"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
      </svg>
    </button>
  </div>
</template>

<script>
import data from "/src/projects.json";

export default {
  data() {
    return {
      currentProjectIndex: 0,
      projects: data,
    };
  },
  methods: {
    previousProject() {
      if (this.currentProjectIndex === 0) {
        this.currentProjectIndex = this.projects.length - 1;
      } else {
        this.currentProjectIndex--;
      }
    },
    nextProject() {
      if (this.currentProjectIndex === this.projects.length - 1) {
        this.currentProjectIndex = 0;
      } else {
        this.currentProjectIndex++;
      }
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}

.carousel {
  width: 60vw;
  max-width: 900px;
  /* background-color: green; */
  border-radius: 20px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: center; */
  gap: 50px;
  /* padding-left: 130px; */
  position: relative;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  margin-bottom: 20px;
}
img {
  height: 250px;
  width: 250px;
  /* transform: scale(1.5); */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 270px;
}

.description-title {
  margin-bottom: 15px;
}

.description-text {
  font-size: 16px;
  margin-bottom: 20px;
  /* width: 400px; */
}

.btn {
  background-color: #fff;
  border: none;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.btn--left {
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-right: 4px;
}

.btn--right {
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  padding-left: 4px;
}

.button-icon {
  height: 50px;
  width: 50px;
  color: black;
}

.btn:hover {
  background-color: #d0d0d0;
  cursor: pointer;
}

.btn:hover .button-icon {
  transform: translateX(-3px);
  transition: transform 0.3s;
}

.btn--right:hover .button-icon {
  transform: translateX(3px);
}

/* Button 'Przejdz do strony' */

.description-button {
  position: relative;
  margin-top: 15px;
  width: 250px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 40px;
  background: #fff;
  z-index: 1;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}

.circle {
  position: absolute;
  height: 60px;
  width: 60px;
  background: #000;
  border-radius: 40px;
  left: -1px;
  top: -2px;
  z-index: 2;
  transition: 0.5s cubic-bezier(1, 0, 0.8, 1);
}

.description-button:hover .circle {
  width: 250px;
}

.arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  transform: rotate(45deg);
  top: 18px;
  left: 15px;
  transition: 0.5s;
}

.description-button:hover .arrow {
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

.description-button:hover .arrow:before {
  opacity: 1;
}

.text {
  position: absolute;
  top: 8px;
  left: 55px;
  font-size: 18px;
  /* line-height: 80px; */
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  z-index: 3;
  transition: 0.5s;
}

.description-button a {
  text-decoration: none;
}

.description-button:hover .text a {
  text-decoration: none;
  color: #fff;
}

.description-button:hover {
  cursor: pointer;
}

@media (min-width: 1200px) {
  .carousel {
    width: 80vw;
    max-width: 900px;
    /* background-color: green; */
    border-radius: 20px;
    padding: 32px;

    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: 130px;
    padding-left: 130px;
    position: relative;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
  img {
    height: 300px;
    width: 300px;
    transform: scale(1.5);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
  }

  .description-title {
    margin-bottom: 15px;
  }

  .description-text {
    font-size: 18px;
    margin-bottom: 20px;
    width: 400px;
  }

  .btn {
    background-color: #fff;
    border: none;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .btn--left {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-right: 4px;
  }

  /* Button 'Przejdz do strony' */

  .description-button {
    margin-top: 15px;
    width: 250px;
    height: 60px;
  }

  .circle {
    height: 60px;
    width: 60px;
    left: -1px;
    top: -2px;
  }

  .arrow {
    width: 20px;
    height: 20px;
    top: 18px;
    left: 15px;
  }

  .arrow:before {
    width: 35px;
    height: 3px;
    left: -10px;
    top: 10px;
  }

  .text {
    top: 10px;
    left: 55px;
    font-size: 18px;
  }
}
</style>
