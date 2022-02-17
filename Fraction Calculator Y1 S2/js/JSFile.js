/*Create the following global variables and set the equal to 0*/
var num = 0, denum = 0, decimal = 0, place = 0, firstNumerator = 0, secondNumerator = 0, firstDenominator = 0, secondDenominator = 0;
/*$ function to return an element by its id - Do Not Change*/
$ = function (id) {
	return document.getElementById(id);
};
/*ResetTextFields() - 
This function is called when the Another button is clicked.
Create a standard function to reset fields and nodes with 
the id's in quotes.  Make sure to check the HTML to 
ensure that they match.  Set the HTML node resultPara to the following text:
"When entering your asnwer please make sure to enter integer values only"
*/
ResetTextFields = function () {
	$("num").value = "";
	$("denum").value = "";
	$("Feedback").innerHTML = "";
	$("resultPara").innerHTML = "When entering your answer please make sure to enter integer values.";
};
/*GenerateQuestion() - 
This function generates a random numbers for the question.
First the ResetTextFields() function is called.
Then the global variables: a, b, c, d are populated with a random number between 1 and 10.  When doing this use Math.floor(Math.random() * 10) + 1;  Then the DOM is updated and the id's
corresponding to the global variables a, b, c and d are filled with the corresponding random values
*/
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
/*
calculate() - 
This function calculates the correct answer for the question then checks to see if it matches
with what the user inputs.  Using the global variables num and denum get the values from the 
textfieds, convert them to int's and with the corresponding id's.  Check to see if they both are 
not numbers or are less than 1.  
Then: 
1. Calculate the numerator and store it in a variable called numRES
2. Calculate the denumerator and store it in a variable called denumRES
3. Get the number of decimal places from the HTML select tag, convert it to an int and store it in
a variable called places
4. Check to see if places isNaN - if it is alert the user to select a number for the decimal places
5. Otherwise create a variable called result that stores the division of the numRES and denumRES fixed to the user defined number of decimal places
6. Check to see if the user num and denum is equal to the numRES and denumRES respectively.  If it is then update the DOM by constructing a table to output the correct answer as illustrated int he screenshots
7. Otherwise (else) update the DOM by constructing the same table to output the correct answer as illustrated int he screenshots with some minor adjuestments.  Again these are illustrated in
the screenshots.
*/
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
/*
When the  web page loads the window.onload function is called.  This function will firstly call the GenerateQuestion() function.  Then it will wait for the calc or reset button to be pressed and call the calculate() or GenerateQuestion() respectively.
*/
window.onload = function () {
	GenerateQuestion();
	$("calc").onclick = function () { calculate(); };
	$("reset").onclick = function () { GenerateQuestion(); };
};