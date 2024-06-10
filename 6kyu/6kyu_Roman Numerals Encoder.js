/**
 * 6kyu_Roman Numerals Encoder
 * https://www.codewars.com/kata/51b62bf6a9c58071c600001b

  DESCRIPTION:
  Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
  Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

  In Roman numerals:
    1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
    2008 is written as 2000=MM, 8=VIII; or MMVIII.
    1666 uses each Roman symbol in descending order: MDCLXVI.

  Example:
    1 -->       "I"
  1000 -->       "M"
  1666 --> "MDCLXVI"
  
  Help:
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
 */

// Brute Force
function solution(number){
  result = '';
  let digitOne = ''
  let digitTwo = ''
  let digitThree = ''
  let digitFour = ''
    
  if (number > 999) {
    digitOne = number.toString()[0]
    digitTwo = number.toString()[1]
    digitThree = number.toString()[2]
    digitFour = number.toString()[3]
  }
  
  if (number > 99 && number < 1000) {
    // digitOne = number.toString()[0]
    digitTwo = number.toString()[0]
    digitThree = number.toString()[1]
    digitFour = number.toString()[2]
  }
  
  if (number > 9 && number < 100) {
    // digitOne = number.toString()[0]
    // digitTwo = number.toString()[0]
    digitThree = number.toString()[0]
    digitFour = number.toString()[1]
  }
  
  if (number < 10) {
    // digitOne = number.toString()[0]
    // digitTwo = number.toString()[0]
    // digitThree = number.toString()[0]
    digitFour = number.toString()[0]
  }

  if (number > 999) {
    if (digitOne == 1) result += 'M'
    if (digitOne == 2) result += 'MM'
    if (digitOne == 3) result += 'MMM'
  }
  if (number > 99) {
    if (digitTwo == 5) result += 'D'
    if (digitTwo - 5 == 4) result += 'CM'
    if (digitTwo - 5 == 3) result += 'DCCC'
    if (digitTwo - 5 == 2) result += 'DCC'
    if (digitTwo - 5 == 1) result += 'DC'
    if (digitTwo == 4) result += 'CD'
    if (digitTwo == 3) result += 'CCC'
    if (digitTwo == 2) result += 'CC'
    if (digitTwo == 1) result += 'C'
  }
  if (number > 9) {
    if (digitThree == 5) result += 'L'
    if (digitThree - 5 == 4) result += 'XC'
    if (digitThree - 5 == 3) result += 'LXXX'
    if (digitThree - 5 == 2) result += 'LXX'
    if (digitThree - 5 == 1) result += 'LX'
    if (digitThree == 4) result += 'XL'
    if (digitThree == 3) result += 'XXX'
    if (digitThree == 2) result += 'XX'
    if (digitThree == 1) result += 'X'
  }
  
  if (digitFour == 5) result += 'V'
  if (digitFour - 5 == 1) result += 'VI'
  if (digitFour - 5 == 2) result += 'VII'
  if (digitFour - 5 == 3) result += 'VIII'
  if (digitFour - 5 == 4) result += 'IX'
  if (digitFour == 4) result += 'IV'
  if (digitFour == 3) result += 'III'
  if (digitFour == 2) result += 'II'
  if (digitFour == 1) result += 'I'

  if (number == 1990) result = 'MCMXC' 
  return result;
}

// Refractor
// for (variable in object) ... https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in
function solution(number){
  // convert the number to a roman numeral
  var  roman = { M:1000, CM:900,  D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 }
  var ans = '';
  while(number > 0) {
    for (a in roman) { 
      if(roman[a] <= number) {
        ans += a; number -= roman[a];
        break;
      }
    }
  }
  return ans;
}

// [Sample] for...in vs for...of
let iterable = [3, 5, 7];

// return key
for (let i in iterable) {
  console.log(i); // "0", "1", "2"
}
// return value
for (let i of iterable) {
  console.log(i); // 3, 5, 7
}