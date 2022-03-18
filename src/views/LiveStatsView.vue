<template>
  <div class="livestats">
    <LiveStats :page=$route.params.page></LiveStats>
  </div>
</template>

<script>
// @ is an alias to /src
import LiveStats from '@/components/LiveStats.vue'

export default {
  name: 'LiveStatsView',
  components: {
    LiveStats
  }
}
</script>