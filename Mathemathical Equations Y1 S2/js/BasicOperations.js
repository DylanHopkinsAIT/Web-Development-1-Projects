//Initialise global variables here//
var inputA = 0, inputB = 0, outputAdd = 0, outputSubtract = 0, outputMultiply = 0; outputDivide = 0; outputAbolute = 0;
//$ function 'get element by id'//
$ = function (id) {
    return document.getElementById(id);
};

//Reset fields, basic function to clear any text fields//
ResetTextFields = function () {
    $("inputA").value = "";      
    $("inputB").value = "";

    $("q1").innerHTML = "A + B";
    $("ans1").innerHTML ="=";

    $("q2").innerHTML ="A - B";
    $("ans2").innerHTML ="=";

    $("q3").innerHTML ="A x B";
    $("ans3").innerHTML ="=";

    $("q4").innerHTML ="A ÷ B";
    $("ans4").innerHTML ="=";

    $("q5").innerHTML ="|A & B|";
    $("ans5").innerHTML ="=";
};

//Calculate answer function, calculates the answer using the user input//
Calculate = function () {

    //Parse user input as integers
    inputA = parseInt($("inputA").value);
    inputB = parseInt($("inputB").value);

    //Calculate answers required and assign to appropriate variable
    outputAdd =  (inputA + inputB).toFixed(2);
    outputSubtract = (inputA - inputB).toFixed(2);
    outputMultiply = (inputA * inputB).toFixed(2);
    outputDivide = (inputA / inputB).toFixed(2);
    outputAbsolute = (Math.abs(inputA - inputB).toFixed(2));

    //Test user input is a number
    if (isNaN(inputB) || isNaN(inputB)) {
        alert("Please enter numbers only")
    }

    else{
    $("q1").innerHTML = inputA +" + "+ inputB;
    $("ans1").innerHTML = "= "+ outputAdd;

    $("q2").innerHTML = inputA +" - "+ inputB;
    $("ans2").innerHTML = "= "+ outputSubtract;

    $("q3").innerHTML = inputA +" x "+ inputB;
    $("ans3").innerHTML = "= "+ outputMultiply;

    $("q4").innerHTML = inputA +" ÷ "+ inputB;
    $("ans4").innerHTML = "= "+ outputDivide;

    $("q5").innerHTML = "|"+inputA+" - "+inputB+"|";
    $("ans5").innerHTML = "= "+ outputAbsolute;

    }

};


//Window.onload function to give functionality to the buttons.
window.onload = function () {
    $("calculate").onclick = function () { Calculate(); };
    $("reset").onclick = function () { ResetTextFields(); };
};