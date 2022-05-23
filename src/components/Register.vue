<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card rounded">
          <div class="card-body text-center" id="card">
            <div class="mb-md-5 mt-md-4 pb-5">
              <form name="formLogin">
                <p class="h2">Registrati</p>
                <p>Inserisci Username, Email e Password</p>
                <div class="form-outline form-white">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Username"
                    id="name"
                    v-model="name"
                    required
                  />
                  <br />
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
                  <div class="alert alert-danger" role="alert" v-if="this.errore===true">
                    Email già in uso
                  </div>
                </div>
                <br />
                <a href="#" class="btn btn-primary brn-block"  @click="signup">
                  Invia
                </a>
              </form>
              <div>
                <p class="m-2">
                  Hai già un account?
                  <router-link to="/login">Login</router-link>
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
      errore:false,
    }
  },
  methods: {
    async signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      if(this.name!='' && this.email!='' && this.password!=''){
        await axios.post('http://localhost:5000/register', newUser)
          .then(res => {
            this.$router.push('/login'); //utente appena registrato viene reindirizzato nella pagina di login
          }, err => {
            this.errore=true;
            console.log(err.response)
            err.response.data.error
          })
      }
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
  outline: none;
}

input::placeholder {
  color: #7067cf;
}
</style>
