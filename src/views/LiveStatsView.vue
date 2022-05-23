<template>
  <div class="livestats">
    <LiveStats />
  </div>
</template>

<script>
// @ is an alias to /src
import LiveStats from "@/components/LiveStats.vue";
export default {
  name: "LiveStatsView",
  components: {
    LiveStats,
  },
};
</script>