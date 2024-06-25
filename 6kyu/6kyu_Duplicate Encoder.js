/**
 * 6kyu_Duplicate Encoder
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

  DESCRIPTION:

  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

  Examples
  "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))((" 
  Notes
  Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

 */

function duplicateEncode(word){
    let str = word.toLowerCase()
    //.replace(/\(/g, '_').replace(/\)/g, '');
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let reg
      if (str[i] == '(') {
        reg = /\(/g
      } else if (str[i] == ')') {
        reg = /\)/g
      } else {
        reg = new RegExp(str[i], 'g');
      }
      result = str.match(reg).length > 1 ? result + ')' : result + '(';
    }
    return result;
  }

  // Other solution
  // indexOf vs lastIndexOf
  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map((a, i, w) => {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
