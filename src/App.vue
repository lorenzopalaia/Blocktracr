<template>
  <CoinsBar></CoinsBar>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-inverse">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/livestats">LIVE STATS</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard">DASHBOARD</router-link>
          </li>
        </ul>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/login">LOGIN</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register">REGISTER</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import CoinsBar from "./components/CoinsBar.vue";
export default {
  name: "App",
  components: { CoinsBar },
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

nav {
  padding: 30px;
  background-color: transparent;
}

nav a {
  font-weight: bold;
  color: #f5f5f5;
  padding: 20px;
  text-decoration: none;
}

nav a:hover {
  color: #7067cf;
}

nav a.router-link-exact-active {
  color: #2ab2fc;
}
</style>
