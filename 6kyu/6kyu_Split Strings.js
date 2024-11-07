/**
 * 6kyu_Split Strings
 * https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

  Description:

  Complete the solution so that it splits the string into pairs of two characters.
  If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

  Examples:

  * 'abc' =>  ['ab', 'c_']
  * 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let digit = i + 2;
    if (digit % 2 == 0) {
      if (i == str.length - 1) {
        arr.push(str[i] + '_');
      } else {        
        arr.push(str.slice(i, digit));
      }
    }
  }
  return arr;
}

// other solution
// String.prototype.match() => The match() method of String values retrieves the result of matching this string against a regular expression.
// match(regexp), regexp = /.{2}/ means  '包含 2 次任意字元'
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}