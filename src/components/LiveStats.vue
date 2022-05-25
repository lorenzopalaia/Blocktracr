<template>
  <div class="container">
    <div>
      <p class="fs-1 sequel-font-small text-white d-inline">I</p>
      <p class="fs-1 sequel-font-small d-inline" style="color: #7067cf">
        prezzi di oggi
      </p>
      <p class="fs-1 sequel-font-small text-white d-inline">
        delle criptovalute in ordine di capitalizzazione di mercato
      </p>
      <div v-if="totalMCap && change24h && volume24h">
        <p class="sequel-font-small d-inline text-white">
          La capitalizzazione totale del mercato crypto oggi è di
        </p>
        <p class="text-primary sequel-font-small d-inline">
          {{ totalMCap.toLocaleString() }}$
        </p>
        <p class="sequel-font-small d-inline text-white">, con un</p>
        <p v-if="change24h >= 0" class="sequel-font-small d-inline text-white">
          aumento
        </p>
        <p v-else class="sequel-font-small d-inline text-white">
          a diminuzione
        </p>
        <p class="sequel-font-small d-inline text-white">
          percentuale nelle ultime 24 ore del
        </p>
        <p
          v-if="change24h >= 0"
          class="text-success sequel-font-small d-inline"
        >
          {{ change24h.toFixed(2) }}%
        </p>
        <p v-else class="text-danger sequel-font-small d-inline">
          {{ change24h.toFixed(2) }}%
        </p>
        <p class="sequel-font-small d-inline text-white">
          . Il volume scambiato oggi ammonta a
        </p>
        <p class="text-primary sequel-font-small d-inline">
          {{ volume24h.toLocaleString() }}$
        </p>
      </div>
    </div>
    <div class="row">
      <div v-if="activeCryptos && activeMarkets && activeICOs" class="col mt-4">
        <div class="card">
          <div class="card-header">
            <p class="text-white sequel-font-big">Info di mercato</p>
          </div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li>
                <p class="sequel-font-small d-inline text-white">
                  Crypto listate:
                </p>
                <p class="sequel-font-small d-inline text-primary">
                  {{ activeCryptos }}
                </p>
              </li>
              <li>
                <p class="sequel-font-small d-inline text-white">
                  Mercati attivi:
                </p>
                <p class="sequel-font-small d-inline text-primary">
                  {{ activeMarkets }}
                </p>
              </li>
              <li>
                <p class="sequel-font-small d-inline text-white">ICO attive: </p>
                <p class="sequel-font-small d-inline text-primary">
                  {{ activeICOs }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="top3dominance" class="col mt-4">
        <div class="card">
          <div class="card-header">
            <p class="text-white sequel-font-big">Dominance</p>
          </div>
          <div class="card-body">
            <ul class="list-unstyled">
              <li>
                <img
                  src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
                  alt=""
                  class="me-2"
                />
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'coin', params: { id: 'bitcoin' } }"
                >
                  <p class="sequel-font-small d-inline text-white">BTC: </p>
                </router-link>
                <p class="sequel-font-small d-inline text-primary">
                  {{ top3dominance.btc.toFixed(2) }}%
                </p>
              </li>
              <li>
                <img
                  src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
                  alt=""
                  class="me-2"
                />
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'coin', params: { id: 'ethereum' } }"
                >
                  <p class="sequel-font-small d-inline text-white">ETH: </p>
                </router-link>
                <p class="sequel-font-small d-inline text-primary">
                  {{ top3dominance.eth.toFixed(2) }}%
                </p>
              </li>
              <li>
                <img
                  src="https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707"
                  alt=""
                  class="me-2"
                />
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'coin', params: { id: 'tether' } }"
                >
                  <p class="sequel-font-small d-inline text-white">USDT: </p>
                </router-link>
                <p class="sequel-font-small d-inline text-primary">
                  {{ top3dominance.usdt.toFixed(2) }}%
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="top3trending" class="col mt-4">
        <div class="card">
          <div class="card-header">
            <p class="text-white sequel-font-big">Trending</p>
          </div>
          <div class="card-body">
            <ul
              class="list-unstyled m-0"
              v-for="coin in top3trending"
              :key="coin.item.coin_id"
            >
              <li>
                <img :src="coin.item.thumb" alt="" class="me-2" />
                <router-link
                  class="text-decoration-none"
                  :to="{ name: 'coin', params: { id: coin.item.id } }"
                >
                  <p class="sequel-font-small d-inline text-white">
                    {{ coin.item.symbol }}
                  </p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <table class="table rounded text-white mt-4">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th class="d-none d-md-table-cell">Prezzo</th>
          <th class="d-none d-md-table-cell">24h%</th>
          <th class="d-none d-md-table-cell">24h Vol.</th>
          <th class="d-none d-md-table-cell">Market Cap.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <td class="text-muted">
            {{ coin.market_cap_rank }}
          </td>
          <td>
            <router-link
              class="text-white text-decoration-none"
              :to="{ name: 'coin', params: { id: coin.id } }"
            >
              <img :src="coin.image" style="width: 2rem" class="me-2" />
              <span>{{ coin.name }}</span>
              <span class="ms-2 text-uppercase text-muted">
                {{ coin.symbol }}
              </span>
            </router-link>
          </td>
          <td class="d-none d-md-table-cell">
            <p v-if="coin.current_price">{{ coin.current_price }} $</p>
            <p v-else>N/D</p>
          </td>
          <td
            :class="[
              coin.price_change_percentage_24h >= 0
                ? 'text-success d-none d-md-table-cell'
                : 'text-danger d-none d-md-table-cell',
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
    <div class="btn-group d-flex justify-content-center my-4" role="group">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="onPageChange(1)"
        :disabled="currentPage === 1"
      >
        Prima
      </button>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="onPageChange(pageArray[0])"
        :disabled="currentPage === pageArray[0]"
      >
        {{ pageArray[0] }}
      </button>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="onPageChange(pageArray[1])"
        :disabled="currentPage === pageArray[1]"
      >
        {{ pageArray[1] }}
      </button>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="onPageChange(pageArray[2])"
        :disabled="currentPage === pageArray[2]"
      >
        {{ pageArray[2] }}
      </button>
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="onPageChange(lastPage)"
        :disabled="currentPage === lastPage"
      >
        Ultima
      </button>
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
      currentPage: 1,
      pageArray: [1, 2, 3],
      lastPage: 135, // default value updated asyncronously via getMarketData() function
      coins: [],
      change24h: null,
      totalMCap: null,
      volume24h: null,
      activeCryptos: null,
      activeMarkets: null,
      activeICOs: null,
      top3dominance: null,
      top3trending: null,
    };
  },
  methods: {
    onPageChange(page) {
      // everything is handled by an array, :disabled attribute in elements will do the rest...
      this.currentPage = page;
      this.getData();
      window.scrollTo(0, 0);
      // update pagination numbers
      if (page === 1) this.pageArray = [1, 2, 3];
      else if (page === this.lastPage) this.pageArray = [this.lastPage - 2, this.lastPage - 1, this.lastPage];
      else this.pageArray = [page - 1, page, page + 1];
    },
    async getData() {
      let uri =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" +
        this.currentPage;
      console.log(this.$props.page);
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      this.coins = res.data;
    },
    async getMarketData() {
      let uri = "https://api.coingecko.com/api/v3/global";
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      // get number of pages: ceil of total listed cryptos divided by 100 (number of cryptos per page)
      this.lastPage = Math.ceil(res.data.data.active_cryptocurrencies / 100);
      // get some market data
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
      this.top3trending = res.data.coins.slice(0, 3);
    },
  },
  mounted() {
    this.getMarketData();
    this.getData();
    this.getTrending();
  },
};
</script>

<style scoped>
.sequel-font-small {
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

.sequel-font-big {
  font-family: "Sequel100Black-85", Helvetica, Arial;
}

.table {
  background-color: rgba(112, 103, 207, 0.1);
}

.card {
  transition: transform 0.2s ease;
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(42, 178, 252, 0.5);
  height: 100%;
}
.card:hover {
  transform: scale(1.1);
}
</style>
