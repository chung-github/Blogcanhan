/*
Viết hàm tính số tiền khách phải trả khi vào nhà nghỉ dựa theo giờ khách vào và giờ khách ra
input: giờ checkin, giờ checkout (2 giờ không cách nhau quá 24 tiếng)
output: Số tiền phải trả
*/

function TotalMoney(checkin, checkout) {
    //TH1: overnight
    if (checkout <= checkin) {
      let more = 0;
      // over 8am
      if (checkout > 8) {
        more = (checkout - 8) * 40;
      }
  
      //return 160 + more;
      console.log('Số tiền phải trả là: '+ (160 + more)+ 'K');
    }else if(checkout > checkin){
    //TH2: daytime
    let time = checkout - checkin;
    let result = 0;
        //rent < 2 hour
    if (time <= 2) {
      result = time * 70;
    } else {
        //rent > 2 hour 
      result = 2 * 70 + (time - 2) * 50;
    }
    //return result;
    console.log('Số tiền phải trả là: '+result+'K');
    }
  }
TotalMoney(21,9);