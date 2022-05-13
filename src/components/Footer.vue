<template>
  <div class="footer">
    <div class="container">
      <h1>BLOCKTRACR</h1>
      <div class="row">
        <div class="col">
          <p class="footer-col-header">Navigazione</p>
          <ul>
            <li class="footer-link">
              <router-link class="router-link" to="/">Home</router-link>
            </li>
            <li class="footer-link">
              <router-link class="router-link" to="/livestats"
                >Live Stats</router-link
              >
            </li>
            <li class="footer-link">
              <router-link class="router-link" to="/dashboard"
                >Dashboard</router-link
              >
            </li>
            <li class="footer-link">
              <router-link class="router-link" to="/login">Login</router-link>
            </li>
            <li class="footer-link">
              <router-link class="router-link" to="/register"
                >Register</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="footer-col-header">Links</p>
          <ul>
            <li>
              <a target="_blank" href="https://github.com/lorenzopalaia"
                ><p class="footer-link">GitHub Lorenzo</p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lorenzo-palaia-7177a5202/"
                ><p class="footer-link">LinkedIn Lorenzo</p></a
              >
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/giorgiokr"
                ><p class="footer-link">GitHub Giorgio</p></a
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <p class="footer-col-header">Riguardo Blocktracr</p>
          <p class="footer-text">
            A cura di Apa Giorgio e Palaia Lorenzo. Blocktracr è un progetto
            realizzato per il corso di Linguaggi e Tecnologie per il Web
            dell'Università La Sapienza di Roma, A.A. 2021/2022.
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
h1 {
  font-family: "Sequel100Black-85", Helvetica, Arial;
  color: #7067cf;
  padding-top: 16px;
}

.footer-col-header {
  font-family: "Sequel100Black-85", Helvetica, Arial;
  color: #e0e0e0;
}

.footer {
  background-color: rgba(112, 103, 207, 0.1);
  margin-top: 30px;
}

ul {
  list-style: none;
  padding: 0;
}

.footer-text {
  padding-bottom: 16px;
  font-family: "Sequel100Black-45", Helvetica, Arial;
  color: rgba(112, 103, 207, 0.8);
}

.footer-link {
    padding-bottom: 16px;
    font-family: "Sequel100Black-45", Helvetica, Arial;
    color: #2ab2fc;
}

a {
  text-decoration: none;
}

.router-link {
  text-decoration: none;
  color: #2ab2fc;
}
</style>
