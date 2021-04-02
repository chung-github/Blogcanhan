/*
1,2,20,50,100,500
input: một số tiền nhất đinh là bội số của 1 nghìn
output: một đồng tiền ít nhât để quy đổi
*/
var deno = [1, 2, 20, 50, 100, 500];

function findMin(number) {
    let total = 0;
    for (let i = deno.length - 1; i >= 0; i--) {
      if (Math.floor(number / deno[i]) > 0) {
        //console.log(number / deno[i]);
        total += Math.floor(number / deno[i]);
        number = number - Math.floor(number / deno[i]) * deno[i];
       // console.log(number);
      }
      if (number === 0) {
        break;
      }
    }
  
    //return total;
    console.log(total);
  }

  findMin(5100);
  