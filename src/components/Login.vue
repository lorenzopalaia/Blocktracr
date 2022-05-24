<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card rounded">
          <div class="card-body text-center" id="card">
            <div class="mb-md-5 mt-md-4 pb-5">
              <form name="formLogin">
                <p class="sequel-font-small text-white fs-2">Login</p>
                <p class="sequel-font-small text-white">Inserisci Email e Password</p>
                <div class="form-outline">
                  <input
                    type="email"
                    class="form-control form-control-lg sequel-font-small bg-transparent"
                    placeholder="Email"
                    id="email"
                    v-model="email"
                    required
                  />
                  <input
                    type="password"
                    class="form-control form-control-lg mt-4 sequel-font-small bg-transparent"
                    placeholder="Password"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
                <div class="alert alert-warning mt-4" role="alert" v-if="isLog === false">
                  Email o password errata
                </div>
                <div class="mt-4">
                  <input class="me-2" type="checkbox" id="rememberMe" value="true" checked>
                  <label for="rememberMe"><p class="sequel-font-small text-white">Ricordami</p></label>
                </div>
                <a href="#" class="btn btn-primary sequel-font-big" @click="login">
                  Entra
                </a>
              </form>
              <div>
                <p class="mt-3 sequel-font-small text-white">
                  Non hai un account?
                  <router-link class="sequel-font-big text-primary text-decoration-none" to="/register">Registrati</router-link>
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
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      isLog: null,
      email: '',
      password: '',
    };
  },
  methods:{
    async login() {
      let user = {
        email: this.email,
        password: this.password
      }
      await axios.post('http://localhost:5000/login', user)
        .then(res => {
          if (res.status === 200) {
            // we choose to set token in localStorage or sessionStorage based on checkbox status
            if(document.getElementById("rememberMe").checked) {
              localStorage.setItem('token', res.data.token);
            } 
            else {
              sessionStorage.setItem('token', res.data.token);
            }
            this.emitter.emit("loggedIn"); // emit event in order to notice other components
            this.$router.push('/dashboard'); //mount dashboard component
          }
        }, err => {
          console.log(err.response);
          this.isLog = false;
        })
    }
  },
};
</script>

<style scoped>
.card {
  background-color: rgba(112, 103, 207, 0.1);
}

.sequel-font-small {
  font-family: "Sequel100Black-45", Helvetica, Arial;
}
.sequel-font-big {
  font-family: "Sequel100Black-85", Helvetica, Arial;
}

input {
  color: #7067cf !important;
  border-color: transparent;
  border-bottom-color: #7067cf !important;
  border-radius: 0 !important;
}
input:focus {
  background: transparent;
  outline-width: 0;
}
input::placeholder {
  color: #7067cf;
}
</style>
