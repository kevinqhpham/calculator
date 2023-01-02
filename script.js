function add(num1, num2){
    let first = parseInt(num1);
    let second = parseInt(num2);
    return first+second;
}

function subtract(num1, num2){
    let first = parseInt(num1);
    let second = parseInt(num2);
    return first-second;
}

function multpliy(num1, num2){
    let first = parseInt(num1);
    let second = parseInt(num2);
    return first*second;
}

function divide(num1, num2){
    let first = parseInt(num1);
    let second = parseInt(num2);
    return first/second;
}

function operate(op, num1, num2){
    switch(op){
        case "+":
            return add(num1,num2);
        case "-":
            return substract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

let trueDisplay = "";
function display(){
    const button = document.querySelectorAll(".row.dis")
    const display = document.querySelector(".display");
    button.forEach((item) => {
        item.addEventListener('click', () => {
            trueDisplay += item.textContent;
            display.textContent = trueDisplay;
        });
    });
}



function calculate(){
    const eq = document.querySelector("#equal");
    eq.addEventListener('click', () => {
        ind = trueDisplay.indexOf("+");
        let num1 = trueDisplay.slice(0,ind);
        let num2 = trueDisplay.slice(ind+1);
        let ans = operate("+", num1, num2);
        console.log(ans);
    });
}
display();
calculate();