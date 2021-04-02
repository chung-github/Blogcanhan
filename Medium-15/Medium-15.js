/*
Viết hàm tình tổng số các chữ số của 1 số nguyên
input: 1 số nguyên
output: tổng các chữ số của số nguyên
*/

function Totalnumberofnumbers(number) {
    if (number < 0) {
        number *= -1;
    }
    let sum = 0;
    while (number !== 0) {
        sum = sum + (number % 10);
		//console.log(number+"---------------");
		//console.log(number %10); // lấy ra số ngoài cùng bên phải
        number = (number - number % 10) / 10;
    }
    //alert('không được nhập số 0');
    //return sum;
	
	console.log(sum);
}
Totalnumberofnumbers(123);