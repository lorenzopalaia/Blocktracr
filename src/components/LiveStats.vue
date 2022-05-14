<template>
  <div class="container">
    <p class="h1 market-info-text">I </p>
    <p class="h1 market-info-text" style="color: #7067cf">prezzi di oggi</p>
    <p class="h1 market-info-text"> delle criptovalute in ordine di capitalizzazione di mercato
    </p>
    <div v-if="totalMCap && change24h && volume24h">
      <p class="market-info-text">
        La capitalizzazione totale del mercato crypto oggi è di
      </p>
      <p class="text-primary market-info-text">
        {{ totalMCap.toLocaleString() }}$
      </p>
      <p class="market-info-text">, con un</p>
      <p v-if="change24h >= 0" class="market-info-text"> aumento</p>
      <p v-else class="market-info-text">a diminuzione</p>
      <p class="market-info-text"> percentuale nelle ultime 24 ore del </p>
      <p v-if="change24h >= 0" class="text-success market-info-text">
        {{ change24h.toFixed(2) }}%
      </p>
      <p v-else class="text-danger market-info-text">{{ change24h.toFixed(2) }}%</p>
      <p class="market-info-text">. Il volume scambiato oggi ammonta a </p>
      <p class="text-primary market-info-text">{{volume24h.toLocaleString()}}$</p>
    </div>
    <div class="row" style="margin-top: 16px">
      <div v-if="activeCryptos && activeMarkets && activeICOs" class="col">
        <div class="card market-info-card">
          <div class="card-header">
            <p class="market-info-text market-info-title">Info di mercato</p>
          </div>
          <div class="card-body">
            <ul>
              <li>
                <p class="market-info-text">Crypto listate: </p>
                <p class="market-info-text text-primary">{{activeCryptos}}</p>
              </li>
              <li>
                <p class="market-info-text">Mercati attivi: </p>
                <p class="market-info-text text-primary">{{activeMarkets}}</p>
              </li>
              <li>
                <p class="market-info-text">ICO attive: </p>
                <p class="market-info-text text-primary">{{activeICOs}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="top3dominance" class="col">
        <div class="card market-info-card">
          <div class="card-header">
            <p class="market-info-text market-info-title">Dominance</p>
          </div>
          <div class="card-body">
            <ul>
              <li>
                <p class="market-info-text">BTC: </p>
                <p class="market-info-text text-primary">{{top3dominance.btc.toFixed(2)}}%</p>
              </li>
              <li>
                <p class="market-info-text">ETH: </p>
                <p class="market-info-text text-primary">{{top3dominance.eth.toFixed(2)}}%</p>
              </li>
              <li>
                <p class="market-info-text">USDT: </p>
                <p class="market-info-text text-primary">{{top3dominance.usdt.toFixed(2)}}%</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="top3trending" class="col">
        <div class="card market-info-card">
          <div class="card-header">
            <p class="market-info-text market-info-title">Trending</p>
          </div>
          <div class="card-body">
            <ul v-for="coin in top3trending" :key="coin.item.coin_id">
              <li>
                <img :src="coin.item.thumb" alt="" class="me-2">
                <p class="market-info-text">{{coin.item.symbol}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <input
        type="text"
        class="form-control rounded border-primary my-4 d-flex coin-search"
        placeholder="Ricerca Coin"
        @keyup="searchCoin()"
        v-model="coinSearch"
        id="search"
      />
      <table class="table rounded text-white">
        <thead>
          <tr>
            <th v-for="title in titles" :key="title">
              {{ title }}
            </th>
            <th class="d-none d-md-table-cell">
              24h Vol.
            </th>
            <th class="d-none d-md-table-cell">
              Market Cap.
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coin in filterCoins" :key="coin.id">
            <td class="text-muted">
              {{ coin.market_cap_rank }}
            </td>
            <td>
              <router-link
                style="text-decoration: none"
                class="text-white"
                :to="{ name: 'coin', params: { id: coin.id } }"
              >
                <img :src="coin.image" style="width: 2rem" class="me-2" />
                <span>{{ coin.name }}</span>
                <span class="ms-2 text-uppercase text-muted">
                  {{ coin.symbol }}
                </span>
              </router-link>
            </td>
            <td>
              <p v-if="coin.current_price">{{ coin.current_price }} $</p>
              <p v-else>N/D</p>
            </td>
            <td
              :class="[
                coin.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              <p v-if="coin.price_change_percentage_24h">
                {{ coin.price_change_percentage_24h.toFixed(2) }}%
              </p>
              <p v-else class="text-white">N/D</p>
            </td>
            <td class="d-none d-md-table-cell">
              <p v-if="coin.total_volume">
                {{ coin.total_volume.toLocaleString() }} $
              </p>
              <p v-else>N/D</p>
            </td>
            <td class="d-none d-md-table-cell">
              <p v-if="coin.market_cap">
                {{ coin.market_cap.toLocaleString() }} $
              </p>
              <p v-else>N/D</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LiveStats",
  props: {
    page: Number,
  },
  data() {
    return {
      coins: [],
      filterCoins: [],
      titles: ["#", "Nome", "Prezzo", "24h%"],
      coinSearch: "",
      totalMCap: null,
      change24h: null,
      volume24h: null,
      activeCryptos: null,
      activeMarkets: null,
      activeICOs: null,
      top3dominance: null,
      top3trending: null,
    };
  },
  watch: {
    page: function () {
      this.getData();
    },
  },
  methods: {
    async getData() {
      let uri =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" +
        this.$props.page;
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      //console.log(res.data);
      this.coins = res.data;
      this.filterCoins = res.data;
    },
    async getMarketData() {
      let uri = "https://api.coingecko.com/api/v3/global";
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      //console.log(res.data);
      this.change24h = res.data.data.market_cap_change_percentage_24h_usd;
      this.totalMCap = res.data.data.total_market_cap.usd;
      this.volume24h = res.data.data.total_volume.usd;
      this.activeCryptos = res.data.data.active_cryptocurrencies;
      this.activeMarkets = res.data.data.markets;
      this.activeICOs = res.data.data.ongoing_icos;
      this.top3dominance = (({ btc, eth, usdt }) => ({ btc, eth, usdt })) (res.data.data.market_cap_percentage);
    },
    async getTrending() {
      let uri = "https://api.coingecko.com/api/v3/search/trending";
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      //console.log(res.data);
      this.top3trending = res.data.coins.slice(0, 3);
    },
    searchCoin() {
      this.filterCoins = this.coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(this.coinSearch.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.coinSearch.toLowerCase())
      );
    },
  },
  mounted() {
    this.getData();
    this.getMarketData();
    this.getTrending();
    setInterval(this.getData, 60000);
  },
};
</script>

<style scoped>
.table {
  background-color: rgba(112, 103, 207, 0.1);
}
.search {
  background-color: #e0e0e0;
}

h1 {
  color: #f5f5f5;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

.market-info-text {
  display: inline;
  color: #e0e0e0;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

.market-info-title {
  font-family: "Sequel100Black-85", Helvetica, Arial;
}

ul {
  list-style: none;
  padding-left: 0;
}

.market-info-card {
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(42, 178, 252, 0.5);
  height: 100%;
}

.market-info-card:hover {
  transform: scale(1.1);
}

.coin-search {
  background: transparent;
  color: #7067cf;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}
</style>
