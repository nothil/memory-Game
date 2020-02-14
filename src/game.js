var color = [];
var squares = document.querySelectorAll(".square");
var numSquare = 16;
var colorDisplay = document.getElementById("colorDisplay");

// function generateRandomColors(){
// 	//make an array
// 	var arr = []
// 	//repeat num times
// 	for(var i = 0; i < 8; i++){
// 		//get random color and push into arr
// 		arr.push(randomColor())
// 	}
// 	//return that array
// 	return arr;
//}
function cardFlip(){
	this.classList.toggle('flip');
}

squares.forEach(card => card.addEventListener('click', cardFlip ));


var randomColor = function (){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
 console.log(randomColor)

