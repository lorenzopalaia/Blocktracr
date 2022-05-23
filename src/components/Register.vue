<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card rounded">
          <div class="card-body text-center" id="card">
            <div class="mb-md-5 mt-md-4 pb-5">
              <form name="formLogin">
                <p class="sequel-font-small text-white fs-2">Registrati</p>
                <p class="sequel-font-small text-white">Inserisci Username, Email e Password</p>
                <div class="form-outline">
                  <input
                    type="text"
                    class="form-control form-control-lg bg-transparent sequel-font-small"
                    placeholder="Username"
                    id="name"
                    v-model="name"
                    required
                  />
                  <input
                    type="email"
                    class="form-control form-control-lg mt-4 bg-transparent sequel-font-small"
                    placeholder="Email"
                    id="email"
                    v-model="email"
                    required
                  />
                  <input
                    type="password"
                    class="form-control form-control-lg mt-4 bg-transparent sequel-font-small"
                    placeholder="Password"
                    id="password"
                    v-model="password"
                    required
                  />
                  <div class="alert alert-danger mt-4" role="alert" v-if="emailAlreadyInUse === true">
                    Email già in uso
                  </div>
                </div>
                <a href="#" class="btn btn-primary sequel-font-big mt-4"  @click="signup">
                  Invia
                </a>
              </form>
              <div>
                <p class="mt-3 sequel-font-small text-white">
                  Hai già un account?
                  <router-link class="sequel-font-big text-primary text-decoration-none" to="/login">Login</router-link>
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
  name: "Register",
  data(){
    return{
      name: '',
      email: '',
      password: '',
      emailAlreadyInUse: false,
    }
  },
  methods: {
    async signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      if(this.name !== '' && this.email !== '' && this.password !== '') {
        await axios.post('http://localhost:5000/register', newUser)
          .then(res => {
            this.$router.push('/login'); // redirect user to login page
          }, err => {
            this.emailAlreadyInUse = true;
            console.log(err.response)
          })
      }
    }
  },
};
</script>

<style scoped>
.card {
  background-color: rgba(112, 103, 207, 0.1);
}

.sequel-font-big {
  font-family: "Sequel100Black-85", Helvetica, Arial;
}
.sequel-font-small {
  font-family: "Sequel100Black-45", Helvetica, Arial;
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
  outline: none;
}
input::placeholder {
  color: #7067cf;
}
</style>
