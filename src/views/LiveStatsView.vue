<template>
  <div class="livestats">
    <LiveStats :page=currentPage></LiveStats>
    <pagination
    :totalPages="50"
    :perPage="10"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import LiveStats from '@/components/LiveStats.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'LiveStatsView',
  components: {
    LiveStats,
    Pagination
  },
  data(){
    return{
      currentPage:1,
    };
  },
  methods:{
    onPageChange(page){
      console.log(page)
      this.currentPage=page;
    }
  }
}
</script>