<template>
  <div class="box">
    <img :src="img" alt="test" />
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button class="description-button">
      <span class="circle">
        <span class="arrow"></span>
      </span>
      <span class="text"
        ><a :href="link" target="_blank">Przejdź do strony</a></span
      >
    </button>
  </div>
</template>

<script>
export default {
  props: ["img", "title", "description", "link"],
};
</script>

<style scoped>
.box {
  padding: 30px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

img {
  width: 300px;
}

p {
  width: 300px;
  /* height: 100px; */
  text-align: center;
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

.description-button a:visited {
  text-decoration: none;
}

.description-button a {
  text-decoration: none;
  color: inherit;
}

.description-button a:link,
.description-button a:visited {
  color: inherit;
}

.description-button:hover .text a {
  color: #fff;
}

.description-button:hover .text a:visited {
  color: #fff;
}

@media (min-width: 1200px) {
  p {
    height: 100px;
  }
}
</style>
