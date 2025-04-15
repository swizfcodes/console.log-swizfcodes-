//JavaScript for calculator

//This code helps us 
let display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{ display.value = eval(display.value);
    } catch(error){
        display.value = 'error';
    }
}


display.addEventListener("keydown", function(event) {
    if (event.key === "backspace") {
        clearDisplay();
    }
});



