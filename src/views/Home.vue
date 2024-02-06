<template>
  <Hero :coins="coins"/>
  <Table :coins="coins"/>
  <Feature />
</template>

<script>
import Hero from "../components/Home/Hero.vue";
import Table from "../components/Table.vue";
import Feature from "../components/Home/Feature.vue";

export default {
  components: {
    Hero,
    Table,
    Feature,
  },
  data() {
    return {
      coins: [],
    };
  },
  methods: {
    onMountedGetCoins() {
      fetch("http://localhost:3000/crypto")
        .then((res) => res.json())
        .then((data) => {
          this.coins = data
        });
    },
  },
  mounted() {
    this.onMountedGetCoins();
  },
};
</script>

<style></style>
