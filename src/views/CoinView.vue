<template>
  <div class="coin">
    <Coin :coin="$route.params.id"></Coin>
  </div>
</template>

<script>
// @ is an alias to /src
import Coin from "@/components/Coin.vue";

export default {
  name: "CoinView",
  components: {
    Coin,
  },
};
</script>
