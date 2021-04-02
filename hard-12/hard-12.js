/*
Viết hàm trả về số chữ số 0 xuất hiện trong giá trị của n giai thừa
input: 1 số nguyên n
output: số chữ số 0 xuất hiện trong giá trị của n giai thừa
*/

function calculateFactorial(inputNumber) {
    let factorial = 1;

    for (let i = 1; i <= inputNumber; i++) {
        factorial *= i;
    }
    return factorial;
}

/**
* Function: number0OfTheFactorial
* Purpose: count number 0 Of The Factorial
* Parameter 1: factorial
* Return: count
*/

function number0OfTheFactorial(factorial) {
    let temporaryVariable;
    let count = 0;

    while (factorial != 0) {
        temporaryVariable = factorial % 10;
        factorial = factorial / 10;
        if (temporaryVariable === 0) {
            count++;
        }
    }

    return count;
}