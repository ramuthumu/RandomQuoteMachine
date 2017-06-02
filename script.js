$(document).ready(function(){

  var author;
	var quoteAPI = "http://quotes.stormconsultancy.co.uk/random.json";
	var quotes;
	$.getJSON(quoteAPI, function(json){
	   quotes = json.quote;
	  author = json.author;
	  $("#quote-text").html(json.quote);
    $("#author").html(json.author);
	});
$("#new-quote").on("click", function(){
$.getJSON(quoteAPI, function(json){
   quotes = json.quote;
  author = json.author;
  $("#quote-text").html(json.quote);
  $("#author").html(json.author);
});
});

$("#tweet").on("click",function () {
  window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=' + quotes);
});


});
