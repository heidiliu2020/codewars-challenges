/**
 * 6kyu_IP Validation
 * https://www.codewars.com/kata/515decfd9dcfc23bb6000006
  
  DESCRIPTION:
  Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

  Valid inputs examples:
  Examples of valid inputs:
  1.2.3.4
  123.45.67.89

  Invalid input examples:
  1.2.3
  1.2.3.4.5
  123.456.78.90
  123.045.067.089

  Notes:
  Leading zeros (e.g. 01.02.03.04) are considered invalid
  Inputs are guaranteed to be a single string

 */

  function isValidIP(str) {
    let arr = str.split('.');
    let result = false
   
    if (arr.length == 4) {
      for (let i = 0; i < arr.length; i++) {
        if (
          Number(arr[i]) != arr[i] ||
          Number(arr[i]).toString().length != arr[i].toString().length
        ) {
          result = false;
          break;
        }
        if (arr[i] > 255 || arr[i] < 0) {
          result = false;
          break
        }
        result = true;
      }
    }
    return result;
  }

  // Refractor
  // for (key in object)
  // for (value of array)
  // isNaN() Check value is NaN(Not-A-Number) or not => https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  function isValidIP(str) {
    const splitted = str.split('.');
    if (splitted?.length !== 4) return false;
    for (const split of splitted) {
      const numSplit = Number(split);
      if (isNaN(numSplit)) return false;
      if (numSplit.toString() !== split) return false;
      if (numSplit < 0 || numSplit > 255) return false;
    }
    return true;
  }

  // Other solution => Regex
  function isValidIP(str) {
    return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
  }