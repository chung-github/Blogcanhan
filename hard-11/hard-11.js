/*
 Viết hàm trả về chữ số cuối cùng khác 0 của n giai thừa
 input: 1 mảng số nguyên n
 output: chữ số cuối cùng của n giai thừa khác 0
*/


function calculateFactorial(inputNumber) {
    let factorial = 1;

    for (let i = 1; i <= inputNumber; i++) {
        factorial *= i;
    }

    return factorial;
}

/**
* Function: lastNumber
* Purpose: last number of the factorial
* Parameter 1: factorial
* Return: lastnumber
*/

function lastNumber(factorial) {
    let lastNumber = factorial % 10;
    if (lastNumber !== 0) {
        return lastNumber;
    }
    else {
        return -1;
    }
}