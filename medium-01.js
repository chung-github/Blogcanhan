/*
Viết hàm sắp xếp 1 mảng các số theo thứ tự tăng hoặc giảm dần
input: 1 mảng số và cách sắp xếp (string "tăng" hoặc "giảm")
output: mảng chuỗi kí tự được sắp xếp theo cách sắp xếp được truyền vào
*/

let array = [4,5,2,8,6,9];
let i;
let j;
let inputString = '';


function swap() {
	let temporaryNumber = "";
	temporaryNumber = array[i];
	array[i] = array[j];
	array[j] = temporaryNumber;
}

function sortUpAscending(array) {
	for (i = 0; i < array.length - 1; i++) {
		for (j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				swap();
			}
		}
	}
	//return array;
	console.log(array);
}
sortUpAscending(array);

function descendingArrangement(array) {

	for (i = 0; i < array.length - 1; i++) {
		for (j = i + 1; j < array.length; j++) {
			if (array[i] < array[j]) {
				swap();
			}
		}
	}
    //return array;
	console.log(array);
}
descendingArrangement(array);
