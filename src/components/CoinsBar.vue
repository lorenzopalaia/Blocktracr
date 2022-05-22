<template>
  <div v-if="coins" class="coinsBar">
    <ul style="margin: 0">
      <li class="coinItem" v-for="coin in coins" :key="coin.symbol">
        <img class="coinImage" :src="coin.image" />
        <router-link
          class="router-link"
          :to="{ name: 'coin', params: { id: coin.id } }"
        >
          <p class="coinName">{{ coin.symbol.toUpperCase() }}</p>
        </router-link>
        <p class="coinPrice" :key="coin.current_price">
          {{ coin.current_price }}$
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CoinsBar",
  data() {
    return {
      coins: [],
    };
  },
  methods: {
    async getData() {
      let uri = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100";
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
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
.router-link {
  text-decoration: none;
}

.coinsBar {
  background: transparent;
  overflow: hidden;
  white-space: nowrap;
  animation: moveBar;
  animation-duration: 600s;
  animation-iteration-count: infinite;
  animation-direction: right;
  animation-timing-function: linear;
  padding: 10px;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

.coinsBar:hover {
  animation-play-state: paused;
}

.coinItem {
  display: inline;
  padding: 10px;
}
.coinImage {
  height: 13px;
}

.coinName {
  display: inline;
  padding: 3px;
  color: white;
}

.coinPrice {
  color: white;
  border-radius: 5px;
  display: inline;
  padding: 3px;
  animation: updatedPrice 1.5s;
  transition-timing-function: ease-in;
}

@keyframes updatedPrice {
  to {
    background-color: rgba(150, 255, 0, 0.8);
  }
}

@keyframes moveBar {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -16000px;
  }
}
</style>
