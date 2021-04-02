/*
Viết hàm nối 2 mảng số đã sắp xếp theo thứ tự giảm dần
input: mảng số a và mảng số b đã sắp xếp theo thứ tự giảm dần
output: một mảng số c chứa tất cả các phần tử trong mảng a và mảng b theo thứ tự giảm dần
*/

let a = [5,4,3,2,1];
let b = [10,9,8,7,6];
let c = [];

//let c = a.concat(b);
function ConcatString(a,b)
{
    c = a.concat(b);
    c.sort(function (a, b) { return b - a });
    //return c;
    console.log(c);
}

ConcatString(a,b)

