/**
 * cat string tu vi tri ban dau den vi tri ket thuc
 * input: string, start, end
 * output: substring
 */
 function cutString(str, start, end) {
    let substring = "";
    let len = str.length;
    if (start < 0) {
      // cho bat dau = 0 neu start < 0
      start = 0;
    }
    if (end >= len) {
      end = len - 1;
    }
    if (end < start) {
      return substring;
    }
    for (let i = start; i <= end; i++) {
      substring += str[i];
    }
  
    //return substring;
    console.log(substring);
  }
  cutString('chung',1,3);