/*
Viết hàm nhân giá trị của 2 mảng số
intput: mảng các số a và mảng các số b  cùng kích thước
output: mảng các số c chứa các giá trị là tích của các giá trị với ví trị tương ứng trong mảng a và b
 */

let a = [4,2,8,6];
let b = [2,1,4,3];
let c = [];

function total(a, b, c) {
    for (let i = 0; i < b.length; i++) {
        c[i] = a[i] * b[i];
        console.log(c[i]);
    }

    //return c;
    
}
total(a,b,c);
