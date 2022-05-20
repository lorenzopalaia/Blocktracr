<template>
  <div class="login">
    <Login
      @onlogin="onLogin"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    Login,
  },
  data: {
    return() {
      isLog: false
    }
  },
  methods: {
    onLogin() {
      console.log("Ho informato LoginView");
    }
  }
};
</script>
