function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var ageFormula = (2023 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode(
    "You are " + ageFormula + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

// Challenge 2

function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

// Challenge 3
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  // humanChoice = yourChoice.id;
  // botChoice =

  // results = decideWinner(humanChoice, botChoice);
  // message = finalMessage(results); // {message':'You won!', 'color': 'green'}
  rpsFrontEnd(yourChoice.id, botChoice, message);
}
