<template>
  <div class="footer mt-4">
    <div class="container">
      <p class="fs-1 pt-2">BLOCKTRACR</p>
      <div class="row">
        <div class="col">
          <p class="footer-col-header">Navigazione</p>
          <ul class="p-0 list-unstyled">
            <li class="footer-link pb-2">
              <router-link class="router-link" to="/">Home</router-link>
            </li>
            <li class="footer-link pb-2">
              <router-link class="router-link" to="/livestats"
                >Live Stats</router-link
              >
            </li>
            <li class="footer-link pb-2">
              <router-link class="router-link" to="/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="footer-link pb-2">
              <router-link class="router-link" to="/login">Login</router-link>
            </li>
            <li class="footer-link pb-2">
              <router-link class="router-link" to="/register"
                >Register</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="footer-col-header">Links</p>
          <ul class="p-0 list-unstyled">
            <li>
              <a target="_blank" href="https://github.com/lorenzopalaia" class="text-decoration-none"
                ><p class="footer-link pb-2 m-0">GitHub Lorenzo</p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lorenzo-palaia-7177a5202/"
                class="text-decoration-none"
                ><p class="footer-link pb-2 m-0">LinkedIn Lorenzo</p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/giorgiokr"
                class="text-decoration-none"
                ><p class="footer-link pb-2 m-0">GitHub Giorgio</p></a
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="footer-col-header">Riguardo Blocktracr</p>
          <p class="footer-text pb-2">
            A cura di Apa Giorgio e Palaia Lorenzo. Blocktracr è un progetto
            realizzato per il corso di Linguaggi e Tecnologie per il Web
            dell'Università La Sapienza di Roma, A.A. 2021/2022
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.fs-1 {
  font-family: "Sequel100Black-85", Helvetica, Arial;
  color: #7067cf;
}

.footer-col-header {
  font-family: "Sequel100Black-85", Helvetica, Arial;
  color: #e0e0e0;
}

.footer {
  background-color: rgba(112, 103, 207, 0.1);
}

.footer-text {
  font-family: "Sequel100Black-45", Helvetica, Arial;
  color: rgba(112, 103, 207, 0.8);
}

.footer-link {
    font-family: "Sequel100Black-45", Helvetica, Arial;
    color: #2ab2fc;
}

.router-link {
  text-decoration: none;
  color: #2ab2fc;
}
</style>
