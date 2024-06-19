/**
 * 7kyu_Ones and Zeros
 * https://www.codewars.com/kata/578553c3a1b8d5c40300037c

  DESCRIPTION:

  Given an array of ones and zeroes, convert the equivalent binary value to an integer.
  Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

  Examples:

  Testing: [0, 0, 0, 1] ==> 1
  Testing: [0, 0, 1, 0] ==> 2
  Testing: [0, 1, 0, 1] ==> 5
  Testing: [1, 0, 0, 1] ==> 9
  Testing: [0, 0, 1, 0] ==> 2
  Testing: [0, 1, 1, 0] ==> 6
  Testing: [1, 1, 1, 1] ==> 15
  Testing: [1, 0, 1, 1] ==> 11
  However, the arrays can have varying lengths, not just limited to 4.
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
// 2 ** 0 => 1
// 2 ** 1 => 2
// 2 ** 3 => 8
  export function binaryArrayToNumber(arr: number[]): number {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 1) num += 2 ** (arr.length - i - 1);
    }
    return num;
  };

  // Other solution
  // parseInt(string, radix) => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  export function binaryArrayToNumber(arr: number[]): number{
    return parseInt(arr.join(''), 2)
  };