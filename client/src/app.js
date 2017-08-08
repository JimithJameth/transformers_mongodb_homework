var QuoteView = require('./views/quoteView');

var makeRequest = function(url,callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load",callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) return;
  var quoteString = this.responseText;
  var quotes = JSON.parse(quoteString);
  var quoteView = new  QuoteView(quotes);
}

var app = function(){
  var url = "http://localhost:3000/quotes";
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);