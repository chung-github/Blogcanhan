/*
Viết hàm tìm tổng số các phần tử của chuỗi a trong chuỗi b
input: mảng số a và mảng  số b
output: tổng số các phần tử trong mảng a tồn tại trong mảng b
*/

let a = [1,2,3,4];
let b = [3,5,8,9];

function deleteIntermediateElements(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
                i--;
            }
        }
    }
}

function totalNumberOfElementsOfArray1InArray2(a, b) {
    let count = 0;

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                count++;
            }
        }
    }

    return count;
}
