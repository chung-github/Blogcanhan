/*
"Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
Viết hàm random(a) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ 0 đến a"
input: 1 số a
output: 1 số random trong khoảng từ 0 đến a
*/

function random(a) {
    let randomNumber = Math.random() * (a);

    //return randomNumber;
    console.log(randomNumber);
}


random(7);