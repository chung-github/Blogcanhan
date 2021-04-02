/*
Cho hàm random() trả về giá trị từ 0 đến 1 (có lấy 0 và 1)
Viết hàm randomRange(a, b) trong đó dùng hàm random() để trả về một giá trị random trong khoảng từ a đến b
input: 2 số a và b với b>a
output: một số random trong khoảng từ a đến b
*/

function randomRange(a, b) {
    if(a > b){
       alert('không được nhập a > b');
    }else{
        let randomNumber = Math.random() * (b - a) + a;
        //return randomNumber;
        console.log(randomNumber);
    }

}
randomRange(1,6); 