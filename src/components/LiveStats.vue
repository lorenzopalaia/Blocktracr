<template>
  <div v-if="coins" class="coinsBar container">
    <div class="row">
      <div class="col-1">
        <p>#</p>
      </div>
      <div class="col-2 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <p>Nome</p>
      </div>
      <div class="col-1">
        <p>Ticker</p>
      </div>
      <div class="col-2">
        <p>Prezzo</p>
      </div>
      <div class="col-2">
        <p>24h%</p>
      </div>
      <div class="col-2">
        <p>Market Cap.</p>
      </div>
      <div class="col-2 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">
          <p>24h Vol.</p>
      </div>
    </div>
    <div v-for="(coin, index) in coins" class="row coinItem" :key="coin.symbol">
      <div class="col-1">
        <p>{{ (index + 1) + 100 * (this.$props.page - 1) }}</p>
      </div>
      <div class="col-2 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block">
        <router-link style="text-decoration: none;" :to="{ name: 'livestatsDetails', params: { id: coin.id }}">
          <p><img class="coinImage" :src="coin.image" style="width: 18px;" /> {{ coin.name }}</p>
		    </router-link>
      </div>
      <div class="col-1">
        <p class="coinName">{{ coin.symbol.toUpperCase() }}</p>
      </div>
      <div class="col-2">
        <p v-if="coin.current_price">{{ coin.current_price }}$</p>
        <p v-else>N/D</p>
      </div>
      <div class="col-2">
          <p v-if="coin.price_change_percentage_24h > 0" style="color: greenyellow">{{ coin.price_change_percentage_24h.toFixed(2) }}%</p>
          <p v-else-if="coin.price_change_percentage_24h < 0" style="color: red">{{ coin.price_change_percentage_24h.toFixed(2) }}%</p>
          <p v-else-if="coin.price_change_percentage_24h">{{coin.price_change_percentage_24h.toFixed(2) }}%</p>
          <p v-else>N/D</p>
      </div>
      <div class="col-2">
          <p v-if="coin.market_cap">{{ coin.market_cap.toLocaleString() }}$</p>
          <p v-else>N/D</p>
      </div>
      <div class="col-2 d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block d-lg-none d-xl-block">
          <p v-if="coin.total_volume">{{ coin.total_volume.toLocaleString() }}$</p>
          <p v-else>N/D</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LiveStats",
  props: {
    page: String,
  },
  data() {
    return {
      coins: [],
    };
  },
  methods: {
    async getData() {
      let uri =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" + this.$props.page;
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      console.log(res.data);
      this.coins = res.data;
    },
  },
  mounted() {
    this.getData();
    setInterval(this.getData, 60000);
  },
};
</script>

<style scoped>
p {
    color: #f5f5f5;
    font-family: "Sequel100Black-45", Helvetica, Arial;
    text-align: start;
}

.coinItem {
  background-color: rgba(112, 103, 207, 0.1);
  margin-top: 10px;
  border-radius: 10px;
}
</style>
