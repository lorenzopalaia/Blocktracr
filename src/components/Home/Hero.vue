<template>
  <div class="flex flex-row mt-32">
    <div class="flex w-1/12 items-center justify-center">
        <img src="../../assets/imgs/btc.png" alt="btc" class="animate-bounce w-20" />
    </div>
    <div class="w-10/12">
        <h1 class="text-8xl text-center text-white uppercase">
            Track cryptos with<br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              Blocktracr
            </span>
          </h1>
    </div>
    <div class="flex w-1/12 items-center justify-center">
        <img src="../../assets/imgs/eth.png" alt="eth" class="animate-bounce w-20" />
    </div>
  </div>
  <div class="flex flex-row gap-8 mt-16 text-center text-2xl text-white" v-if="coins.length !== 0">
    <div 
      class="w-1/4 cursor-pointer"  
      v-for="coin in slicedCoins" 
      :key="coin"
      @click="$router.push({
        name: 'coin',
        params: { id: coin.id },
      })"
    >
      <div class="flex items-center justify-center">
        <img :src="coin.image" :alt="coin.name" class="w-24 h-24" />
      </div>
      <p class="mt-2">
        {{ coin.name }}
        <span
          :class="coin.price_change_percentage_24h >= 0
              ? 'text-success'
              : 'text-error'
            "
        >{{ coin.price_change_percentage_24h.toFixed(2) }}%</span
        >
      </p>
      <p>$ {{ coin.current_price.toLocaleString("us") }}</p>
    </div>
  </div>
  <div class="flex flex-row gap-8 mt-16" v-else>
    <div class="w-1/4 flex flex-col gap-4 items-center justify-center" v-for="index in 4" :key="index">
      <div class="skeleton w-32 h-32"></div>
      <div class="skeleton h-4 w-32"></div>
      <div class="skeleton h-4 w-32"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coins: {
      type: Array,
      required: true,
    },
  },
  computed: {
    slicedCoins() {
      console.log(this.coins);
      return this.coins.slice(0, 4);
    },
  },
};
</script>

<style></style>
