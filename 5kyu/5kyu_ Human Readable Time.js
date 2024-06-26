/**
 * 5kyu_Human Readable Time
 * https://www.codewars.com/kata/52685f7382004e774f0001f7

  DESCRIPTION:

  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

  HH = hours, padded to 2 digits, range: 00 - 99
  MM = minutes, padded to 2 digits, range: 00 - 59
  SS = seconds, padded to 2 digits, range: 00 - 59
  The maximum time never exceeds 359999 (99:59:59)

  You can find some examples in the test fixtures.
 */

  function humanReadable (seconds) {
    let HH = checkDigit(String(Math.floor(seconds / 3600)));
    let MM = checkDigit(String(Math.floor((seconds % 3600) / 60)));
    let SS = checkDigit(String(seconds % 60));
    return `${HH}:${MM}:${SS}`;
  }
  
  function checkDigit(str) {
    return str.length < 2 ? `0${str}` : str;
  }

  // Refractor
  // parseInt() => returns an integer or NaN
  function humanReadable (seconds) {
    let pad = x => x < 10 ?  '0'+x : x;
    let HH = parseInt(seconds / 3600);
    let MM = parseInt((seconds / 60) % 60);
    let SS = seconds % 60;
    return `${pad(HH)}:${pad(MM)}:${pad(SS)}`;
  }
  