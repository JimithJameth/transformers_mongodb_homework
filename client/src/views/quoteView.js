var QuoteView = function(quotes){
  this.render(quotes);
}

QuoteView.prototype = {
  render: function(quotes){
    
    console.log(quotes);
    quotes.forEach( function(quote){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('quotes');
      text.innerText = quote.name + ": " + '"' + quote.quote + '"';
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = QuoteView;