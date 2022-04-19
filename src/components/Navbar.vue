<template>
  <nav class="navbar navbar-expand-lg navbar-dark navbar-inverse">
    <div class="container">
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background-color: transparent;
}

nav a {
  font-weight: bold;
  color: #f5f5f5;
  padding-right: 20px;
  text-decoration: none;
}

nav a:hover {
  color: #7067cf;
}

nav a.router-link-exact-active {
  color: #2ab2fc;
}

.nav-item {
  font-family: "Sequel100Black-45", Helvetica, Arial;
}
</style>
