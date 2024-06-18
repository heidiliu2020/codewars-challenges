/**
 * 6kyu_Find the odd int
 * https://www.codewars.com/kata/54da5a58ea159efa38000836

  DESCRIPTION:

  Given an array of integers, find the one that appears an odd number of times.
  There will always be only one integer that appears an odd number of times.

  Examples
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

  function findOdd(arr) {
    let counts = {};
    let result
    for (const item of arr) {
      counts[item] = counts[item] ? counts[item] + 1 : 1;
    }
    for (const index in counts) {
      if (counts[index] % 2 != 0) result = Number(index);
    }
    return result;
  }

  // Other solution
  // arr.find(callback[, thisArg]) => https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  function findOdd(arr) {
    return arr.find(item => (arr.filter(el => el == item)).length % 2)
  }

  // Other solution
  // XOR Operator
  // 2 ^ 2 => 0
  // 2 ^ 1 => 3
  // 0 ^ 8 => 8
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
