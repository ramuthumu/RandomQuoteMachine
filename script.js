$(document).ready(function(){

	var quotes = "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.";
  var author;
$("#new-quote").on("click", function(){
  var quoteAPI = "https://random-quote-generator.herokuapp.com/api/quotes/random";

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
