function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multpliy(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
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