const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

let cryptoListCache = null;
let cryptoDetailsCache = {};

let lastApiCallTimestamp = null;
const cacheTime = 1000 * 60 * 10; // 10 minutes

app.use(cors());

app.get("/crypto", async (req, res) => {
  await handleCryptoListRequest(req, res);
});

app.get("/crypto/:id", async (req, res) => {
  const { id } = req.params;
  await handleCryptoDetailsRequest(id, res);
});

async function handleCryptoListRequest(req, res) {
  if (
    cryptoListCache &&
    lastApiCallTimestamp &&
    Date.now() - lastApiCallTimestamp < cacheTime
  ) {
    const currentTime = new Date().toLocaleString();
    console.log(`[${currentTime}] /crypto @Cache`);
    return res.json(cryptoListCache);
  }

  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );

    cryptoListCache = response.data;
    lastApiCallTimestamp = Date.now();

    const currentTime = new Date().toLocaleString();
    res.json(cryptoListCache);
    console.log(`[${currentTime}] /crypto @API`);
  } catch (error) {
    const currentTime = new Date().toLocaleString();
    console.error(`[${currentTime}] Error during request to API:`, error.message);
    res.status(500).json({ error: "Error during request to API" });
  }
}

async function handleCryptoDetailsRequest(id, res) {
  // Verifica se i dati sono presenti nella cache e se sono stati aggiornati di recente
  if (
    cryptoDetailsCache[id] &&
    lastApiCallTimestamp &&
    Date.now() - lastApiCallTimestamp < cacheTime
  ) {
    const currentTime = new Date().toLocaleString();
    console.log(`[${currentTime}] /crypto/${id} @Cache`);
    return res.json(cryptoDetailsCache[id]);
  }

  // Se la cache non è valida o i dati specifici per l'id non sono presenti, esegui la richiesta API
  await fetchCryptoDetailsFromApi(id, res);
}

async function fetchCryptoDetailsFromApi(id, res) {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );

    // Aggiorna la cache con i nuovi dati specifici per l'id
    cryptoDetailsCache[id] = response.data;
    lastApiCallTimestamp = Date.now();

    const currentTime = new Date().toLocaleString();
    res.json(response.data);
    console.log(`[${currentTime}] /crypto/${id} @API`);
  } catch (error) {
    const currentTime = new Date().toLocaleString();
    console.error(`[${currentTime}] Error during request to API:`, error.message);
    res.status(404).json({ error: "Coin not found" });
  }
}

app.listen(PORT, () => {
  const currentTime = new Date().toLocaleString();
  console.log(`[${currentTime}] Server listening on port ${PORT}`);
});