// set up array for random number generator between 19 and 120

randomNumberArray = [];

for (let i = 19; i < 121; i++) {
  randomNumberArray.push(i);
}

// set up array for gem number generator between 1 and 12

gemArray = [];

for (let i = 0; i < 13; i++) {
  gemArray.push(i);
}

// add data type to store data for each element for gem and random number id to display a random pick from the arrays
// set score id data value to zero and display its contents
$("#icon1").attr("data-number", "");
$("#icon2").attr("data-number", "");
$("#icon3").attr("data-number", "");
$("#icon4").attr("data-number", "");

var win = 0;
var losses = 0;

$(document).ready(function() {
  var win = 0;
  var losses = 0;
  $("#icon1").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
  $("#icon2").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
  $("#icon3").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
  $("#icon4").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
  $("#random-number").attr(
    "data-number",
    randomNumberArray[Math.floor(Math.random() * 119)]
  );
  $("#random-number").text($("#random-number").attr("data-number"));
  $("#score").attr("data-sum", 0);
  $("#score").text($("#score").attr("data-sum"));

  // make on click events for each gem which add its value to the score value

  $("#icon1").on("click", function() {
    $("#score").attr(
      "data-sum",
      parseInt($("#icon1").attr("data-number")) +
        parseInt($("#score").attr("data-sum"))
    );
    $("#score").text($("#score").attr("data-sum"));
    gamereset();
  });

  $("#icon2").on("click", function() {
    $("#score").attr(
      "data-sum",
      parseInt($("#icon2").attr("data-number")) +
        parseInt($("#score").attr("data-sum"))
    );
    $("#score").text($("#score").attr("data-sum"));
    gamereset();
  });

  $("#icon3").on("click", function() {
    $("#score").attr(
      "data-sum",
      parseInt($("#icon3").attr("data-number")) +
        parseInt($("#score").attr("data-sum"))
    );
    $("#score").text($("#score").attr("data-sum"));
    gamereset();
  });

  $("#icon4").on("click", function() {
    $("#score").attr(
      "data-sum",
      parseInt($("#icon4").attr("data-number")) +
        parseInt($("#score").attr("data-sum"))
    );
    $("#score").text($("#score").attr("data-sum"));
    gamereset();
  });

  // make an if else function for when score = random number (add to win, reset random number, score and gem numbers)...
  //    score < random number (do nothing)
  //    score > random number (add to loss, reset random number, score and gem numbers)

  function gamereset() {
    if (
      parseInt($("#score").attr("data-sum")) >
      parseInt($("#random-number").attr("data-number"))
    ) {
      losses++;
      $("#losses").text("Losses: " + losses);
      $("#icon1").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#icon2").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#icon3").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#icon4").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#random-number").attr(
        "data-number",
        randomNumberArray[Math.floor(Math.random() * 119)]
      );
      $("#random-number").text($("#random-number").attr("data-number"));
      $("#score").attr("data-sum", 0);
      $("#score").text($("#score").attr("data-sum"));
    }

    if (
      parseInt($("#score").attr("data-sum")) ===
      parseInt($("#random-number").attr("data-number"))
    ) {
      win++;
      $("#wins").text("Wins: " + win);
      $("#icon1").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#icon2").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#icon3").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#icon4").attr("data-number", gemArray[Math.floor(Math.random() * 12)]);
      $("#random-number").attr(
        "data-number",
        randomNumberArray[Math.floor(Math.random() * 119)]
      );
      $("#random-number").text($("#random-number").attr("data-number"));
      $("#score").attr("data-sum", 0);
      $("#score").text($("#score").attr("data-sum"));
    }
  }
});
