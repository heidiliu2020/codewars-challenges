/**
 * 4kyu_Human readable duration format
 * https://www.codewars.com/kata/52742f58faf5485cae000b9a

  DESCRIPTION:

  Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
  The function must accept a non-negative integer.
  If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
  
  It is much easier to understand with an example:

  * For seconds = 62, your function should return 
      "1 minute and 2 seconds"
  * For seconds = 3662, your function should return
      "1 hour, 1 minute and 2 seconds"

  For the purpose of this Kata, a year is 365 days and a day is 24 hours.
  Note that spaces are important.

  Detailed rules

  The resulting expression is made of components like 4 seconds, 1 year, etc.
  In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
  The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

  A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

  Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

  A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
  A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead.
  Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
 */

  function formatDuration (seconds) {
    let result = '';
    let yy = Math.floor(seconds / (60 * 60 * 24 * 365));
    let dd =  Math.floor((seconds / (60 * 60 * 24)) % 365);
    let hh =  Math.floor((seconds / (60 * 60)) % 24);
    let mm =  Math.floor((seconds / 60) % 60);
    let ss = seconds % 60;
    // console.log('yy/dd/hh/mm/ss', `${yy}/${dd}/${hh}/${mm}/${ss}`)
    let YY = yy == 0 ? '' : `${yy} year${yy > 1 ? 's' : ''}`;
    let DD = dd == 0 ? '' : `${dd} day${dd > 1 ? 's' : ''}`;
    let HH = hh == 0 ? '' : `${hh} hour${hh > 1 ? 's' : ''}`;
    let MM = mm == 0 ? '' : `${mm} minute${mm > 1 ? 's' : ''}`;
    let SS = ss == 0 ? '' : `${ss} second${ss > 1 ? 's' : ''}`;
    // console.log('YY/DD/HH/MM/SS', `${YY}/${DD}/${HH}/${MM}/${SS}`)

    let rawArr = [YY, DD, HH, MM, SS];
    let arr = rawArr.filter(e => e != '');
    if (arr.length == 0) result = 'now';
    for (let i = 0; i < arr.length; i++) {
      if (i == arr.length - 1) {
        result += arr[i];
      } else if (i == arr.length - 2 || (arr.length == 2 && i == 0)) {
        result += arr[i] + ' and ';
      } else {
        result += arr[i] + ', ';
      }
    }

    return result;
  }
  
  // Other solution
  function formatDuration (seconds) {
    let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];
  
    if (seconds === 0) return 'now';
    
    for (let key in time) {
      if (seconds >= time[key]) {
        let val = Math.floor(seconds / time[key]);
        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
        seconds = seconds % time[key];
      }
    }
    // * => at least one time
    // $ => last one
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and'+'$1') : res[0];
  }
  