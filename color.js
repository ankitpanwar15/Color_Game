var numSquare=6;
var colors=[];
var pickedColor;
var squares= document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var colorDisplay=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
for (var i = 0; i<modeButtons.length ; i++) {
	modeButtons[i].addEventListener("click",function() {
	modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "easy" ? numSquare = 3: numSquare = 6;
    reset();
	});
}

for(var i=0;i<squares.length;i++){
	
	squares[i].addEventListener("click",function() {
	
		var clickedColor=this.style.background;
	
		if(clickedColor == pickedColor){
			messageDisplay.textContent="correct";
			changeColors(clickedColor);
			resetButton.textContent="play again";
			h1.style.background=clickedColor;
		}else {
			this.style.background="#232323";
			messageDisplay.textContent="try again";
					}
	});
}
reset();

}



function reset(){
	colors=generateRandomColor(numSquare);
pickedColor= pickColor();
colorDisplay.textContent=pickedColor;
resetButton.textContent="NEW Colors";
messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
			squares[i].style.display= "block";
			squares[i].style.background = colors[i];
		}else{
				squares[i].style.background = "none";
		}
	}
	h1.style.background="steelblue";
}

resetButton.addEventListener("click",function() {
reset();
})




function changeColors(color) {
	for(var i=0;i<squares.length;i++){
    squares[i].style.background=color;

	}
}

function pickColor() {
	var ran=Math.floor(Math.random()*colors.length)
	return colors[ran];	
}

function generateRandomColor(num) {
	var arr=[]
	for (var i=0;i<num;i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
   var r=Math.floor(Math.random()*256);
   var g=Math.floor(Math.random()*256);
   var b=Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}




