<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>{{this.name}}</p><br>
              <!-- Bottone modifica profilo-->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#profilo">
                Modifica profilo
              </button>

              <div class="modal" id="profilo">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!--Header-->
                    <div class="modal-header">
                      <h4 class="modal-title">Modifica Profilo</h4>
                      <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Body -->
                    <div class="moda l-body justify-content-center">

                      <!--modifica email-->
                      <a class="btn btn-primary" href="#collapseEmail" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseEmail">
                        Modifica email
                      </a>
                      <div class="collapse" id="collapseEmail">
                        <!--<label for="disabledEmail" class="form-label">Vecchia emial</label>
                        <input type="email" id="disabledEmial" class="fomr-control"  value={{this.email}} disabled>-->
                        <label for="nuovaEmail" class="form-label">Inserisci la nuova emial</label>
                        <input type="email" id="nuovaEmail" placeholder="inserisci nuova email" v-model="newEmail" autocomplete="off">
                      </div>
                      <br>

                      <!--modifica password-->
                      <a class="btn btn-primary" href="#collapsePassword" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapsePassword">
                        Modifica password
                      </a>
                      <div class="collapse" id="collapsePassword">
                        <input type="password" placeholder="inserisci nuova password" v-model="password" autocomplete="off">
                      </div>
                    </div>  

                    <!-- Footer -->
                    <div class="modal-footer">  
                      <button type="button" class="btn btn-primary" @click="edit">Modifica account</button>
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Annulla</button>
                    </div>
                  </div>
                </div>
              </div>

          <!--aggiungi wallet-->
          </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wallet">
              Aggiungi wallet
            </button>

              <div class="modal" id="wallet">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!--Header
                    <div class="modal-header">
                      <h4 class="modal-title">Aggiungi wallet</h4>
                      <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>-->

                    <!-- Body -->
                    <div class="modal-body justify-content-center">
                    <form action="post">
                      <input type="text" v-model="name_exchange" placeholder="name exchange" />
                      <input type="text" v-model="api_key" placeholder="api key" />
                      <input type="text" v-model="api_secret" placeholder="api secret" /><br>
                    </form>
                    </div>  

                    <!-- Footer -->
                    <div class="modal-footer">  
                      <a href="#" class="btn btn-primary brn-block" @click="add">
                        Aggiungi credenziali
                      </a>
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Annulla</button>
                    </div>
                  </div>
                </div>
              </div>  
            

        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Portfolio Value</p>
            <h3>$ 156.000</h3>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <p>Profit</p>
            <h3>$ 156.000</h3>
            <button class="btn btn-primary" @click="remove"> Elimina account</button><br>
            <!-- form modifica account --> 
            <form action="post">
              <input type="text" v-model="name_exchange" placeholder="name exchange" />
              <input type="text" v-model="api_key" placeholder="api key" />
              <input type="text" v-model="api_secret" placeholder="api secret" /><br>
              <a href="#" class="btn btn-primary brn-block" @click="add">
                Aggiungi credenziali
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Dashboard",
  data() {
    return {
      token: "",
      name: "",
      email: "",
      //newEmail: "", 
      password:"",
      name_exchange: "",
      api_key: "",
      api_secret: ""
    };
  },
  methods: {
    async getData() {
      let binance = new ccxt.binance ({
        apiKey: "eTTdvdRluP7o3P3egzbaHH2inaRCX7ZV6EwokdracUitTtiAnXlRSxpgJCgxUgL5",
        secret: "bpqwwR0pBrxwGVsuVTg6H1FNjybVBo8Bu96rtSvJEV70YhBqXuCC2zcoBRMvQXJT",
        proxy: "https://dashboard-cors.herokuapp.com/"
      })
      console.log(binance.id, await binance.fetchBalance())
    },
    
    //eliminazione account
    remove() {
      axios.delete('http://localhost:5000/delete', {headers: {token: this.token}})
      .then(res=>{
        if(res.status===404){
          console.log('utente non eliminato');
        }
        else{
          localStorage.clear();
          sessionStorage.clear();
          this.$router.push('/');
        }
      })
    },

    //modifica profilo
    edit(){
      if(this.newEmail!=null){
        this.email=this.newEmail
      }
      let user={
        token: this.token,
        email: this.email,
        password: this.password,
      }
      axios.post('http://localhost:5000/user', user)
      .then(res=>{
        if(res.status===405){
          console.log('account non modificato');
        }
        else controle.log('account modificato');
        
      })
    },

    //aggiungi wallet
    add(){
      let wallet = {
        token: this.token,
        name_exchange: this.name_exchange,
        api_key: this.api_key,
        api_secret: this.api_secret
      }

      axios.put('http://localhost:5000/user', wallet)
      .then(res=>{
        if(res.status===405){ 
          console.log('account non modificato');
        }
        else console.log('account modificato');
      })
    }

  },

  mounted() {
    this.getData();
    setInterval(this.getData, 60000);
    //estrapolo il token e me lo salvo in una variabile 
    if(localStorage.getItem('token')) this.token = localStorage.getItem('token');
    else if (sessionStorage.getItem('token')) this.token = sessionStorage.getItem('token');
    //mi prendo le informazioni dell'utente dal server
    axios.get('http://localhost:5000/user', { headers: { token: this.token}})
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email; 
      })
  },

  created() {
    if(localStorage.getItem('token')=== null && sessionStorage.getItem('token')===null) {
      this.$router.push('/login');
    }
  }
};
</script>

<style></style>
