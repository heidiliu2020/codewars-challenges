/**
 * 7kyu_Vowel Count
 * https://www.codewars.com/kata/54ff3102c1bad923760001f3

  DESCRIPTION:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str) {
  let target = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.replaceAll(' ', '').split('');
  let num = 0;
  for (let i = 0; i < strArr.length; i++) {
    for (let m = 0; m < target.length; m++) {
      if (strArr[i] == target[m]) num++;
    }
  }
  return num;
}

// Refactor
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0;j < vowels.length; j++) {
      if (str[i] === vowels[j]) vowelsCount++;
    }
  }
  return vowelsCount;
}

// Other solution
// i: ignore
// g: global
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}