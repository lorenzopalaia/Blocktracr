<template>
  <div class="register">
    <Register></Register>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'

export default {
  name: 'RegisterVue',
  components: {
    Register
  }
}
</script>