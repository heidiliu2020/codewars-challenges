/**
 * 6kyu_Bit Counting
 * https://www.codewars.com/kata/526571aae218b8ee490006f4

  DESCRIPTION:

  Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
  Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

  // number.toString(radix)
  // radix: An integer in the range 2 through 36 specifying the base to use for representing the number value. Defaults to 10.
  export function countBits(n: number): number {
    let counts = 0;
    let bits = n.toString(2);
    for (let i = 0; i < bits.length; i++) {
      if (bits[i] == '1') counts++;
    }
    return counts;
  }

  // Other solution
  // format to arr and filter 1
  export function countBitsByArr(n: number): number {
    return n.toString(2).split('').filter(e => e == '1').length;
  }

  // Other solution
  // replace all 0
  export function countBitsByRegex(n: number): number {
    return n.toString(2).replace(/0/g, '').length;
  }
  