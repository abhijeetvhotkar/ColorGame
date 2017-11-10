var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispalay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add ("selected");
      this.textContent === "Easy" ? numSquares =3: numSquares =6;
      reset();
    });
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor){
        messageDispalay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }
      else {
        this.style.background = "#232323";
        messageDispalay.textContent = "Try again";
      }
    });
  }
}

function reset() {
  //generate all new Colors
  colors = generateRandomColors(numSquares);
  //pick random colors from array
  pickedColor = pickColor();
  //change colorDisplay to match the picked colors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDispalay.textContent = "";
  //change colors of square
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < colors.length; i++)
  //change each color to match the given color
  squares[i].style.background = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num items
  for (var i = 0; i < num; i++) {
    //get random color and push in array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function  randomColor() {
  // pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
