<template>
  <div v-if="coinData && historicalCoinData" class="container">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LiveStats",
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
    async getData() {
      let uri = "https://api.coingecko.com/api/v3/coins/" + this.$props.coin;
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
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
