/*
Viết hàm đảo ngược ký tự của từng từ trong một câu
input: một mảng string chứa các từ, các từ ngăn cách nhau bằng dấu cách
output: mảng số a và mảng số b đã sắp xếp theo thứ tự tăng dần
*/

function reverse(str) {
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]
    }
    console.log(reversed) 
  }
  reverse("chung");  



//   let string = "chung";
//   let a = string.split("").reverse().join("");
//   console.log(a);