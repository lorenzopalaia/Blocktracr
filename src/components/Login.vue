<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem">
          <div class="card-body text-center" id="card">
            <div class="mb-md-5 mt-md-4 pb-5">
              <form action="post" name="formLogin">
                <h2>Login</h2>
                <p class="text-white">Please enter your email and password</p>

                <div class="form-outline form-white">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email"
                    id="email"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>
                <!--<div class="form-check d-flex justify-content-center">
                                    <input class="form-check-input" type="checkbox" id="rememberMe">
                                    <label class="form-check-label" for="rememberMe"> Remember me</label>
                                </div>-->
                <br />
                <button class="btn btn-primary brn-block" type="submit">
                  Submit
                </button>
              </form>
              <div>
                <p class="mb-0">
                  Don't have an account?
                  <router-link to="/register">Register</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style scoped>
#card {
  background-color: rgba(112, 103, 207, 0.1);
}
</style>
