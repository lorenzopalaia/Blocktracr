<template>
  <h2 class="mt-16 text-4xl text-white">Market Update</h2>
  <div class="overflow-x-auto mt-4 rounded-xl" v-if="coins.length !== 0">
    <table class="table text-2xl text-white">
      <thead>
        <tr
          class="bg-gradient-to-r from-primary to-secondary text-2xl text-white"
        >
          <th>{{ ths[0] }}</th>
          <th class="text-right" v-for="th in ths.slice(1)" :key="th">
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="coin in slicedCoins"
          :key="coin.id"
          class="border-b-base-content hover:bg-primary hover:bg-opacity-5 cursor-pointer group"
          @click="$router.push({
            name: 'coin',
            params: { id: coin.id },
          })"
        >
          <td class="flex items-center">
            <img :src="coin.image" :alt="coin.name" class="w-10 h-10 mr-4" />
            <p class="group-hover:bg-gradient-to-r group-hover:text-transparent bg-clip-text from-primary to-secondary">{{ coin.name }}</p>
          </td>
          <td class="text-right">$ {{ coin.current_price.toLocaleString("us") }}</td>
          <td
            :class="
              coin.price_change_percentage_24h >= 0
                ? 'text-success'
                : 'text-error'
            "
            class="text-right"
          >
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
          <td class="text-right">
            $ {{ formatPrice(coin.market_cap) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="mt-16" v-else>
    <div v-for="index in 10" :key="index" class="mb-4">
      <div class="skeleton w-full h-8"></div>
    </div>
  </div>
</template>

<script>
import { formatPrice } from "@/utils/textUtils";

export default {
  data() {
    return {
      ths: ["Coin", "Price", "24h Change", "Market Cap"],
    };
  },
  methods: {
    formatPrice
  },
  props: {
    coins: {
      type: Array,
      required: true,
    },
  },
  computed: {
    slicedCoins() {
      return this.coins.slice(0, 10);
    },
  },
};
</script>

<style></style>
