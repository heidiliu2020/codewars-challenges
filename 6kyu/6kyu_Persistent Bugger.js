/**
 * 6kyu_Persistent Bugger
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

  DESCRIPTION:
  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  For example (Input --> Output):
  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
  4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
 */

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
