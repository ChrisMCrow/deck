$(document).ready(function() {
  var suits = ["clubs", "spades", "hearts", "diamonds"];
  var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
    $("ul").append("<li>" + rank + " of " + suit +
    "</li>")
    });
  });
});
