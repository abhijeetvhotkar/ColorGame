var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDispalay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
});

resetButton.addEventListener("click", function() {
  //generate all new Colors
  colors = generateRandomColors(6);
  //pick random colors from array
  pickedColor = pickColor();
  //change colorDisplay to match the picked colors
  colorDisplay.textContent = pickedColor;
  //change colors of square
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
  messageDispalay.textContent = "Try Again";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor, pickedColor)
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
