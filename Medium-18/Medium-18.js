/**
 * cat string tu vi tri ban dau va so ky tu can cat
 * input: string, start, numberOfCharacter
 * output: substring
 */
 function cutNCharacters(str, start, numberOfCharacter) {
    let substring = "";
    let len = str.length;
    if (start < 0) {
      // cho bat dau = 0 neu start < 0
      start = 0;
    }
    let count = 0;
    // co the so ky tu vuot qua len
    while (count < numberOfCharacter && start < len) {
      substring += str[start];
      start++;
      count++;
    }
    
    //return substring;
    console.log(substring);
  }
// let str = "toihocjavascript";
// console.log(str.substr(4,7));
cutNCharacters('chung',1,3);