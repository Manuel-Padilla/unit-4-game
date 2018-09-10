$(document).ready(function () {
  var Random = Math.floor(Math.random() * 101 + 19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //

  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //

  var num1 = Math.floor(Math.random() * 11 + 1)
  var num2 = Math.floor(Math.random() * 11 + 1)
  var num3 = Math.floor(Math.random() * 11 + 1)
  var num4 = Math.floor(Math.random() * 11 + 1)
  // Setting up random numbers for each crystal
  // Random number has to be between 1 - 12
  // 

  var score = 0;
  var wins = 0;
  var losses = 0;
  //  Decaring variables for tallies

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //resets the game
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    score = 0;
    $('#finalTotal').text(score);
  }

  //adds to the wins
  function win() {
    $("#you-win").html("<h1>You Won!!!</h1>");
    //alert("You Win!");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }

  //adds to the losses
  function loss() {
    $('#you-lose').html('<h1>You Lost :(</h1>');
    //alert("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

  //sets up click for crystals
  //Crystal Geyser
  $('#one').on('click', function () {
    score = score + num1;
    console.log("New score= " + score);
    $('#finalTotal').text(score);
    $('#you-win').html(' '); // sets 'you win' back to null
    $('#you-lose').html(' '); // sets 'you lose' back to null
    //sets win/lose conditions
    if (score === Random) {
      win();
    }
    else if (score > Random) {
      loss();
    }
  })
  //Crystal Pepsi
  $('#two').on('click', function () {
    score = score + num2;
    console.log("New score= " + score);
    $('#finalTotal').text(score);
    $('#you-win').html(' ');
    $('#you-lose').html(' ');
    if (score === Random) {
      win();
    }
    else if (score > Random) {
      loss();
    }
  })
  //Crystal Camera
  $('#three').on('click', function () {
    score = score + num3;
    console.log("New score= " + score);
    $('#finalTotal').text(score);
    $('#you-win').html(' ');
    $('#you-lose').html(' ');
    //sets win/lose conditions
    if (score === Random) {
      win();
    }
    else if (score > Random) {
      loss();
    }
  })
  //Crystal Oil
  $('#four').on('click', function () {
    score = score + num4;
    console.log("New score= " + score);
    $('#finalTotal').text(score);
    $('#you-win').html(' ');
    $('#you-lose').html(' ');
    if (score === Random) {
      win();
    }
    else if (score > Random) {
      loss();
    }
  });
}); 