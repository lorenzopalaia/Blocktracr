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
              <router-link to="/login" v-if="!isLog">LOGIN</router-link>
              <router-link data-bs-toggle="modal" data-bs-target="#logout" to="/" v-else @click="logout()">LOGOUT</router-link>
              <div class="modal" id="logout">
                <div class="modal-dialog">
                  <div class="modal-content text-white">
                    <div style="backgroundColor: rgb(20, 15, 68)" class="modal-body justify-content-center text-center">
                      <p class="m-0">Ti sei disconnesso correttamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/register" v-if="!isLog">REGISTRATI</router-link>
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
      this.emitter.emit("loggedOut");
      this.$router.push("/")
    },
  },
  mounted() {
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) //check if token exists
      this.isLog = true;
    this.emitter.on("loggedIn", () => { //event handler
      this.isLog = true;
    })
  }
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
