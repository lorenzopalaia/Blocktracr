<template>
  <div v-if="coinData.image" class="container">
    <div class="row">
      <div class="col my-4">
        <div class="row">
          <div class="col">
            <div class="fw-bold">
              <img
                v-if="coinData.image.large"
                :src="coinData.image.large"
                style="width: 48px; display: inline"
                class="me-2"
              />
              <p v-if="coinData.name" class="fs-1 me-2" style="display: inline">
                {{ coinData.name }}
              </p>
              <p
                v-if="coinData.symbol"
                class="fs-5 text-wrap bg-primary badge me-2"
                style="display: inline"
              >
                {{ coinData.symbol.toUpperCase() }}
              </p>
            </div>
          </div>
          <div class="col">
            <p
              v-if="coinData.market_data.current_price.usd"
              style="display: inline"
              class="fs-1 me-2"
            >
              ${{ coinData.market_data.current_price.usd.toLocaleString() }}
            </p>
            <p
              v-if="
                coinData.market_data.price_change_percentage_24h &&
                coinData.market_data.price_change_percentage_24h >= 0
              "
              class="fs-5 badge bg-success text-wrap me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-up-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                />
              </svg>
              {{ coinData.market_data.price_change_percentage_24h.toFixed(2) }}%
            </p>
            <p
              v-if="
                coinData.market_data.price_change_percentage_24h &&
                coinData.market_data.price_change_percentage_24h < 0
              "
              class="fs-5 badge bg-danger text-wrap me-2"
            >
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
                />
              </svg>
              {{
                Math.abs(
                  coinData.market_data.price_change_percentage_24h
                ).toFixed(2)
              }}%
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-if="coinData.description.en" class="col my-4">
        <div class="card">
          <p class="card-header fw-bold">Informazioni su {{ coinData.name }}</p>
          <div class="card-body">
            <p
              v-if="coinData.description.en"
              v-html="coinData.description.en"
              style="color: #e0e0e0"
            ></p>
            <p v-if="coinData.contract_address">
              Contratto: {{ coinData.contract_address }}
            </p>
            <p v-if="coinData.community_score">
              Community Score: {{ coinData.community_score }}
            </p>
            <p v-if="coinData.liquidity_score">
              Liquidity Score: {{ coinData.liquidity_score }}
            </p>
            <p v-if="coinData.links.blockchain_site[0]">
              Explorer:
              <a target="_blank" :href="coinData.links.blockchain_site[0]">{{
                coinData.links.blockchain_site[0]
              }}</a>
            </p>
            <p v-if="coinData.links.homepage[0]">
              Homepage:
              <a target="_blank" :href="coinData.links.homepage[0]">{{
                coinData.links.homepage[0]
              }}</a>
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row my-4">
          <div class="col">
            <div class="card">
              <div class="row my-auto">
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#7067cf"
                    class="bi bi-bar-chart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"
                    />
                  </svg>
                </div>
                <div class="col my-auto">
                  <p
                    v-if="coinData.market_data.market_cap.usd"
                    class="fs-5 m-0"
                  >
                    {{ Intl.NumberFormat('en-US', { notation: 'compact', currency: 'USD', style: 'currency' }).format(coinData.market_data.market_cap.usd) }}
                  </p>
                  <p v-else class="fs-5 m-0">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    Market Cap
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="row my-auto">
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#7067cf"
                    class="bi bi-pie-chart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"
                    />
                  </svg>
                </div>
                <div class="col my-auto">
                  <p
                    v-if="coinData.market_data.circulating_supply"
                    class="fs-5 m-0"
                  >
                    {{
                      Intl.NumberFormat('en-US', { notation: 'compact' }).format(coinData.market_data.circulating_supply)
                    }}
                  </p>
                  <p v-else class="fs-5 m-0">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    Circolante
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col">
            <div class="card">
              <div class="row my-auto">
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#7067cf"
                    class="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    />
                  </svg>
                </div>
                <div class="col my-auto">
                  <p
                    v-if="coinData.market_data.total_volume.usd"
                    class="fs-5 m-0"
                  >
                    {{
                      Intl.NumberFormat('en-US', { notation: 'compact', currency: 'USD', style: 'currency' }).format(coinData.market_data.total_volume.usd)
                    }}
                  </p>
                  <p v-else class="fs-5 m-0">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    Volume 24h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="row my-auto">
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#7067cf"
                    class="bi bi-coin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
                    />
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                  </svg>
                </div>
                <div class="col my-auto">
                  <p v-if="coinData.market_data.total_supply" class="fs-5 m-0">
                    {{ Intl.NumberFormat('en-US', { notation: 'compact' }).format(coinData.market_data.total_supply) }}
                  </p>
                  <p v-else class="fs-5 m-0">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    Totale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col">
            <div class="card">
              <div class="row my-auto">
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#7067cf"
                    class="bi bi-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                </div>
                <div class="col my-auto">
                  <p v-if="coinData.market_data.ath.usd" class="fs-5 m-0">
                    {{ Intl.NumberFormat('en-US', { notation: 'compact', currency: 'USD', style: 'currency' }).format(coinData.market_data.ath.usd) }}
                  </p>
                  <p v-else class="fs-5 m-0">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    All Time High
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="row my-auto">
                <div
                  class="col d-flex justify-content-center align-items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#7067cf"
                    class="bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                </div>
                <div class="col my-auto">
                  <p v-if="coinData.market_data.high_24h.usd" class="fs-5 m-0">
                    {{ Intl.NumberFormat('en-US', { notation: 'compact', currency: 'USD', style: 'currency' }).format(coinData.market_data.high_24h.usd) }}
                  </p>
                  <p v-else class="fs-5 m-0">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    24h High
                  </p>
                  <p v-if="coinData.market_data.low_24h.usd" class="fs-5 m-0">
                    {{ Intl.NumberFormat('en-US', { notation: 'compact', currency: 'USD', style: 'currency' }).format(coinData.market_data.low_24h.usd) }}
                  </p>
                  <p v-else class="fs-5 m">N/D</p>
                  <p class="fs-6 m-0" style="color: rgba(112, 103, 207, 0.8)">
                    24h Low
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="coinData.sentiment_votes_up_percentage" class="row">
      <div class="col-12 my-4">
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
      <div class="card">
        <p class="card-header fw-bold">Grafico</p>
        <div class="btn-group" role="group">
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="getHistoricalData('1')"
            :disabled="interval === '1'"
          >
            24h
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="getHistoricalData('7')"
            :disabled="interval === '7'"
          >
            7d
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="getHistoricalData('30')"
            :disabled="interval === '30'"
          >
            30d
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="getHistoricalData('90')"
            :disabled="interval === '90'"
          >
            90d
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="getHistoricalData('365')"
            :disabled="interval === '365'"
          >
            1y
          </button>
          <button
            type="button"
            class="btn btn-outline-primary"
            v-on:click="getHistoricalData('max')"
            :disabled="interval === 'max'"
          >
            Max
          </button>
        </div>
        <Line
          :chart-data="chartData"
          :chart-options="chartOptions"
          :height="200"
        />
      </div>
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

//deepai API for text summarization
const deepai = require('deepai');
deepai.setApiKey('d54933d4-963d-43b4-88ce-7490423f790f');

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
            label: "Prezzo",
            borderColor: "#7067cf",
            pointBackgroundColor: "transparent",
            borderWidth: 1,
            pointBorderColor: "transparent",
            backgroundColor: "#7067cf",
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
      let res = await axios.get(uri, config);
      // little function to get a summarize description via deepai API
      if (res.data.description.en) {
        var resp = await deepai.callStandardApi("summarization", { text: res.data.description.en });
        res.data.description.en = resp.output;
      }
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
      if (this.chartData.datasets[0].data.length > 1) this.chartLoaded = true;
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

<style>
.card {
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  height: 100%;
  min-height: 150px;
}

p {
  color: #f5f5f5;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

a {
  text-decoration: none;
  color: rgba(112, 103, 207, 0.8);
}
</style>
