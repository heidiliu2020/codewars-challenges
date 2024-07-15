/**
 * 6kyu_Roman Numerals Decoder
 * https://www.codewars.com/kata/51b6249c4612257ac0000005
 * 
  DESCRIPTION:

  Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
  You don't need to validate the form of the Roman numeral.

  Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s.
  So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII).
  The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

  Example:
  "MM"      -> 2000
  "MDCLXVI" -> 1666
  "M"       -> 1000
  "CD"      ->  400
  "XC"      ->   90
  "XL"      ->   40
  "I"       ->    1
  
  Help:
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000

  Courtesy of rosettacode.org
 */

  function solution(roman) {
    let res = 0;
    const romanMap = { M:1000, D:500, C:100, L:50, X:10, V:5, I:1 };
    const others = ['CD', 'CM', 'XL', 'XC', 'IV', 'IX'];
    for (let i = 0; i < roman.length; i++) {
      others.indexOf(roman[i] + roman[i + 1]) == -1 ? res += romanMap[roman[i]] : res -= romanMap[roman[i]];
    }
    return res;
  }

  // Other solution
  // \w: Matches any word character, where a word character includes letters (A–Z, a–z), numbers (0–9), and underscore (_).
  function solution(roman){
    let conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
 }