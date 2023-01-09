

  var url = "https://api.blockchair.com/bitcoin/stats/0?key=G___oGohGjhTGHtVOx8mmlNZokAlz5b4";

 var Crypto = new XMLHttpRequest();
  Crypto.open('GET', url);
  Crypto.send();
  console.log(Crypto)


 Crypto.addEventListener('load', function (e) {
    var data = e.target.response;
    var response = JSON.parse(data);
    console.log(response);
  });
