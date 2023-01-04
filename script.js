function add(num1, num2){
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    return first+second;
}

function subtract(num1, num2){
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    return first-second;
}

function multiply(num1, num2){
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    return first*second;
}

function divide(num1, num2){
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    return first/second;
}
function operate(op, num1, num2){
    switch(op){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

let trueDisplay = ""; 
let op = "";
function display(){ //updates display div to show numbers
    const button = document.querySelectorAll(".row.dis")
    const display = document.querySelector(".display");
    button.forEach((item) => {
        item.addEventListener('click', () => {
            trueDisplay += item.textContent;
            display.textContent = trueDisplay;
        });
    });
}

screenOp = "";
function identify(){ //finds which operator user inputs
    if(trueDisplay.indexOf("+") > 0){
        op = "+"
        screenOp = "+";
    }
    if(trueDisplay.indexOf("-") > 0){
        op =     "-";
        screenOp = "-";
    }
    if(trueDisplay.indexOf("×") > 0){
        op = "*";
        screenOp = "×";
    }
    if(trueDisplay.indexOf("÷") > 0){
        op = "/";
        screenOp = "÷";
    }
    return screenOp;
} 
const dis = document.querySelector(".display");
function calculate(){ //produces answer when equal key is pressed
    const eq = document.querySelector("#equal");
    eq.addEventListener('click', () => {
        let ind = trueDisplay.indexOf(identify());
        let num1 = trueDisplay.slice(0,ind);
        let num2 = trueDisplay.slice(ind+1);
        trueDisplay = operate(op, num1, num2);
        dis.textContent = operate(op, num1, num2);

    });
}

function clear(){
    const cl = document.querySelector("#c");
    cl.addEventListener('click', () => {
        trueDisplay = "";
        dis.textContent = trueDisplay;
    });
}

function backSpace(){
    const back = document.querySelector("#back");
    back.addEventListener('click', () => {
        trueDisplay = trueDisplay.slice(0,trueDisplay.length-1);
        dis.textContent = trueDisplay;
    });
}

function changeSigns(){
    const change = document.querySelector("#change");
    change.addEventListener('click', () => {
        if(trueDisplay.slice(0,1) == "-"){
            trueDisplay = trueDisplay.slice(1);
        }
        else{
            trueDisplay = "-" + trueDisplay.slice(0);
        }
        dis.textContent = trueDisplay;
    });
}

display();
calculate();
clear();
backSpace();
changeSigns();