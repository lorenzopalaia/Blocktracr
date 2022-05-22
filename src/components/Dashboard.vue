<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <p class="h1 m-2 card-text">Bentornato, {{ this.name }} 👋🏻</p>
          </div>
          <div class="card-body">
            <!-- Bottone modifica profilo-->
            <button
              type="button"
              class="btn btn-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#profilo"
            >
              <p class="card-text">Modifica profilo</p>
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
                      <br />
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
                      <div
                        class="alert alert-primary"
                        role="alert"
                        v-if="modifica"
                      >
                        Account modificato
                      </div>
                    </div>
                    <!-- Footer -->
                    <div class="modal-footer">
                      <button class="btn btn-primary" @click="edit">
                        <p class="card-text">Modifica</p>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        <p class="card-text">Annulla</p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!--aggiungi wallet-->
            <button
              type="button"
              class="btn btn-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#wallet"
            >
              <p class="card-text">Aggiungi wallet</p>
            </button>
            <div class="modal" id="wallet">
              <div class="modal-dialog">
                <div class="modal-content">
                  <form>
                    <!-- Header -->
                    <div class="modal-header">
                      <p class="modal-title card-text h4">Aggiungi wallet</p>
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
                          class="custom-select card-text"
                          id="exchange"
                          v-model="name_exchange"
                          style="backgroundColor: transparent; borderColor: transparent; color: #7067cf; borderBottomColor: #7067cf"
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
                      <br />
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
                        href="#"
                        class="btn btn-primary brn-block"
                        @click="add"
                      >
                        <p class="card-text">Aggiungi</p>
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        <p class="card-text">Annulla</p>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <p class="card-text h1 m-2">${{ user_total.toFixed(2) }}</p>
            <p
              style="
                display: inline;
                font-family: 'Sequel100Black-45', Helvetica, Arial;
              "
              class="m-2 text-success h5"
              v-if="user_24h_PL >= 0"
            >
              ${{ user_24h_PL.toFixed(2) }}
            </p>
            <p
              style="
                display: inline;
                font-family: 'Sequel100Black-45', Helvetica, Arial;
              "
              class="m-2 h5 text-danger"
              v-else
            >
              -${{ Math.abs(user_24h_PL).toFixed(2) }}
            </p>
            <p
              style="
                display: inline;
                font-family: 'Sequel100Black-45', Helvetica, Arial;
              "
              class="m-2 h5 text-success"
              v-if="user_24h_PL_percent >= 0"
            >
              {{ user_24h_PL_percent.toFixed(2) }}%
            </p>
            <p
              style="
                display: inline;
                font-family: 'Sequel100Black-45', Helvetica, Arial;
              "
              class="m-2 h5 text-danger"
              v-else
            >
              -${{ Math.abs(user_24h_PL_percent).toFixed(2) }}%
            </p>
          </div>
          <div class="card-body">
            <table class="table rounded text-uppercase text-white">
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
                  <td class=" d-none d-md-table-cell">
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
                      {{ key.changePercentage /*.toFixed(2)*/ }}%
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col mt-4">
        <div class="card">
          <div class="card-header">
            <h1 class="card-text">Allocazione</h1>
          </div>
          <div class="card-body">
            <Doughnut
              :chart-data="doughnutChartData"
              :chart-options="doughnutChartOptions"
              :height="100"
              class="m-4"
            />
          </div>
        </div>
      </div>
      <div class="col mt-4">
        <div class="card">
          <div class="card-header">
            <h1 class="card-text">24h% P/L</h1>
          </div>
          <div class="card-body">
            <Bar
              :chart-data="barChartData"
              :chart-options="barChartOptions"
              :height="400"
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
      modifica: false,
      exchanges: [],
      user_data: {},
      user_total: 0,
      user_24h_PL: 0,
      user_24h_PL_percent: 0,
      user_percentages: [],
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
      },
      barChartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    async getData() {
      const exchangeId = this.name_exchange,
        exchangeClass = ccxt[exchangeId],
        exchange = new exchangeClass({
          apiKey: this.api_key, //"eTTdvdRluP7o3P3egzbaHH2inaRCX7ZV6EwokdracUitTtiAnXlRSxpgJCgxUgL5"
          secret: this.api_secret, //"bpqwwR0pBrxwGVsuVTg6H1FNjybVBo8Bu96rtSvJEV70YhBqXuCC2zcoBRMvQXJT"
          proxy: "https://dashboard-cors.herokuapp.com/",
        });
      console.log(exchange);
      let data = await exchange.fetchBalance();
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
      this.user_total = 0;
      Object.keys(this.user_data).forEach((key) => {
        this.user_total +=
          this.user_data[key].amount * this.user_data[key].last;
      });
      //compute cumulative user 24h P/L
      this.user_24h_PL = 0;
      Object.keys(this.user_data).forEach((key) => {
        this.user_24h_PL +=
          this.user_data[key].amount * this.user_data[key].change;
      });
      //compute cumulative user 24h P/L percentage
      this.user_24h_PL_percent =
        (this.user_24h_PL / (this.user_total - this.user_24h_PL)) * 100;
      //add data to charts
      this.doughnutChartData.labels = Object.keys(this.user_data);
      this.barChartData.labels = Object.keys(this.user_data);
      let user_24h_PLs_percent = [];
      Object.keys(this.user_data).forEach((key) => {
        this.user_percentages.push(
          ((this.user_data[key].amount * this.user_data[key].last) /
            this.user_total) *
            100
        );
        //console.log(this.user_data[key].changePercentage);
        user_24h_PLs_percent.push(this.user_data[key].changePercentage);
      });
      this.doughnutChartData.datasets[0].data = this.user_percentages;
      this.barChartData.datasets[0].data = user_24h_PLs_percent;
      console.log(this.barChartData.datasets[0].data);
      //generate color palette
      const pal = palette("tol", this.user_percentages.length).map(function (
        hex
      ) {
        return "#" + hex;
      });
      this.doughnutChartData.datasets[0].backgroundColor = pal;
      this.barChartData.datasets[0].backgroundColor = pal;
      //fetch orders
      //console.log(await exchange.fetchOrders(["BTC/USDT", "ETH/USDT"]));
    },
    async getExchanges() {
      this.exchanges = await ccxt.exchanges;
    },
    //eliminazione account
    remove() {
      axios
        .delete("http://localhost:5000/delete", {
          headers: { token: this.token },
        })
        .then((res) => {
          if (res.status === 404) {
            console.log("utente non eliminato");
          } else {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push("/");
          }
        });
    },

    //modifica profilo
    edit() {
      let user = {
        token: this.token,
        email: this.newEmail,
        password: this.password,
      };
      axios.post("http://localhost:5000/user", user).then((res) => {
        if (res.status === 405) {
          console.log("account non modificato");
        } else controle.log("account modificato");
      });
      this.password = "";
      if (this.newEmail != "") {
        this.email = this.newEmail;
      }
    },

    //aggiungi wallet
    add() {
      let wallet = {
        token: this.token,
        name_exchange: this.name_exchange,
        api_key: this.newApiKey,
        api_secret: this.newApiSecret,
      };
      //check validity
      //const exchangeId = wallet.name_exchange,
      //  exchangeClass = ccxt[exchangeId],
      //  exchange = new exchangeClass({
      //    apiKey: wallet.api_key,
      //    secret: wallet.api_secret,
      //    proxy: "https://dashboard-cors.herokuapp.com/",
      //  });
      if (api_key != "" && api_secret != "") {
        axios.put("http://localhost:5000/user", wallet).then((res) => {
          if (res.status === 405) {
            console.log("account non modificato");
          } else {
            console.log("account modificato");
            this.api_key = this.newApiKey;
            this.api_secret = this.newApiSecret;
            this.newApiKey = "";
            this.newApiSecret = "";
          }
        });
      }
    },
    async getDataFromServer() {
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
  },
  mounted() {
    this.getExchanges();
    //estrapolo il token e me lo salvo in una variabile
    if (localStorage.getItem("token"))
      this.token = localStorage.getItem("token");
    else if (sessionStorage.getItem("token"))
      this.token = sessionStorage.getItem("token");
    //mi prendo le informazioni dell'utente dal server
    this.getDataFromServer();
    this.getData();
  },

  created() {
    if (
      localStorage.getItem("token") === null &&
      sessionStorage.getItem("token") === null
    ) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
table {
  background-color: transparent;
}

.card {
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  height: 100%;
}

.modal-content {
  background-color: rgb(20, 15, 68);
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
