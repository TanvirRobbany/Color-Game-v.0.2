var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var footer = document.querySelector(".footer");
var easyBtn = document.querySelector("#easyBtn");
var medBtn = document.querySelector("#medBtn");
var hardBtn = document.querySelector("#hardBtn");

// hard button functionality
hardBtn.addEventListener("click", function(){
    messageDisplay.textContent = " ";
    easyBtn.classList.remove("selected");
    medBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    footer.style.margin = "600px 0 0 0";
    numSquares = 9;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    console.log(colors);
    // to display random colors in  9 blocks or hard level
    for(var i = 0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
    
});

// medium button functionality
medBtn.addEventListener("click", function(){
    messageDisplay.textContent = " ";
    easyBtn.classList.remove("selected");
    medBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    footer.style.margin = "400px 0 0 0";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    console.log(colors);
    // to display random colors in  6 blocks or medium level
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }

});

// easy button functionality
easyBtn.addEventListener("click", function(){
    messageDisplay.textContent = " ";
    easyBtn.classList.add("selected");
    medBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    footer.style.margin = "400px 0 0 0";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    console.log(colors);
    // to display random colors in first 3 blocks or easy level
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";

        }
        else{
            squares[i].style.display = "none";
        }
    }
});


// reset button finctionality
resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = " ";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.background = colors[i];

    //add CLICK LISTENER to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to picked color
        console.log(clickedColor);
        console.log(pickedColor);
        if(clickedColor.toString() === pickedColor.toString()){
            messageDisplay.textContent = "YOU WIN!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Guess Again";
        }
    });
}

function changeColors(color){
    // loop through all squaares
    for(var i = 0; i<squares.length; i++){
        // change each color to clicked color
        squares[i].style.background = color;
    }
}

function pickColor(){
    // function to select ramdom color
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i<num; i++){
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    // return random color
    return "rgb(" + r + ", " + g + ", " + b + ")";
}