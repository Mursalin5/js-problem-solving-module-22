function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function calculator(a,b, operation){
    if (operation === 'add'){
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
        }
    else{
        return " only 'add' 'subtract' 'multiply' 'divide' allowed";

    } 
}
const result = calculator(5, 7 ,'add');
console.log(result)