<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>BLOCKTRACR</h1>
          <p>
            Tieni traccia dell'andamento dei tuoi portafogli crypto e DeFi
            Wallet
          </p>
          <button
            type="button"
            class="btn btn-primary"
            style="font-family: 'Sequel100Black-85', Helvetica, Arial"
          >
            Registrati
          </button>
        </div>
        <div class="col d-none d-sm-block d-sm-none d-md-block">
          <img src="../assets/images/eth.svg" alt="eth" />
        </div>
      </div>
      <div class="container" style="padding-top: 20px">
        <h3 class="cardsIntro">BENEFITS</h3>
        <p style="color: #e0e0e0; text-align: center">
          There are the advantages of minting a NFT with our service
        </p>
        <div>
          <div class="row">
            <div class="col-sm d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/eth-outline.svg"
                  class="card-img-top"
                  alt="ethOutline"
                />
                <div class="card-body">
                  <p class="card-text">
                    The reliability of Ethereum blockchain
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/eth-nft.svg"
                  class="card-img-top"
                  alt="ethNft"
                />
                <div class="card-body">
                  <p class="card-text">
                    The uniqueness of<br />non-fungible tokens
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm d-flex justify-content-center">
              <div class="card">
                <img
                  src="../assets/images/eth-two-color.svg"
                  class="card-img-top"
                  alt="ethTwoColor"
                />
                <div class="card-body">
                  <p class="card-text">The guarantee of decentralization</p>
                </div>
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
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-family: "Sequel100Black-85", Helvetica, Arial;
  color: #7067cf;
}

p {
  font-family: "Sequel100Black-45", Helvetica, Arial;
  color: #e0e0e0;
}

h3 {
  color: #f5f5f5;
  text-align: center;
  font-family: "Sequel100Black-85", Helvetica, Arial;
}

button {
  background-color: #2ab2fc;
}
.card:hover {
  transform: scale(1.1);
}
.card {
  transition: transform 0.2s ease;
  box-shadow: 0 4px 6px 0 rgba(22, 22, 26, 0.18);
  width: 18rem;
  background-color: rgba(112, 103, 207, 0.1);
  border-radius: 10px;
  border-width: 1px;
  border-color: rgba(42, 178, 252, 0.5);
}

.col-sm {
  padding-top: 20px;
}

.card-img-top {
  height: 256px;
}

.container {
  padding: 0;
}
</style>
