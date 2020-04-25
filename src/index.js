'use strict'

const arrayFibonacci = [0, 1];

const fibonacci = () => {
    for (var i = 1; arrayFibonacci[i] <= 350; i++) {
        arrayFibonacci.push(arrayFibonacci[i - 1] + arrayFibonacci[i]);
    }

    return arrayFibonacci;
}

const isFibonnaci = (num) => arrayFibonacci.includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}