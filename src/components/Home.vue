<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col text-center text-md-start">
          <h1>BLOCKTRACR</h1>
          <p>
            Tieni traccia dell'andamento del tuo portafoglio crypto.<br />Analizza
            ogni crypto presente sul mercato tramite un'interfaccia semplice e
            interattiva
          </p>
          <button type="button" class="btn btn-primary btn-lg" style="margin-right: 10px;">
            <router-link class="router-link" to="/register" style="color: white"
              >Registrati</router-link
            >
          </button>
          <button type="button" class="btn btn-outline-primary btn-lg">
            <router-link class="router-link" to="/login">Login</router-link>
          </button>
        </div>
        <div class="col d-none d-sm-block d-sm-none d-md-block">
          <img
            class="img-fluid float-end"
            src="../assets/images/eth.svg"
            alt="eth"
          />
        </div>
      </div>
      <div class="container" style="padding-top: 20px">
        <h3 class="cardsIntro">PERCHÉ BLOCKTRACR?</h3>
        <p style="color: #e0e0e0; text-align: center">
          I vantaggi di tracciare l'andamento del tuo portafoglio crypto sono
          molteplici
        </p>
        <div>
          <div class="row">
            <div class="col-sm d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/plot.svg"
                  class="card-img-top"
                  alt="plot"
                />
                <div class="card-body">
                  <p class="card-text">
                    Grafico dell'andamento temporale e delle allocazioni
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/transaction.svg"
                  class="card-img-top"
                  alt="transaction"
                />
                <div class="card-body">
                  <p class="card-text">Raccolta delle transazioni eseguite</p>
                </div>
              </div>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/profit.svg"
                  class="card-img-top"
                  alt="profit"
                />
                <div class="card-body">
                  <p class="card-text">
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "Sequel100Black-85", Helvetica, Arial;
  color: #7067cf;
}

p {
  font-family: "Sequel100Black-45", Helvetica, Arial;
  color: #e0e0e0;
}

h3 {
  color: #f5f5f5;
  text-align: center;
  font-family: "Sequel100Black-85", Helvetica, Arial;
}

.router-link {
  text-decoration: none;
}

.btn-primary {
  background-color: #2ab2fc;
  font-family: "Sequel100Black-85", Helvetica, Arial;
}
.btn-outline-primary {
  color: #2ab2fc;
  font-family: "Sequel100Black-85", Helvetica, Arial;
}
.card:hover {
  transform: scale(1.1);
}
.card {
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  width: 18rem;
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(42, 178, 252, 0.5);
}

.col-sm {
  padding-top: 20px;
}

.card-img-top {
  height: 256px;
}
</style>
