//$ function 'get element by id'//
$ = function (id) {
    return document.getElementById(id);
};

//Function to clear all of the text inputs on the
ResetTextFields = function () {

    $("inputKilograms").value = "";
    $("inputGrams").value = "";
    $("inputOunces").value = "";
    $("inputPounds").value = "";
    $("inputFarenheit").value = "";
    $("inputCelcius").value = "";
    $("inputKPH").value = "";    
    $("inputMPH").value = "";

};

//Function to convert different mass values
function weightConverter(){
    
    //Convert KG to LB, Oz, g
    if($("inputKilograms").value.length !== 0){
        input = parseFloat($("inputKilograms").value);
        
        grams = input * 1000;
        $("inputGrams").value = grams.toFixed(2);

        pounds = input * 2.2046;
        $("inputPounds").value = pounds.toFixed(2);

        ounces = input * 35.274;
        $("inputOunces").value = ounces.toFixed(2);
        
    }

    //Convert LB to g, KG, Oz
    if($("inputPounds").value.length !== 0){
        input = parseFloat($("inputPounds").value);

        grams = input / 0.0022046;
        $("inputGrams").value = grams.toFixed(2);

        kilos = input / 2.2046;
        $("inputKilograms").value = kilos.toFixed(2);

        ounces = input * 16;
        $("inputOunces").value = ounces.toFixed(2);

    }

    //Convert g to KG, LB, Oz
    if($("inputGrams").value.length !== 0){
        input = parseFloat($("inputGrams").value);

        pounds = input * 0.0022046;
        $("inputPounds").value = pounds.toFixed(2);

        kilos = input / 1000;
        $("inputKilograms").value = kilos.toFixed(2);

        ounces = input * 0.035274;
        $("inputOunces").value = ounces.toFixed(2);

    }
    
    //Convert Oz to KG, LB, g
    if($("inputOunces").value.length !== 0){
        input = parseFloat($("inputOunces").value);

        pounds = input * 0.0625;
        $("inputPounds").value = pounds.toFixed(2);

        kilos = input / 35.274;
        $("inputKilograms").value = kilos.toFixed(2);

        grams = input / 0.035274;
        $("inputGrams").value = grams.toFixed(2);
    }

}

//Function to convert temperature values
function temperatureConverter(){

    //Convert Celcius to Farenheit
    if($("inputCelcius").value.length !== 0){
        input = parseFloat($("inputCelcius").value);
        
        input = (input * 1.8) + 32;
        $("inputFarenheit").value = input.toFixed(2);
           
    }

    //Convert Farenheit to Celcius
    if($("inputFarenheit").value.length !== 0){
        input = parseFloat($("inputFarenheit").value);
        
        input = (input -32) / 1.8;
        $("inputCelcius").value = input.toFixed(2);
           
    }
    


}

//Function to convert different speed values
function speedConverter(){

    //Convert KPH to MPH
    if($("inputKPH").value.length !== 0){
        input = parseFloat($("inputKPH").value);
        
        input = input / 1.609344;
        $("inputMPH").value = input.toFixed(2);
           
    }

    //Convert MPH to KPH
    if($("inputMPH").value.length !== 0){
        input = parseFloat($("inputMPH").value);
        
        input = input * 1.609344;
        $("inputKPH").value = input.toFixed(2)
           
    }

}


//Window.onload function to give functionality to the buttons//
window.onload = function () {

    $("calculateWeight").onclick = function () { weightConverter(); };
    $("calculateTemperature").onclick = function () { temperatureConverter(); };
    $("calculateSpeed").onclick = function () { speedConverter(); };
    
    //Multiple reset buttons
    $("reset").onclick = function () { ResetTextFields(); };
    $("reset1").onclick = function () { ResetTextFields(); };
    $("reset2").onclick = function () { ResetTextFields(); };
};