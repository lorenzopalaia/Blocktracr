<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <p class="fs-1 m-2 card-text">Bentornato, {{ this.name }} 👋🏻</p>
          </div>
          <div class="card-body">
            <div v-if="apiStatus === 'waiting'" class="m-2">
              <p class="card-text d-inline">In attesa di</p>
              <p class="card-text d-inline text-primary"> stabilire una connessione</p>
              <p class="card-text d-inline"> con l'exchange</p>
            </div>
            <div v-else-if="apiStatus === 'not set'" class="m-2">
              <p class="card-text d-inline">Credenziali dell'exchange </p>
              <p class="card-text d-inline text-warning">non ancora impostate</p>
              <p class="card-text d-inline">. Aggiungi i tuoi dati</p>
            </div>
            <div v-else-if="apiStatus === 'uncorrect'" class="m-2">
              <p class="card-text d-inline">Credenziali dell'exchange </p>
              <p class="card-text d-inline text-danger">non valide</p>
              <p class="card-text d-inline">. Modifica i tuoi dati</p>
            </div>
            <div v-else-if="apiStatus === 'correct'" class="m-2">
              <p class="card-text d-inline">Stiamo </p>
              <p class="card-text d-inline text-success">recuperando i tuoi dati</p>
              <p class="card-text d-inline"> dall'exchange. Attendi...</p>
            </div>
            <div v-else-if="apiStatus === 'set'" class="m-2">
              <p class="card-text d-inline">Ecco a te il resconoto del tuo wallet. Qui puoi </p>
              <p class="card-text d-inline text-primary">modificare</p>
              <p class="card-text d-inline"> i tuoi dati oppure </p>
              <p class="card-text d-inline text-danger">eliminare</p>
              <p class="card-text d-inline"> il tuo account</p>
            </div>
            <!-- Edit user button -->
            <button
              type="button"
              class="btn btn-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#profilo"
            >
              <p class="sequel-font-big m-0">Modifica profilo</p>
            </button>
            <div class="modal" id="profilo">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!--Header-->
                  <form>
                    <div class="modal-header">
                      <p class="modal-title h4 card-text">Modifica Profilo</p>
                    </div>
                    <!-- Body -->
                    <div class="modal-body justify-content-center">
                      <!--modifica email-->
                      <p class="card-text">La tua email è {{ email }}</p>
                      <div>
                        <label for="nuovaEmail" class="form-label"
                          ><p class="card-text">Nuova email:</p></label
                        >
                        <input
                          type="email"
                          id="nuovaEmail"
                          placeholder="Email"
                          v-model="newEmail"
                          autocomplete="off"
                          class="m-2"
                        />
                      </div>
                      <!--modifica password-->
                      <div id="collapsePassword">
                        <label for="nuovaPassword" class="form-label"
                          ><p class="card-text">Nuova password:</p></label
                        >
                        <input
                          type="password"
                          id="nuovaPassword"
                          placeholder="Password"
                          v-model="password"
                          autocomplete="off"
                          class="m-2"
                        />
                      </div>
                    </div>
                    <!-- Footer -->
                    <div class="modal-footer">
                      <button class="btn btn-primary" @click="edit" >
                        <p class="sequel-font-big m-0">Modifica</p>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        <p class="sequel-font-big m-0">Annulla</p>
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-danger m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#elimina"
                      >
                        <p class="sequel-font-big m-0">
                          Elimina
                        </p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal" id="elimina">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <p class="card-text">Sei sicuro di voler eliminare l'account?</p>
                    <button class="btn btn-danger" data-bs-dismiss="modal" @click="remove">
                      <p class="sequel-font-big m-0">Si</p>
                    </button>
                    <button class="btn btn-primary m-2" data-bs-dismiss="modal">
                      <p class="sequel-font-big m-0">No</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Add/modify wallet button -->
            <button
              type="button"
              class="btn btn-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#wallet"
            >
              <p
                v-if="apiStatus === 'not set'"
                class="sequel-font-big m-0"
              >
                Aggiungi wallet
              </p>
              <p v-else class="sequel-font-big m-0">Modifica wallet</p>
            </button>
            <div class="modal" id="wallet">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form>
                    <!-- Header -->
                    <div class="modal-header">
                      <p
                        v-if="apiStatus === 'not set'"
                        class="modal-title card-text h4"
                      >
                        Aggiungi wallet
                      </p>
                      <p v-else class="modal-title card-text h4">
                        Modifica wallet
                      </p>
                    </div>

                    <!-- Body -->
                    <div class="modal-body justify-content-center">
                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label
                            for="exchange"
                            style="backgroundcolor: transparent"
                            ><p class="card-text">Exchange:</p></label
                          >
                        </div>
                        <select
                          class="custom-select card-text bg-transparent"
                          id="exchange"
                          v-model="name_exchange"
                          style="
                            borderColor: transparent;
                            color: #7067cf;
                            borderBottomColor: #7067cf;
                          "
                          required
                        >
                          <option
                            v-for="exchange in exchanges"
                            :key="exchange"
                            :value="exchange"
                          >
                            <p class="card-text text-capitalize">
                              {{ exchange }}
                            </p>
                          </option>
                        </select>
                      </div>
                      <label for="api_key" class="form-label"
                        ><p class="card-text">API Key:</p></label
                      >
                      <input
                        type="text"
                        id="api_key"
                        v-model="newApiKey"
                        placeholder="API Key"
                        required
                        class="m-2"
                      />
                      <label for="api_secret" class="form-label"
                        ><p class="card-text">API Secret:</p></label
                      >
                      <input
                        type="text"
                        id="api_secret"
                        v-model="newApiSecret"
                        placeholder="API Secret"
                        required
                        class="m-2"
                      />
                    </div>

                    <!-- Footer -->
                    <div class="modal-footer">
                      <button
                        class="btn btn-primary brn-block"
                        @click="add" 
                      >
                        <p
                          v-if="apiStatus === 'not set'"
                          class="sequel-font-big m-0"
                        >
                          Aggiungi
                        </p>
                        <p v-else class="sequel-font-big m-0">Modifica</p>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        <p class="sequel-font-big m-0">Annulla</p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- Refresh button -->
            <button
              type="button"
              class="btn btn-primary m-2"
              @click="this.$router.go()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path
                  d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <p class="card-text fs-1 m-2">${{ user_total.toFixed(2) }}</p>
            <p
              class="m-2 text-success fs-5 d-inline sequel-font-small"
              v-if="user_24h_PL >= 0"
            >
              ${{ user_24h_PL.toFixed(2) }}
            </p>
            <p
              class="m-2 fs-5 d-inline sequel-font-small text-danger"
              v-else
            >
              -${{ Math.abs(user_24h_PL).toFixed(2) }}
            </p>
            <p
              class="m-2 fs-5 d-inline sequel-font-small text-success"
              v-if="user_24h_PL_percent >= 0"
            >
              {{ user_24h_PL_percent.toFixed(2) }}%
            </p>
            <p
              class="m-2 fs-5 d-inline sequel-font-small text-danger"
              v-else
            >
              -${{ Math.abs(user_24h_PL_percent).toFixed(2) }}%
            </p>
          </div>
          <div v-if="tableLoaded" class="card-body">
            <table class="table rounded text-uppercase text-white bg-transparent">
              <thead>
                <tr>
                  <th v-for="title in titles" :key="title">
                    {{ title }}
                  </th>
                  <th class="d-none d-md-table-cell">24h P/L</th>
                  <th class="d-none d-md-table-cell">24h% P/L</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(key, coin) in user_data" :key="key">
                  <td class="text-white">
                    {{ coin }}
                  </td>
                  <td class="text-white">
                    {{ key.amount }}
                  </td>
                  <td class="text-white">
                    ${{ (key.last * key.amount).toFixed(2) }}
                  </td>
                  <td class="text-white">${{ key.last }}</td>
                  <td class="d-none d-md-table-cell">
                    <p v-if="key.change < 0" class="text-danger">
                      -${{ Math.abs(key.change * key.amount).toFixed(2) }}
                    </p>
                    <p v-else class="text-success">
                      ${{ (key.change * key.amount).toFixed(2) }}
                    </p>
                  </td>
                  <td class="d-none d-md-table-cell">
                    <p v-if="key.changePercentage < 0" class="text-danger">
                      {{ key.changePercentage.toFixed(2) }}%
                    </p>
                    <p v-else class="text-success">
                      {{ key.changePercentage.toFixed(2) }}%
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="chartLoaded" class="row mb-4">
      <div class="col-12 col-lg-6 mt-4">
        <div class="card">
          <div class="card-header">
            <p class="fs-1 card-text">Allocazione</p>
          </div>
          <div class="card-body">
            <Doughnut
              :chart-data="doughnutChartData"
              :chart-options="doughnutChartOptions"
              class="m-4"
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6 mt-4">
        <div class="card">
          <div class="card-header">
            <p class="fs-1 card-text">24h% P/L</p>
          </div>
          <div class="card-body">
            <Bar
              :chart-data="barChartData"
              :chart-options="barChartOptions"
              class="m-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import palette from "google-palette";
import { Doughnut } from "vue-chartjs";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LinearScale,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  LinearScale,
  CategoryScale
);

export default {
  name: "Dashboard",
  components: { Doughnut, Bar },
  data() {
    return {
      apiStatus: "waiting",
      titles: ["Coin", "Quantità", "Totale", "Prezzo"],
      token: "",
      name: "",
      email: "",
      newEmail: "",
      newApiKey: "",
      newApiSecret: "",
      password: "",
      name_exchange: "",
      api_key: "",
      api_secret: "",
      exchanges: [],
      user_data: {},
      user_total: 0,
      user_24h_PL: 0,
      user_24h_PL_percent: 0,
      user_percentages: [],
      tableLoaded: false,
      chartLoaded: false,
      doughnutChartData: {
        labels: [],
        datasets: [
          {
            label: "Allocazione",
            data: [],
            backgroundColor: [],
            borderColor: "transparent",
          },
        ],
      },
      barChartData: {
        labels: [],
        datasets: [
          {
            label: "24h% P/L",
            data: [],
            backgroundColor: [],
            borderColor: "transparent",
          },
        ],
      },
      doughnutChartOptions: {
        responsive: true,
        scales: {
          display: false,
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => { return tooltipItem.label + ": " + tooltipItem.raw.toFixed(2) + "%" }
            }
          }
        }
      },
      barChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => { return tooltipItem.raw.toFixed(2) + "%" }
            }
          }
        }
      },
    };
  },
  methods: {
    setUserTotal() {
      this.user_total = 0;
      Object.keys(this.user_data).forEach((key) => {
        this.user_total +=
          this.user_data[key].amount * this.user_data[key].last;
      });
    },
    setUser24hPL() {
      this.user_24h_PL = 0;
      Object.keys(this.user_data).forEach((key) => {
        this.user_24h_PL +=
          this.user_data[key].amount * this.user_data[key].change;
      });
    },
    setUser24hPLPercent() {
      this.user_24h_PL_percent = (this.user_24h_PL / (this.user_total - this.user_24h_PL)) * 100;
    },
    setChartData() {
      this.doughnutChartData.labels = Object.keys(this.user_data);
      this.barChartData.labels = Object.keys(this.user_data);
      let user_24h_PLs_percent = [];
      Object.keys(this.user_data).forEach((key) => {
        this.user_percentages.push(((this.user_data[key].amount * this.user_data[key].last) / this.user_total) * 100);
        user_24h_PLs_percent.push(this.user_data[key].changePercentage);
      });
      this.doughnutChartData.datasets[0].data = this.user_percentages;
      this.barChartData.datasets[0].data = user_24h_PLs_percent;
    },
    setChartPalette() {
      const pal = palette("tol", this.user_percentages.length).map(function (hex) { return "#" + hex; });
      this.doughnutChartData.datasets[0].backgroundColor = pal;
      this.barChartData.datasets[0].backgroundColor = pal;
    },
    async getData() {
      if (this.api_key === "" || this.api_secret === "") {
        this.apiStatus = "not set";
        return;
      }
      const exchangeId = this.name_exchange,
        exchangeClass = ccxt[exchangeId],
        exchange = new exchangeClass({
          apiKey: this.api_key,
          secret: this.api_secret,
          proxy: "https://dashboard-cors.herokuapp.com/", // our custom proxy to avoid CORS
        });
      try {
        let data = await exchange.fetchBalance();
        this.apiStatus = "correct";
        // data cleaning
        data = data.total;
        Object.keys(data).forEach((key) => {
          if (data[key] <= 0) delete data[key];
        });
        this.user_data = data;
        let symbols = Object.keys(this.user_data).map((key) => key + "/USDT");
        symbols = await exchange.fetchTickers(symbols);
        Object.keys(symbols).forEach((key) => {
          symbols[key.replace("/USDT", "")] = symbols[key];
          delete symbols[key];
        });
        Object.keys(this.user_data).forEach((key) => {
          this.user_data[key] = {
            amount: this.user_data[key],
            last: symbols[key].last,
            changePercentage: symbols[key].percentage, //last 24h percentage
            change: symbols[key].change, //last 24h change in USD
          };
        });
        //compute user total in USD
        this.setUserTotal();
        //compute cumulative user 24h P/L
        this.setUser24hPL();
        //compute cumulative user 24h P/L percentage
        this.setUser24hPLPercent();
        this.tableLoaded = true;
        //add data to charts
        this.setChartData();
        //set chart's color palette
        this.setChartPalette();
        // set chart rendering flag to true
        this.chartLoaded = true;
        this.apiStatus = "set";
      } catch (err) {
        if (err instanceof ccxt.AuthenticationError)
          this.apiStatus = "uncorrect";
      }
    },
    async getExchanges() {
      this.exchanges = await ccxt.exchanges;
    },
    //eliminazione account
    async remove() {
      await axios
        .delete("http://localhost:5000/delete", {
          headers: { token: this.token },
        })
        .then((res) => {
          if (res.status === 404) {
            console.log("utente non eliminato");
          } else {
            localStorage.clear();
            sessionStorage.clear();
            this.emitter.emit("loggedOut");
            this.$router.push("/");
          }
        });
    },
    //modifica profilo
    async edit() {
      let user = {
        token: this.token,
        email: this.newEmail,
        password: this.password,
      };      
      if(document.getElementById("nuovaEmail").checkValidity() || this.password !== "") {
        await axios.post("http://localhost:5000/user", user).then((res) => {
          if (res.status === 405) {
            console.log("account non modificato");
          } else 
            controle.log("account modificato");
        });
      }
    },
    //aggiungi wallet
    async add() {
      let wallet = {
        token: this.token,
        name_exchange: this.name_exchange,
        api_key: this.newApiKey,
        api_secret: this.newApiSecret,
      };
      if(this.newApiKey !== "" && this.newApiSecret !== "" && this.name_exchange !== ""){
        await axios.put("http://localhost:5000/user", wallet).then((res) => {
          if (res.status === 405) {
            console.log("account non modificato");
          } else {
            console.log("account modificato");
            this.api_key = this.newApiKey;
            this.api_secret = this.newApiSecret;
          }
        });
      }
    },
    async getDataFromServer() {
      // get user data from server
      await axios
        .get("http://localhost:5000/user", { headers: { token: this.token } })
        .then((res) => {
          this.name = res.data.user.name;
          this.email = res.data.user.email;
          this.name_exchange = res.data.user.name_exchange;
          this.api_key = res.data.user.api_key;
          this.api_secret = res.data.user.api_secret;
        });
      this.getData();
    },
    getToken() {
      // get user token and store it in a variable
      if (localStorage.getItem("token"))
        this.token = localStorage.getItem("token");
      else if (sessionStorage.getItem("token"))
        this.token = sessionStorage.getItem("token");
    },
    redirectOnMissingToken() {
      if (
        localStorage.getItem("token") === null &&
        sessionStorage.getItem("token") === null
      ) {
        this.$router.push("/login");
      }
    }
  },
  mounted() {
    this.getExchanges();
    this.getToken();
    this.getDataFromServer();
  },
  created() {
    this.redirectOnMissingToken();
  },
};
</script>

<style scoped>
.card {
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  height: 100%;
}

.modal-content {
  background-color: rgb(20, 15, 68);
}

.sequel-font-big {
  font-family: "Sequel100Black-85", Helvetica, Arial;
}
.sequel-font-small {
  font-family: 'Sequel100Black-45', Helvetica, Arial;
}

.card-text {
  color: #e0e0e0;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}
input {
  background: transparent;
  color: #7067cf !important;
  font-family: "Sequel100Black-45", Helvetica, Arial;
  border-color: transparent;
  border-bottom-color: #7067cf !important;
  border-radius: 0 !important;
}

input:focus {
  background: transparent;
  outline-width: 0;
}

input::placeholder {
  color: #7067cf;
}
</style>
