<template>
  <CoinsBar></CoinsBar>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import CoinsBar from "./components/CoinsBar.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { CoinsBar, Navbar },
};
</script>

<style>
@font-face {
  font-family: "Sequel100Black-85";
  src: local("Sequel100Black-85"),
    url(./assets/fonts/Sequel100Black-85.ttf) format("truetype");
}
@font-face {
  font-family: "Sequel100Black-45";
  src: local("Sequel100Black-45"),
    url(./assets/fonts/Sequel100Black-45.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
