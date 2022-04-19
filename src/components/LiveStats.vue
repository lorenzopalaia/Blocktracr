<template>
    <div class="container">
        <div class = "row ">
            <input type="text" class="form-control rounder-0 border-0 my-4 d-flex" placeholder="Search Coin" @keyup="searchCoin()" v-model="coinSearch" id="search">

            <table class ="table text-white">
                <thead>
                    <tr>
                        <th v-for="title in titles" :key="title">
                            {{title}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(coin, index) in filterCoins" :key="coin.id">
                        <td class="text-muted">{{ (index + 1) + 100 * (this.$props.page - 1) }}</td>
                        <td>
                            <router-link style="text-decoration: none;" class="text-white" :to="{ name: 'livestatsDetails', params: { id: coin.id }}">
                            <img :src="coin.image" style="width:2rem" class="me-2">
                            <span>{{coin.name}}</span>
                            <span class="ms-2 text-uppercase text-muted">
                                {{coin.symbol}}
                            </span>
                            </router-link>
                        </td>
                        <td>
                            <p v-if="coin.current_price">
                                {{coin.current_price}} $
                            </p>
                            <p v-else>
                                N/D
                            </p>
                        </td>
                        <td :class="[coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger']">
                            <p v-if="coin.price_change_percentage_24h">
                                {{coin.price_change_percentage_24h}}%
                            </p>
                            <p v-else class="text-white">
                                N/D
                            </p>
                        </td>
                        <td>
                            <p v-if="coin.total_volume">
                                {{coin.total_volume.toLocaleString() }} $
                            </p>
                            <p v-else>
                                N/D
                            </p>
                        </td>
                        <td>
                            <p v-if="coin.market_cap">
                                {{coin.market_cap.toLocaleString() }} $
                            </p>
                            <p v-else>
                                N/D
                            </p>
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
  name: "LiveStats2",
  props: {
    page: Number,
  },
  data() {
    return {
      coins: [],
      filterCoins:[],
      titles:[
          '#',
          'Name',
          'Price',
          '24h%',
          '24h Vol',
          'Market Cap.',
      ],
      coinSearch:"",
    };
  },

  watch:{
    page: function(){
      this.getData();
    }
  },

  methods: {
    async getData() {
      let uri =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=" + this.$props.page;
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      console.log(res.data);
      this.coins = res.data;
      this.filterCoins=res.data;
    },
    searchCoin(){
        this.filterCoins = this.coins.filter((coin)=>coin.name.toLowerCase().includes(this.coinSearch.toLowerCase())||coin.symbol.toLowerCase().includes(this.coinSearch.toLowerCase()))

    },
  },
  mounted() {
    this.getData();
    setInterval(this.getData, 60000);
  },
};
</script>

<style scoped>
    .table{
        background-color: rgba(112, 103, 207, 0.1);
    }
    .search{
        background-color: #E0E0E0;
    }
</style>