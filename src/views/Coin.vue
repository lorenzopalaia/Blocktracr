<template>
  <div v-if="coin">
    <div class="flex flex-row mt-32 items-center">
      <img :src="coin.image.large" :alt="coin.name" class="w-28 h-28 mr-4" />
      <div class="flex flex-col">
        <div class="flex flex-row items-end">
          <h1
            class="text-8xl mr-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            {{ coin.name }}
          </h1>
          <div class="text-4xl text-white">{{ coin.symbol.toUpperCase() }}</div>
        </div>
        <div class="flex flex-row">
          <div
            class="badge badge-primary mr-4"
            v-for="category in coin.categories.slice(0, 5)"
            :key="category"
          >
            {{ category }}
          </div>
        </div>
      </div>
    </div>
    <h2
      v-if="coin.description.en"
      class="text-xl text-white mt-8"
      v-html="firstSentence(coin.description.en)"
    ></h2>
    <div class="flex flex-row gap-8 mt-8 stats bg-transparent">
      <div class="stat w-1/3">
        <div class="stat-title text-white">Price</div>
        <div
          class="stat-value text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          $ {{ coin.market_data.current_price.usd.toLocaleString("us") }}
        </div>
        <div class="stat-desc text-white">
          <span
            :class="
              coin.market_data.price_change_percentage_24h_in_currency.usd >= 0
                ? 'text-success'
                : 'text-error'
            "
            >{{
              coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                2
              )
            }}%</span
          >
          {{
            coin.market_data.price_change_percentage_24h_in_currency.usd >= 0
              ? "higher"
              : "lower"
          }}
          than yesterday
        </div>
      </div>
      <div class="stat w-1/3">
        <div class="stat-title text-white">Market Cap</div>
        <div
          class="stat-value text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          $ {{ formatPrice(coin.market_data.market_cap.usd) }}
        </div>
        <div class="stat-desc text-white">
          Rank {{ coin.market_data.market_cap_rank }} in Market Cap
        </div>
      </div>
      <div class="stat w-1/3">
        <div class="stat-title text-white">Volume</div>
        <div
          class="stat-value text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          $ {{ formatPrice(coin.market_data.total_volume.usd) }}
        </div>
        <div class="stat-desc text-white">
          {{
            (
              coin.market_data.total_volume.usd /
              coin.market_data.market_cap.usd
            ).toFixed(2)
          }}% Volume to Market Cap Ratio
        </div>
      </div>
    </div>
    <p class="text-2xl text-white mt-8">Sentiment Score</p>
    <div class="flex flex-row justify-between w-full mt-4">
      <p class="text-success">{{ coin.sentiment_votes_up_percentage }}%</p>
      <p class="text-error">{{ coin.sentiment_votes_down_percentage }}%</p>
    </div>
    <progress
      class="progress w-full bg-error progress-success"
      :value="coin.sentiment_votes_up_percentage"
      max="100"
    ></progress>
    <div class="flex flex-row justify-between w-full mt-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4">
        <path
          class="fill-success"
          d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4">
        <path
          class="fill-error"
          d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { formatPrice, firstSentence } from "@/utils/textUtils";

const apiUrl = import.meta.env.VITE_API_URL;

export default {
  data() {
    return {
      coin: null,
    };
  },
  methods: {
    onMountedGetCoin() {
      fetch(`${apiUrl}/crypto/${this.$route.params.id}`)
        .then((res) => res.json())
        .then((data) => {
          this.coin = data;
          this.coin.categories.reverse();
        });
    },
    formatPrice,
    firstSentence,
  },
  mounted() {
    this.onMountedGetCoin();
  },
};
</script>

<style></style>
