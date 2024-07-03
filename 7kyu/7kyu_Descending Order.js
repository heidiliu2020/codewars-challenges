/**
 * 7kyu_Descending Order
 * https://www.codewars.com/kata/5467e4d82edf8bbf40000155

  DESCRIPTION:

  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
  Essentially, rearrange the digits to create the highest possible number.

  Examples:
  Input: 42145 Output: 54421
  Input: 145263 Output: 654321
  Input: 123456789 Output: 987654321

 */

  // Array.prototype.sort() => arr.sort([compareFunction])
  function descendingOrder(n){
    return Number(String(n).split('').sort((a, b) => b - a).join(''));
  }

  // Other solution
  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
  