var numberofSquare = 6;
var colors = generateRandomColors(numberofSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[pickaColor()];
var colorDisplay = document.getElementById("displayColor");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberofSquare = 3;
    colors = generateRandomColors(numberofSquare);
    pickedColor = colors[pickaColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none" ;
        }
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberofSquare = 6;
    colors = generateRandomColors(numberofSquare);
    pickedColor = colors[pickaColor()];
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block" ;
    }
});
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numberofSquare);
    pickedColor = colors[pickaColor()];
    colorDisplay.textContent = pickedColor; 
    for(var i = 0; i < squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length;i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickColor = this.style.backgroundColor;
        if(clickColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play again?";
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickaColor(){
    var random = Math.floor(Math.random() * colors.length);
    return random;
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0 ;i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", "+ g +", "+b + ")";
}