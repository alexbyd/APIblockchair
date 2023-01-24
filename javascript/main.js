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

  /* datos a mostrar

  Nombre de la crypto
  Valor en el mercado = market_price_usd
  Market cap = market_cap_usd
  circulacion = circulation
  DIficultad de minado= difficulty
  Numero de blokes = blocks
  */

  var mostrarDatos = response.data;

  var container = document.querySelector(".js-container");
  container.innerHTML += "<p>hola \""+ mostrarDatos.blockchain_size +"</p>";
});
