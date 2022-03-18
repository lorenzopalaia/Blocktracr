<template>
  <div class="dashboard">
    <Dashboard></Dashboard>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'DashboardView',
  components: {
    Dashboard
  }
}
</script>