// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
function persistence(num) {
  let result = 0;
  let numLength = num.toString().length;
  let currentNum = num.toString();
  while (numLength > 1) {
    let newNum = currentNum[0];
    for (let i = 1; i < numLength; i++) {
      newNum = newNum * currentNum[i];
    }
    currentNum = newNum.toString();
    numLength = newNum.toString().length;
    result += 1;
  }
  return result;
}

// Refactor
// map(Number) is equal to map((str) => Number(str)
function persistence(num) {
   let times = 0;
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   return times;
}

// Other Solution
function persistence(num) {
   for (let i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}
;
