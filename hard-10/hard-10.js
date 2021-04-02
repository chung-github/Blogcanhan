/*
Viết hàm xáo trộn thứ tự của các phần tử trong mảng số
input: 1 mảng số
output: 1 mảng số mới với tất cả các vị trí của các phần tử đã được
thay đổi
*/

let arrray = [2,7,4,6,10,17,20];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    console.log(arrray)
}
shuffleArray(arrray);