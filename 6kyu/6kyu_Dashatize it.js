/**
 * 6kyu_Dashatize it
 * https://www.codewars.com/kata/58223370aef9fc03fd000071

  DESCRIPTION:
  Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

  Ex:
  274 -> '2-7-4'
  6815 -> '68-1-5'
 */

  function dashatize(num) {
    let numStr = num.toString().replace('-', '')
    let result = '';
    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] % 2 == 0 && numStr[i + 1] % 2 == 0) {
        result += numStr[i]
      } else { 
      (i == numStr.length - 1) ? result += numStr[i] : result += numStr[i] + '-';
      }
    }
    return result;
  }

  // Other solution
  // Regex
  // `()` group, `^` head, `$` last, `+` at least once
  // `$1` => 取得配對到的值
  // `$n` => https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n
  function dashatize(num) {           // -68175 
    return String(num)                // '-68175'
      .replace(/([13579])/g, '-$1-')  // '-68-1--7--5-'
      .replace(/--+/g, '-')           // '-68-1-7-5-'
      .replace(/(^-|-$)/g, '')        // '68-1-7-5'
  }
