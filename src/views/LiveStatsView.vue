<template>
  <div class="livestats">
    <LiveStats :page="currentPage" />
    <Pagination
      :totalPages="totalPages"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import LiveStats from "@/components/LiveStats.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "LiveStatsView",
  components: {
    LiveStats,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 135 //default value updated asyncronously via getPages()
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    async getPages() {
      let uri = "https://api.coingecko.com/api/v3/global";
      let config = { headers: { Accept: "application/json" } };
      const res = await axios.get(uri, config);
      this.totalPages = Math.ceil(res.data.data.active_cryptocurrencies / 100);
      //ceil of total listed cryptos divided by 100 (number of cryptos per page)
    },
  },
  mounted() {
    this.getPages();
    setInterval(this.getPages(), 60000);
  }
};
</script>
