/*Create the following global variables and set the equal to 0*/
var num = 0, denum = 0, decimal = 0, place = 0, firstNumerator = 0, secondNumerator = 0, firstDenominator = 0, secondDenominator = 0;

/*$ function to return an element by its id - Do Not Change*/
$ = function (id) {
	return document.getElementById(id);
};

//Reset fields to default values
ResetTextFields = function () {
	$("num").value = "";
	$("denum").value = "";
	$("Feedback").innerHTML = "";
	$("resultPara").innerHTML = "When entering your answer please make sure to enter integer values.";
};


//This function generates random numbers for the question.
GenerateQuestion = function () {
	//Clear all text boxes
	ResetTextFields();

	//Generate first random fraction
	 firstNumerator = Math.floor(Math.random() * 10) + 1;
	 secondDenominator = Math.floor(Math.random() * 10) + 1;
	$("a").innerHTML = firstNumerator;
	$("d").innerHTML = secondDenominator;


	//Generate Second random fraction
	 secondNumerator = Math.floor(Math.random() * 10) + 1;
	 firstDenominator = Math.floor(Math.random() * 10) + 1;
	$("b").innerHTML = firstDenominator;
	$("c").innerHTML = secondNumerator;

};


//Calculate function calculates correct answer and checks if it matches user input
calculate = function () {
	
	//Calculate the numerator and denominator
	denumANS = secondNumerator * firstDenominator;
	numANS = firstNumerator * secondDenominator;
	
	//Parse numerator, denominator and decimal places as integers
	num = parseInt($("num").value);
	denum = parseInt($("denum").value);
	place = parseInt($("places").value);

	//Calculate decimal value to selected decimal places.
	decimal = numANS / denumANS;
	decimal = decimal.toFixed(place);

	//Test if user's answer is correct. Update Dom accordingly.
	if(isNaN(num)|| isNaN(denum)){
		alert("Please enter numbers only");
	}
	else{
		if(num==numANS && denum==denumANS){
			$("Feedback").innerHTML="<span style='color:green;'>Correct</span>";
			$("resultPara").innerHTML="Well done, you got it right!<table><tr><td class=borderBottom width=30px id=numANS></td><td rowspan=2>=</td><td rowspan=2 id=decimal></td></tr><tr><td id=denumANS></td></tr></table>";
			$("numANS").innerHTML= numANS;
			$("denumANS").innerHTML= denumANS;
			$("decimal").innerHTML= decimal;
		}
		else{
			$("Feedback").innerHTML="<span style='color:red;'>Incorrect</span>";
			$("resultPara").innerHTML="Incorrect, the correct answer is: <table><tr><td class=borderBottom width=30px id=numANS></td><td rowspan=2>=</td><td rowspan=2 id=decimal></td></tr><tr><td id=denumANS></td></tr></table> ";
			$("numANS").innerHTML= numANS;
			$("denumANS").innerHTML= denumANS;
			$("decimal").innerHTML= decimal;
		}

	}

};

//Window.onload function to give functionality to buttons and load question
window.onload = function () {
	GenerateQuestion();
	$("calc").onclick = function () { calculate(); };
	$("reset").onclick = function () { GenerateQuestion(); };
};