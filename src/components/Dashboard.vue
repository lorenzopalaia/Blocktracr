<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Invested</p>
            <h3>$ 56.000</h3>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Portfolio Value</p>
            <h3>$ 56.000</h3>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Profit</p>
            <h3>$ 56.000</h3>
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
    },
  },
  mounted() {
    this.getData();
    setInterval(this.getData, 60000);
  },
};
</script>

<style></style>
