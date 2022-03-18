<template>
  <div class="livestatsDetails">
      <LiveStatsDetails :coin=$route.params.id></LiveStatsDetails>
  </div>
</template>

<script>
// @ is an alias to /src
import LiveStatsDetails from '@/components/LiveStatsDetails.vue'


export default {
  name: "LiveStatsDetailsView",
  components: {
    LiveStatsDetails,
  },
};
</script>
