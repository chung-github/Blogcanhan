/*
Viết hàm nối 2 mảng số với nhau
input: mảng các số a và mảng các số b cùng kích thước
output: mảng các số c chứa các giá trị của các mảng a và b
*/

let a = [1,2,3,4];
let b = [5,6,7,9,10];
let c = [];
function array(a, b, c) {
    let i;
    c.length = a.length + b.length;
    for ( i = 0; i < c.length; i++) {
        if (i < a.length) {
            c[i] = a[i];
        }
        else {
            c[i] = b[i - a.length];
        }
        console.log(c[i]);
    }
    //return c;
    
}
array(a,b,c);
