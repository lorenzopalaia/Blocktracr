<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Bentornato, {{ this.name }} 👋🏻</p>
            <br />
            <!-- Bottone modifica profilo-->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#profilo"
            >
              Modifica profilo
            </button>
            <div class="modal" id="profilo">
              <div class="modal-dialog">
                <div class="modal-content">
                  <!--Header-->
                  <div class="modal-header">
                    <h4 class="modal-title">Modifica Profilo</h4>
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <!-- Body -->
                  <div class="moda l-body justify-content-center">
                    <!--modifica email-->
                    <a
                      class="btn btn-primary"
                      href="#collapseEmail"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseEmail"
                    >
                      Modifica email
                    </a>
                    <div class="collapse" id="collapseEmail">
                      <!--<label for="disabledEmail" class="form-label">Vecchia emial</label>
                        <input type="email" id="disabledEmial" class="fomr-control"  value={{this.email}} disabled>-->
                      <label for="nuovaEmail" class="form-label"
                        >Inserisci la nuova email</label
                      >
                      <input
                        type="email"
                        id="nuovaEmail"
                        placeholder="inserisci nuova email"
                        v-model="email"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <br />

                    <!--modifica password-->
                    <a
                      class="btn btn-primary"
                      href="#collapsePassword"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapsePassword"
                    >
                      Modifica password
                    </a>
                    <div class="collapse" id="collapsePassword">
                      <input
                        type="password"
                        placeholder="inserisci nuova password"
                        v-model="password"
                        autocomplete="off"
                        required
                      />
                    </div>
                  </div>

                  <!-- Footer -->
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="edit">
                      Modifica account
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Annulla
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!--aggiungi wallet-->
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#wallet"
            >
              Aggiungi wallet
            </button>
          </div>

          <div class="modal" id="wallet">
            <div class="modal-dialog">
              <div class="modal-content">
                <!--Header
                    <div class="modal-header">
                      <h4 class="modal-title">Aggiungi wallet</h4>
                      <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>-->

                <!-- Body -->
                <div class="modal-body justify-content-center">
                  <form action="post">
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <label class="input-group-text" for="inputGroupSelect01"
                          >Exchange</label
                        >
                      </div>
                      <select
                        class="custom-select"
                        id="inputGroupSelect01"
                        v-model="name_exchange"
                      >
                        <option
                          class="text-capitalize"
                          v-for="exchange in exchanges"
                          :key="exchange"
                          :value="exchange"
                        >
                          {{ exchange }}
                        </option>
                      </select>
                    </div>
                    <input
                      type="text"
                      v-model="api_key"
                      placeholder="api key"
                      required
                    />
                    <input
                      type="text"
                      v-model="api_secret"
                      placeholder="api secret"
                      required
                    /><br />
                  </form>
                </div>

                <!-- Footer -->
                <div class="modal-footer">
                  <a href="#" class="btn btn-primary brn-block" @click="add">
                    Aggiungi credenziali
                  </a>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Annulla
                  </button>
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
          <div class="card-body">
            <p>Coin possedute</p>
            <p>Il bilancio totale è di ${{ user_total }}</p>
            <table class="table rounded text-uppercase text-muted mt-4">
              <thead>
                <tr>
                  <th v-for="title in titles" :key="title">
                    {{ title }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(key, coin) in user_data" :key="key">
                  <td class="text-muted">
                    {{ coin }}
                  </td>
                  <td class="text-muted">
                    ${{ key.amount }}
                  </td>
                  <td class="text-muted">
                    {{ key.last * key.amount }}
                  </td>
                  <td class="text-muted">
                    {{ key.last }}
                  </td>
                  <td class="text-muted">
                    <div v-if="key.change < 0" class="text-danger">
                      <p>
                        -${{ Math.abs(key.change * key.amount) }}
                      </p>
                      <p>
                        {{ key.changePercentage }}%
                      </p>
                    </div>
                    <div v-else class="text-success">
                      <p>
                        ${{ key.change * key.amount }}
                      </p>
                      <p>
                        {{ key.changePercentage }}%
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <Doughnut
            :chart-data="chartData"
            :chart-options="chartOptions"
            :height="100"
            class="m-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import palette from "google-palette";
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
)

export default {
  name: "Dashboard",
  components: { Doughnut },
  data() {
    return {
      titles: ["Coin", "Amount", "Total", "Price", "24 Hours P/L"],
      token: "",
      name: "",
      email: "",
      //newEmail: "",
      password: "",
      name_exchange: "",
      api_key: "",
      api_secret: "",
      exchanges: [],
      user_data: {},
      user_total: 0,
      user_percentages: [],
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Allocazione",
            data: [],
            backgroundColor: [],
          },
        ],
      },
      chartOptions: {
        responsive: true
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
      let data = await exchange.fetchBalance();
      data = data.total;
      Object.keys(data).forEach((key) => {
        if (data[key] <= 0)
          delete data[key];
      });
      this.user_data = data;
      let symbols = Object.keys(this.user_data).map(key => key + "/USDT");
      symbols = await exchange.fetchTickers(symbols);
      Object.keys(symbols).forEach((key) => {
        symbols[key.replace("/USDT", "")] = symbols[key];
        delete symbols[key ];
      });
      Object.keys(this.user_data).forEach((key) => {
        this.user_data[key] = {
          amount: this.user_data[key],
          last: symbols[key].last,
          changePercentage: symbols[key].percentage, //last 24h percentage
          change: symbols[key].change //last 24h change in USD
        }
      });
      //compute user total in USD
      Object.keys(this.user_data).forEach((key) => {
        this.user_total += this.user_data[key].amount * this.user_data[key].last;
      });
      //add data to doughnut chart
      this.chartData.labels = Object.keys(this.user_data);
      Object.keys(this.user_data).forEach(key => {
        this.user_percentages.push(this.user_data[key].amount * this.user_data[key].last / this.user_total * 100);
      });
      this.chartData.datasets[0].data = this.user_percentages;
      this.chartData.datasets[0].backgroundColor = palette('tol', this.user_percentages.length).map(function(hex) {return '#' + hex});
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
      if (this.newEmail != null) {
        this.email = this.newEmail;
      }
      let user = {
        token: this.token,
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5000/user", user).then((res) => {
        if (res.status === 405) {
          console.log("account non modificato");
        } else controle.log("account modificato");
      });
    },

    //aggiungi wallet
    add() {
      let wallet = {
        token: this.token,
        name_exchange: this.name_exchange,
        api_key: this.api_key,
        api_secret: this.api_secret,
      };

      axios.put("http://localhost:5000/user", wallet).then((res) => {
        if (res.status === 405) {
          console.log("account non modificato");
        } else console.log("account modificato");
      });
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
    setInterval(this.getData, 60000);
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

<style></style>
