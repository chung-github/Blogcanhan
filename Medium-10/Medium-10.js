/*
Viết hàm tìm tổng số các phần tử của chuỗi a không có trong chuỗi b
input: mảng số a và mảng số b
output: tổng số các phần tử trong mảng a không tồn tại trong mảng b
*/

let array2 = [];
let array1 = [];


function totalNumberOfElementsOfArray1IsNotInArray2(array1, array2) {
    let count = 0;
    
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                count++;
            }
        }
    }

    return array1.length - count;
}