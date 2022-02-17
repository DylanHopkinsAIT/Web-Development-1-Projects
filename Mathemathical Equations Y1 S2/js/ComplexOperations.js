//Initialise global variables here//
var inputA = 0, inputB = 0, outputA = 0, min = 0, max = 0;
//$ function 'get element by id'//
$ = function (id) {
    return document.getElementById(id);
};

//Reset fields, basic function to clear any text fields//
ResetTextFields = function () {
    $("inputA").value = "";
    $("inputB").value = "";

};

//Calculate factorial function
Factorial = function () {

    //Parse user input as integer
    inputA = parseInt($("inputA").value);

    //Test user input is a valid
    if (isNaN(inputA) || (inputA < 0) || (inputA > 20 )){
        alert("Please enter positive integers less than 20 only")
    }

    //If unput is 0 factorial will be 1
    else if (inputA == 0) {
        outputA == 1;
        $("outputA").value = outputA;
    }

    //Loop to calculate factorial
    else {
        let factorial = 1;
        for (var i = 1; i <= inputA; i++) {
            factorial *= i;
        }
        outputA = factorial;
        $("outputA").value = outputA;
    }

};

//Function to find the smallest and largest numbers in a list.
minMax = function (){

    //Takes the input string and converts it to an array
    var inputString = $("inputB").value;
    var inputStringArr = inputString.split(" ");
    
    //Takes the new array and apply math.min and math.max using destructuring assignment '...'
    min = Math.min(...inputStringArr);
    max = Math.max(...inputStringArr);
    

    //Verify user input is a number by checking if (input * 0 == 0) because for some reason isNAN wouldnt work.
    if(min * 0 !== 0 || max * 0 !== 0 ){
        alert("Please enter integer values")
    }

    //Output min and max values to the approprite boxes
    $("min").value = (min);
    $("max").value = (max);

};

//Window.onload function to give functionality to the buttons.
window.onload = function () {
    $("calculate").onclick = function () { Factorial(); };
    $("minmax").onclick = function () { minMax(); };
};