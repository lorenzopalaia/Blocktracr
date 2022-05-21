<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h1 class="m-2 text-white">Bentornato, {{ this.name }} 👋🏻</h1>
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
                <form>
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
                  <div class="modal-body justify-content-center">
                    <!--modifica email-->
                    <p>La tua email è {{ email }}</p>
                    <div>
                      <label for="nuovaEmail" class="form-label"
                        >Inserisci la nuova email</label
                      >
                      <input
                        type="email"
                        id="nuovaEmail"
                        placeholder="inserisci nuova email"
                        v-model="newEmail"
                        autocomplete="off"
                      />  
                    </div>
                    <br />

                    <!--modifica password-->
                    <div id="collapsePassword">
                      <input
                        type="password"
                        placeholder="inserisci nuova password"
                        v-model="password"
                        autocomplete="off"
                      />
                    </div>
                    <div class="alert alert-primary" role="alert" v-if="modifica">
                      Account modificato
                    </div>
                  </div>

                  <!-- Footer -->
                  <div class="modal-footer">
                    <a class="btn btn-primary" @click="edit">
                      Modifica account
                    </a>
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Annulla
                    </button>
                  </div>
                </form>
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
              <form>
                <!--Header
                    <div class="modal-header">
                      <h4 class="modal-title">Aggiungi wallet</h4>
                      <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>-->

                <!-- Body -->
                <div class="modal-body justify-content-center">
                  
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h1 class="text-white m-2">
              ${{ user_total.toFixed(2) }}
            </h1>
            <h5 style="display: inline;" class="m-2 text-success" v-if="user_24h_PL >= 0">${{ user_24h_PL.toFixed(2) }}</h5>
            <h5 style="display: inline;" class="m-2 text-danger" v-else>-${{ Math.abs(user_24h_PL).toFixed(2) }}</h5>
            <h5 style="display: inline;" class="m-2 text-success" v-if="user_24h_PL_percent >= 0">{{ user_24h_PL_percent.toFixed(2) }}%</h5>
            <h5 style="display: inline;" class="m-2 text-danger" v-else>-${{ Math.abs(user_24h_PL_percent).toFixed(2) }}%</h5>
            <table class="table rounded text-uppercase text-white mt-4">
              <thead>
                <tr>
                  <th v-for="title in titles" :key="title">
                    {{ title }}
                  </th>
                  <th class="d-none d-md-table-cell">24 Hours P/L</th>
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
                  <td class="text-white d-none d-md-table-cell">
                    <div v-if="key.change < 0" class="text-danger">
                      <p class="m-2" style="display: inline">
                        -${{ Math.abs(key.change * key.amount).toFixed(2) }}
                      </p>
                      <p class="m-2" style="display: inline">
                        {{ key.changePercentage.toFixed(2) }}%
                      </p>
                    </div>
                    <div v-else class="text-success">
                      <p class="m-2" style="display: inline">
                        ${{ (key.change * key.amount).toFixed(2) }}
                      </p>
                      <p class="m-2" style="display: inline">
                        {{ key.changePercentage /*.toFixed(2)*/ }}%
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <Doughnut
            :chart-data="doughnutChartData"
            :chart-options="chartOptions"
            :height="100"
            class="m-4"
          />
        </div>
      </div>
      <div class="col">
        <div class="card">
          <Bar
            :chart-data="barChartData"
            :chart-options="chartOptions"
            :height="400"
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

ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, LinearScale, CategoryScale);

export default {
  name: "Dashboard",
  components: { Doughnut, Bar },
  data() {
    return {
      titles: ["Coin", "Amount", "Total", "Price"],
      token: "",
      name: "",
      email: "",
      newEmail: "",
      password: "",
      name_exchange: "",
      api_key: "",
      api_secret: "",
      modifica:false,
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
      chartOptions: {
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
        this.user_24h_PL += this.user_data[key].amount * this.user_data[key].change;
      });
      //compute cumulative user 24h P/L percentage
      this.user_24h_PL_percent = this.user_24h_PL / ( this.user_total - this.user_24h_PL ) * 100;
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
        user_24h_PLs_percent.push(
          this.user_data[key].changePercentage
        );
      });
      this.doughnutChartData.datasets[0].data = this.user_percentages;
      this.barChartData.datasets[0].data = user_24h_PLs_percent;
      console.log(this.barChartData.datasets[0].data);
      //generate color palette
      const pal = palette(
        "tol",
        this.user_percentages.length
      ).map(function (hex) {
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
        this.password="";
        if(this.newEmail!=""){
          this.email=this.newEmail;
        }

    },

    //aggiungi wallet
    add() {
      let wallet = {
        token: this.token,
        name_exchange: this.name_exchange,
        api_key: this.api_key,
        api_secret: this.api_secret,
      };
      //check validity
      //const exchangeId = wallet.name_exchange,
      //  exchangeClass = ccxt[exchangeId],
      //  exchange = new exchangeClass({
      //    apiKey: wallet.api_key,
      //    secret: wallet.api_secret,
      //    proxy: "https://dashboard-cors.herokuapp.com/",
      //  });
      if(api_key!="" && api_secret!=""){
        axios.put("http://localhost:5000/user", wallet).then((res) => {
          if (res.status === 405) {
            console.log("account non modificato");
          } else console.log("account modificato");
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
    this.getData;
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
</style>
