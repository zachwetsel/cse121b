/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);

    if (document.querySelector('#member').checked) {
        subtotal *= 0.8;
    }

    document.querySelector('#total').innerText = `Total Due: $${subtotal.toFixed(2)})`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
document.querySelector('#array').innerText = numbersArray.join(', ');
/* Output Odds Only Array */
document.querySelector('#odds').innerText = numbersArray.filter(num => num % 2 === 1).join(', ');
/* Output Evens Only Array */
document.querySelector('#evens').innerText = numbersArray.filter(num => num % 2 === 0).join(', ');
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, num) => sum + num, 0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerText = numbersArray.map(num => num * 2).join(', ');
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(num => num * 2).reduce((sum, num) => sum + num, 0);