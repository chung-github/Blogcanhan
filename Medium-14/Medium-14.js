/*
Viết hàm tính số tiền thuế phải nộp trong n tháng của một người
input: Mảng n số chứa thu nhập mỗi tháng của công dân
output: Tổng số tiền thuế phải nộp
*/

const a = 20000000;
const b = 50000000;
function Tax(income) {
  if (income < a) {
    return income * 0.05;
    alert('Số tiền nhập dưới 20 triệu');
    //console.log(income * 0.05);
  } else if (a<= income <= b) {
    return income * 0.1;
    //console.log(income * 0.1);
  } else if (income > b){
    return income * 0.2;
    //console.log(income * 0.2);
  }
}
Tax();

function totalTax(arr) {
  let result = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    result += tax(arr[i]);
    console.log("income: " + arr[i] + " has tax: " + tax(arr[i]));
  }

  return result;
  //console.log(result);
}
totalTax(11);

