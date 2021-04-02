/**
 * in n so dau tien trong day fibonaci
 * n1 = 1, n2 = 1
 */
 function FirstNumberFibonaci(n){
    if (n < 1){
        return [];
    }
    if (n === 1){
        return [1];
    }
    if (n === 2) {
        return [1, 1];
    }
    let result = [1, 1];
    for(let i = 2; i < n; i++){
        result.push(result[i-1] + result[i-2]);
    }
    //return result;
    console.log(result);
}
FirstNumberFibonaci();