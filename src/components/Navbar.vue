<template>
  <nav class="navbar navbar-expand-lg navbar-dark fw-bold sticky-top">
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
        <ul class="navbar-nav" id="menu">
          <li class="nav-item">
            <router-link class="text-decoration-none" to="/">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-decoration-none" to="/livestats">LIVE STATS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-decoration-none" to="/dashboard">DASHBOARD</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="text-decoration-none" to="/login" v-if="!isLog">LOGIN</router-link>
            <router-link class="text-decoration-none" data-bs-toggle="modal" data-bs-target="#logout" to="/" v-else @click="logout()">LOGOUT</router-link>
          </li>
          <li class="nav-item">
            <router-link class="text-decoration-none" to="/register" v-if="!isLog">REGISTRATI</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="modal" id="logout">
    <div class="modal-dialog">
      <div class="modal-content text-white">
        <div style="backgroundColor: rgb(20, 15, 68)" class="modal-body justify-content-center text-center">
          <p class="m-0 sequel-font-small">Ti sei disconnesso correttamente</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLog: false
    }
  },
  methods: {
    logout(){
      localStorage.clear();
      sessionStorage.clear();
      this.isLog = false;
      this.emitter.emit("loggedOut"); // emit logout event
      this.$router.push("/") // mount homepage component in order to redirect user after logout
    },
    loginLogoutEventHandler() {
      if (localStorage.getItem('token') || sessionStorage.getItem('token')) // check if token exists in localStorage or sessionStorage
        this.isLog = true;
      this.emitter.on("loggedIn", () => { // event handler
        this.isLog = true;
      })
      this.emitter.on("loggedOut", () => { // event handler
        this.isLog = false;
      })
    }
  },
  mounted() {
    this.loginLogoutEventHandler();
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgb(5, 10, 48);
}

.sequel-font-small {
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

nav a {
  color: #f5f5f5;
  padding-right: 20px;
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
