/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// Obtener informacion de la API

var url = "https://api.blockchair.com/bitcoin/stats/0?key=G___oGohGjhTGHtVOx8mmlNZokAlz5b4";

let Crypto = new XMLHttpRequest();
Crypto.open('GET', url);
Crypto.send();
console.log(Crypto)

Crypto.addEventListener('load', function (e) {
  var data = e.target.response;
  var response = JSON.parse(data);
  console.log(response);

  var mostrarDatos = response.data;

  var container = document.querySelector(".js-container");
  container.innerHTML += "<p>hola \""+ mostrarDatos.blockchain_size +"</p>";

  const market_price_usd = document.getElementById("market_price_usd");
  market_price_usd.innerText = mostrarDatos.market_price_usd;

  const market_cap_usd = document.getElementById("market_cap_usd");
  market_cap_usd.innerText = mostrarDatos.market_cap_usd;

  const difficulty = document.getElementById("difficulty");
  difficulty.innerText = mostrarDatos.difficulty;

  const blocks = document.getElementById("blocks");
  blocks.innerText = mostrarDatos.blocks;

  const blocks_24h = document.getElementById("blocks_24h");
  blocks_24h.innerText = mostrarDatos.blocks_24h;
});
/*
*
* window.Blockchair = {
        Host: "https://blockchair.com",
        ApiHost: "https://api.blockchair.com",
        CDN: "https://loutre.blockchair.io",
        Page: "Dashboard",
        PageProps: {},
        ApiUrl: "/bitcoin/stats",
        Hash: "",
        Locale: "en",
        chain: "bitcoin",
        chains: ["bitcoin","ethereum","bnb","litecoin","cardano","ripple","polkadot","dogecoin","bitcoin-cash","stellar","monero","kusama","ecash","zcash","dash","mixin","groestlcoin"],
        ticker: "BTC",
        price_usd: 22642,
        configChain: {"fraction":8,"has_mempool":true,"has_broadcast":true,"has_raw_tx":true,"bitcoin_like":true,"has_price_history":true,"has_suggested_fee":true,"has_wallet_statement":true,"colors":{"stroke":["#FFD600","#FF4F28","#FF0303"],"fill":["#FF8C21","#FFB421"]}},
        blockchains: ["bitcoin","ethereum","bnb","litecoin","cardano","ripple","polkadot","dogecoin","bitcoin-cash","stellar","monero","kusama","ecash","zcash","dash","mixin","groestlcoin"],
        locales: ["en","es","fr","it","nl","pt","ru","zh","fa","id","tr","ja","ko","de"],
        Lang: {
            'app.chain.bitcoin': "Bitcoin"
        },
        Currency: "USD"
    };

*
*
* */
