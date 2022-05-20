<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card rounded">
          <div class="card-body text-center" id="card">
            <div class="mb-md-5 mt-md-4 pb-5">
              <form action="post" name="formLogin">
                <p class="h2">Login</p>
                <p>Inserisci Email e Password</p>
                <div class="form-outline">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email"
                    id="email"
                    v-model="email"
                    required
                  />
                  <br />
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
                <div class="alert alert-warning" role="alert" v-if="this.isLogin===false">
                  Email o password errata
                </div>
                <br />
                <div>
                  <input class="me-2" type="checkbox" id="rememberMe" value="true" checked>
                  <label for="rememberMe"><p>Ricordami</p></label>
                </div>
                <a href="#" class="btn btn-primary brn-block" @click="login">
                  Entra
                </a>
              </form>
              <div>
                <p class="m-2">
                  Non hai un account?
                  <router-link to="/register">Registrati</router-link>
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
      isLogin: "",
      email: '',
      password: '',
    };
  },
  methods:{
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          if (res.status === 200) {
            //inserimento token in memoria in base al checkbox
            if(document.getElementById("rememberMe").checked){
            localStorage.setItem('token', res.data.token);
            } 
            else{
              sessionStorage.setItem('token', res.data.token);
            }
            this.$emit("onlogin", true);
            this.$router.push('/dashboard');
          }
        }, err => {
          console.log(err.response);
          this.isLogin = false;
          this.error = err.response.data.error
        })
    }
  },
};

</script>

<style scoped>
.card {
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  background-color: rgba(112, 103, 207, 0.1);
}

p {
  color: #f5f5f5;
  font-family: "Sequel100Black-45", Helvetica, Arial;
}

input {
  background: transparent;
  color: #7067cf !important;
  font-family: "Sequel100Black-45", Helvetica, Arial;
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
