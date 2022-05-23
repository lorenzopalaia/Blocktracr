<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col text-center text-md-start">
          <p class="fs-1 sequel-font-big">BLOCKTRACR</p>
          <p class="sequel-font-small">
            Tieni traccia dell'andamento del tuo portafoglio crypto.<br />Analizza
            ogni crypto presente sul mercato tramite un'interfaccia semplice e
            interattiva
          </p>
          <button v-if="!isLog" type="button" class="btn btn-primary btn-lg sequel-font-big">
            <router-link class="text-decoration-none text-white" to="/register"
              >Registrati</router-link
            >
          </button>
          <button v-if="!isLog" type="button" class="btn btn-outline-primary btn-lg m-2 sequel-font-big">
            <router-link class="text-decoration-none" to="/login">Login</router-link>
          </button>
          <button v-if="isLog" type="button" class="btn btn-primary btn-lg sequel-font-big">
            <router-link class="text-decoration-none text-white" to="/dashboard"
              >Dashboard</router-link
            >
          </button>
        </div>
        <div class="col d-none d-sm-block d-sm-none d-md-block">
          <!-- img-fluid makes images responsive, float-end attaches images on the right side of column -->
          <img
            class="img-fluid float-end"
            src="../assets/images/eth.svg"
            alt="eth"
          />
        </div>
      </div>
      <div class="container mt-4">
        <p class="fs-3 text-center sequel-font-big">PERCHÉ BLOCKTRACR?</p>
        <p class="text-center sequel-font-small">
          I vantaggi di tracciare l'andamento del tuo portafoglio crypto sono molteplici
        </p>
        <div>
          <div class="row">
            <div class="col-sm pt-4 d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/plot.svg"
                  class="card-img-top"
                  alt="plot"
                />
                <div class="card-body">
                  <p class="card-text sequel-font-small">
                    Grafico dell'andamento temporale
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm pt-4 d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/transaction.svg"
                  class="card-img-top"
                  alt="transaction"
                />
                <div class="card-body">
                  <p class="card-text sequel-font-small">Raccolta delle allocazioni del wallet</p>
                </div>
              </div>
            </div>
            <div class="col-sm pt-4 d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/profit.svg"
                  class="card-img-top"
                  alt="profit"
                />
                <div class="card-body">
                  <p class="card-text sequel-font-small">
                    Statistiche dettagliate su profitti e perdite
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isLog: false
    }
  },
  methods: {
    loginLogoutEventHandler() {
      if (localStorage.getItem('token') || sessionStorage.getItem('token')) // check if token exists
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sequel-font-big {
  font-family: "Sequel100Black-85", Helvetica, Arial;
}

.sequel-font-small {
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

.fs-1 {
  color: #7067cf;
}

p {
  color: #e0e0e0;
}

.card:hover {
  transform: scale(1.1);
}
.card {
  transition: transform 0.2s ease;
  width: 18rem;
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(42, 178, 252, 0.5);
}

.card-img-top {
  height: 256px;
}
</style>
