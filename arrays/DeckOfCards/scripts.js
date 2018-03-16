var div = document.getElementById('deckOfCards');
var ul = document.createElement("ul");
div.appendChild(ul);
var txt = "";
var suits = ["hearts", "clubs", "spades", "diamond"];
var ranks = ["Ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

suits.forEach(function(suit){
  ranks.forEach(function(rank){
    console.log("<li>" + rank + " of " +  suit + "</li><br>");
  });
});