//Initialize global variables//
var input = 0, operator = 0;

//$ function 'get element by id'//
$ = function (id) {
    return document.getElementById(id);
};

//Reset fields, basic function to clear any text fields//
ResetTextFields = function () {

    $("input").value = "";
    $("add").value = "";
    $("sub").value = "";
    $("mul").value = "";
    $("div").value = "";
    $("tables").innerHTML = "";

};

//Fill table with equations and answers
Calculate = function () {


    //Parse user input as integer
    input = parseInt($("input").value);


    //Get operator from radio button
    if ($("add").checked == true) {
        operator = "+";
    }

    if ($("sub").checked == true) {
        operator = "-";
    }

    if ($("mul").checked == true) {
        operator = "*";
    }

    if ($("div").checked == true) {
        operator = "/";
    }


    //Test user input is a number
    if (isNaN(input)) {
        alert("Please enter numbers only")
    }

    else {

        if (operator == "+") {
            //Create table
            var HTMLout = "<h1>Times Tables</h1><hr><table class = w3-table>"
            HTMLout += "<tr><td>Sum</td><td>Answer</td></tr>";

            for (i = 0; i <= 20; i++) {

                //Concatenate answers to HTMLout
                HTMLout += "<tr><td>" + i + " + " + input + " </td><td>" + (i + input) + "</td></tr>";
                console.log(HTMLout);

            }
            //Write HTMLout to 'tables' paragraph
            document.getElementById("tables").innerHTML = (HTMLout);
        }

        if (operator == "-") {
            //Create table
            var HTMLout = "<h1>Subtraction Tables</h1><hr><table class = w3-table>"
            HTMLout += "<tr><td>Sum</td><td>Answer</td></tr>";

            for (i = 0; i <= 20; i++) {

                //Concatenate answers to HTMLout
                HTMLout += "<tr><td>" + i + " - " + input + " </td><td>" + (i - input) + "</td></tr>";
                console.log(HTMLout);

            }
            //Write HTMLout to 'tables' paragraph
            document.getElementById("tables").innerHTML = (HTMLout);
        }

        if (operator == "*") {
            //Create table
            var HTMLout = "<h1>Multiplication Tables</h1><hr><table class = w3-table>"
            HTMLout += "<tr><td>Sum</td><td>Answer</td></tr>";

            for (i = 0; i <= 20; i++) {

                //Concatenate answers to HTMLout
                HTMLout += "<tr><td>" + i + " x " + input + " </td><td>" + (i * input) + "</td></tr>";
                console.log(HTMLout);

            }
            //Write HTMLout to 'tables' paragraph
            document.getElementById("tables").innerHTML = (HTMLout);
        }

        if (operator == "/") {
            //Create table
            var HTMLout = "<h1>Division Tables</h1><hr><table class = w3-table>"
            HTMLout += "<tr><td>Sum</td><td>Answer</td></tr>";

            for (i = 0; i <= 20; i++) {

                //Concatenate answers to HTMLout
                HTMLout += "<tr><td>" + i + " ÷ " + input + " </td><td>" + (i / input) + "</td></tr>";
                console.log(HTMLout);

            }
            //Write HTMLout to 'tables' paragraph
            document.getElementById("tables").innerHTML = (HTMLout);
        }


    };

};


//Window.onload function to give functionality to the buttons//
window.onload = function () {
    $("calculate").onclick = function () { Calculate(); };
    $("reset").onclick = function () { ResetTextFields(); };
};

