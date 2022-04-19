<template>
  <div v-if="coinData.image && historicalCoinData" class="container">
    <div class="row">
      <div class="card">
        <div class="row">
          <div class="col">
            <img :src="coinData.image.large" style="width: 2rem" class="me-2" />
            <span class="fw-bold">{{ coinData.name }}</span>
            <span class="text-wrap bg-primary badge">{{
              coinData.symbol.toUpperCase()
            }}</span>
          </div>
          <div class="col">
            <span class="fs-1"
              >${{ coinData.market_data.current_price.usd }}</span
            >
            <span
              v-if="coinData.market_data.price_change_percentage_24h >= 0"
              class="fs-5 badge bg-success text-wrap"
              >{{
                coinData.market_data.price_change_percentage_24h.toFixed(2)
              }}%</span
            >
            <span v-else class="fs-5 badge bg-danger text-wrap">{{
              coinData.market_data.price_change_percentage_24h.toFixed(2)
            }}</span>
          </div>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
    <div class="row">
      <div v-if="coinData.description.en" class="col">
        <div class="card">
          <div class="card-header fw-bold">About {{ coinData.name }}</div>
          <div v-html="coinData.description.en" class="card-body"></div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="card">
              <p>Market Cap</p>
              <p>${{ coinData.market_data.market_cap.usd.toLocaleString() }}</p>
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
      <div class="card">
        <div class="card-header fw-bold">
          Sentiment Score
        </div>
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
              :style="{ width: coinData.sentiment_votes_down_percentage + '%' }"
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
</template>

<script>
import axios from "axios";

export default {
  name: "Coin",
  props: {
    coin: String,
  },
  data() {
    return {
      coinData: [],
      historicalCoinData: [],
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
      if (res.data.description.en && res.data.description.en.indexOf(".") != -1) {
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
    async getHistoricalData() {
      let uri =
        "https://api.coingecko.com/api/v3/coins/" +
        this.$props.coin +
        "/market_chart?vs_currency=usd&days=max";
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      console.log(res.data);
      this.historicalCoinData = res.data;
    },
    async getAll() {
      this.getData();
      this.getHistoricalData();
    },
  },
  mounted() {
    this.getAll();
    setInterval(this.getAll, 60000);
  },
};
</script>

<style></style>
