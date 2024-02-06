<template>
  <!--<CoinBar />-->
  <div class="container mx-auto">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CoinBar from './components/CoinBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
</style>