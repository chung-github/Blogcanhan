/*
Viết hàm tình tổng số lần xuất hiện của một string a trong string b
input: string a, string b
output: số lần string a xuất hiện trong string b 
*/

function findOccurrenceOfSubstring(str, sub) {
    //chia mang theo substring
    let words = sub.split(str).length -1;
    
    //return words.length - 1;
    console.log(words);
        
  }

  findOccurrenceOfSubstring("a","what your name");