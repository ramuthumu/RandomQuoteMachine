$(document).ready(function(){

  var author;
	var quoteAPI = "https://random-quote-generator.herokuapp.com/api/quotes/random";
	var quotes;
	$.getJSON(quoteAPI, function(json){
	   quotes = json.quote;
	  authors = json.author;
	  $("#quote-text").html(json.quote);
	});
$("#new-quote").on("click", function(){
$.getJSON(quoteAPI, function(json){
   quotes = json.quote;
  authors = json.author;
  $("#quote-text").html(json.quote);
});
});

$("#tweet").on("click",function () {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=' + quotes);
});


});
