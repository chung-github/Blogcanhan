/*
Viết hàm nối 2 mảng số đã sắp xếp theo thứ tự tăng dần
input:mảng số a và mảng số b đã sắp xếp theo thứ tự tăng dần
output: một mảng số c chứa tất cả các phần tử trong mảng a và mảng b theo thứ tự tăng dần
*/

let a = [1,2,3,4,5];
let b = [6,7,8,9,10];
let c = [];

// let c = a.concat(b);
// console.log(c);
function ConcatString(a,b)
{
    c = a.concat(b);
    c.sort(function (a, b) { return a - b });
    //return c;
    console.log(c);
}

ConcatString(a,b)
