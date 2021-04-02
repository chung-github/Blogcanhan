/*
"Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
Viết hàm random(a) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ -a đến a"
input: 1 số a
ouput: 1 số random trong khoảng từ -a đến a
*/

/**
     * Math.random() => 0 <= x <= 1
     * math.random() * 2a => 0 <= x <= 2a;
     * math.random() * 2a -  a => -a <= x <= a;
     */

 function RandomNumber(a) {
    //return Math.random() * 2 * a - a;
    console.log(Math.random() * 2 * a - a)
}
RandomNumber(5)
