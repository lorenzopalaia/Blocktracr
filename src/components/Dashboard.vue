<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Invested</p>
            <h3>$ 156.000</h3>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Portfolio Value</p>
            <h3>$ 156.000</h3>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Profit</p>
            <h3>$ 156.000</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {
    async getData() {
      let binance = new ccxt.binance ({
        apiKey: "eTTdvdRluP7o3P3egzbaHH2inaRCX7ZV6EwokdracUitTtiAnXlRSxpgJCgxUgL5",
        secret: "bpqwwR0pBrxwGVsuVTg6H1FNjybVBo8Bu96rtSvJEV70YhBqXuCC2zcoBRMvQXJT",
        proxy: "https://dashboard-cors.herokuapp.com/"
      })
      console.log(binance.id, await binance.fetchBalance())
    },
  },
  mounted() {
    this.getData();
    setInterval(this.getData, 60000);
  },
};
</script>

<style></style>
