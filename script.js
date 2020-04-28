var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

 // css.textContent = "linear-gradient(to right, " + " rgb(255,0,0)" + ", rgb(255,255,0));";

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value + 
	 ")";

	 css.textContent = body.style.background + ";";
}

function randomNumber(){
	var x = Math.floor((Math.random() * 100) + 1)*2.5;
	return x;
}

function setRandomGradient(){
	body.style.background = 
	"linear-gradient(to right, " + "rgb("+
	 + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")"
	 + ", " 
	 + "rgb("+
	 + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")"
	 ")";

	 css.textContent = body.style.background + ";";
}

document.addEventListener("DOMContentLoaded", function(){
	color1.addEventListener("input", setGradient);
	color2.addEventListener("input", setGradient);

	setGradient();
});
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);

