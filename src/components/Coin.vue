<template>
  <div v-if="coinData.image" class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="row">
            <div class="col">
              <div class="fw-bold">
                <img
                  :src="coinData.image.large"
                  style="width: 48px"
                  class="me-2"
                />
                <p>
                  {{ coinData.name }}
                </p>
                <p class="text-wrap bg-primary badge">
                  {{ coinData.symbol.toUpperCase() }}
                </p>
              </div>
            </div>
            <div class="col">
              <p class="fs-1">
                ${{ coinData.market_data.current_price.usd.toLocaleString() }}
              </p>
              <span
                v-if="coinData.market_data.price_change_percentage_24h >= 0"
                class="fs-5 badge bg-success text-wrap"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                  /></svg
                >{{
                  coinData.market_data.price_change_percentage_24h.toFixed(2)
                }}%</span
              >
              <span v-else class="fs-5 badge bg-danger text-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                  /></svg
                >{{
                  Math.abs(
                    coinData.market_data.price_change_percentage_24h
                  ).toFixed(2)
                }}%</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="coinData.description.en" class="col">
        <div class="card">
          <p class="card-header fw-bold">About {{ coinData.name }}</p>
          <p
            v-html="coinData.description.en"
            class="card-body"
            style="color: #e0e0e0"
          ></p>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="card">
              <p class="fs-6" style="color: #e0e0e0">Market Cap</p>
              <p class="fs-5">
                ${{ coinData.market_data.market_cap.usd.toLocaleString() }}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <p>Circulating Supply</p>
              <p>
                {{ coinData.market_data.circulating_supply.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <p>24h Volume</p>
              <p>
                ${{ coinData.market_data.total_volume.usd.toLocaleString() }}
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <p>Total Supply</p>
              <p v-if="coinData.market_data.total_supply">
                {{ coinData.market_data.total_supply.toLocaleString() }}
              </p>
              <p v-else>∞</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <p>All Time High</p>
              <p>
                Reached
                {{
                  coinData.market_data.ath_date.usd
                    .substring(
                      0,
                      coinData.market_data.ath_date.usd.indexOf(".")
                    )
                    .replaceAll("-", "/")
                    .replaceAll("T", " ")
                }}
              </p>
              <p>${{ coinData.market_data.ath.usd.toLocaleString() }}</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <p>
                24h High ${{
                  coinData.market_data.high_24h.usd.toLocaleString()
                }}
              </p>
              <p>
                24h Low ${{ coinData.market_data.low_24h.usd.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="coinData.sentiment_votes_up_percentage" class="row">
      <div class="col-12">
        <div class="card">
          <p class="card-header fw-bold">Sentiment Score</p>
          <div class="card-body fw-bold">
            <div class="progress" style="height: 24px">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                :style="{ width: coinData.sentiment_votes_up_percentage + '%' }"
                :aria-valuenow="coinData.sentiment_votes_up_percentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ coinData.sentiment_votes_up_percentage }}%
              </div>
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                :style="{
                  width: coinData.sentiment_votes_down_percentage + '%',
                }"
                :aria-valuenow="coinData.sentiment_votes_down_percentage"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ coinData.sentiment_votes_down_percentage }}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="chartLoaded" class="row">
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="getHistoricalData('1')"
          :disabled="interval==='1'"
        >
          24h
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="getHistoricalData('7')"
          :disabled="interval==='7'"
        >
          7d
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="getHistoricalData('30')"
          :disabled="interval==='30'"
        >
          30d
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="getHistoricalData('90')"
          :disabled="interval==='90'"
        >
          90d
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="getHistoricalData('365')"
          :disabled="interval==='365'"
        >
          1y
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          v-on:click="getHistoricalData('max')"
          :disabled="interval==='max'"
        >
          Max
        </button>
      </div>
      <Line
        :chart-data="chartData"
        :chart-options="chartOptions"
        :height="100"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Plugin,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default {
  components: { Line },
  name: "Coin",
  props: {
    coin: String,
  },
  data() {
    return {
      interval: "1",
      coinData: [],
      chartLoaded: false,
      chartOptions: {
        responsive: true,
        scales: {
          xAxis: {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 7,
              minRotation: 0,
              maxRotation: 0,
            },
          },
        },
      },
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Price",
            borderColor: "#f87979",
            pointBackgroundColor: "transparent",
            borderWidth: 1,
            pointBorderColor: "transparent",
            backgroundColor: "#f87979",
            data: [],
            cubicInterpolationMode: "monotone",
          },
        ],
      },
    };
  },
  methods: {
    isUpperCase(str) {
      return str == str.toUpperCase() && str != str.toLowerCase();
    },
    async getData() {
      let uri = "https://api.coingecko.com/api/v3/coins/" + this.$props.coin;
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      // little function to get a shortest description if exists
      if (
        res.data.description.en &&
        res.data.description.en.indexOf(".") != -1
      ) {
        let found = false;
        let position = 0;
        while (!found) {
          let idx = res.data.description.en.indexOf(". ", position);
          if (this.isUpperCase(res.data.description.en[idx + 2])) {
            res.data.description.en = res.data.description.en.substring(0, idx);
            found = true;
          } else position = idx + 1;
        }
      }
      console.log(res.data);
      this.coinData = res.data;
    },
    async getHistoricalData(interval) {
      let uri =
        "https://api.coingecko.com/api/v3/coins/" +
        this.$props.coin +
        "/market_chart?vs_currency=usd&days=" +
        interval;
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      //console.log(res.data.prices);
      this.chartData.labels = [];
      this.chartData.datasets[0].data = [];
      for (let idx = 0; idx < res.data.prices.length; ++idx) {
        var date = new Date(res.data.prices[idx][0]).toLocaleDateString(
          "en-US"
        );
        this.chartData.labels.push(date);
        this.chartData.datasets[0].data.push(res.data.prices[idx][1]);
      }
      this.interval = interval;
      this.chartLoaded = true;
    },
    async getAll() {
      this.getData();
      this.getHistoricalData("1");
    },
  },
  mounted() {
    //this.getAll();
    //setInterval(this.getAll, 60000);
    this.getData();
    this.getHistoricalData("1");
    setInterval(this.getData(), 60000);
  },
};
</script>

<style scoped>
.card {
  height: 100%;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
}
p {
  color: #f5f5f5;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}
</style>
