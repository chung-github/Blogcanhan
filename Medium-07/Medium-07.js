/*
Viết hàm lấy 1 số phần từ của mảng số dựa vào vị trí đầu và cuối
input: mảng các số a, vị trí đầu và vị trí cuối
output: 1 mảng số chứa các phần từ của mảng a từ vị trí đầu tới vị trí cuối
*/

let a = [1,2,3,4];
let b = [];

function getElement(top, last, a) {
	for (let i = top; i <= last; i++) {
		for (let j = i - top; j <= last - top; j++) {
			b[j] = a[i];
            console.log(b[j]);
		}
	}
 //console.log(b[j]);
	//return b;
}
getElement(1,2,a);