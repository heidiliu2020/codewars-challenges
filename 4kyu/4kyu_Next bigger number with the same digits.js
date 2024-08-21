/**
 * 4kyu_Next bigger number with the same digits
 * https://www.codewars.com/kata/55983863da40caa2c900004e

  DESCRIPTION:

  Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.
  
  For example:

  12 ==> 21
  513 ==> 531
  2017 ==> 2071

  If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

    9 ==> -1
  111 ==> -1
  531 ==> -1

 */

  function nextBigger(n) {
    let strArr = n.toString().split('');
  
    // Find the point (from right to left) where i > i - 1
    let p = -1;
    for (let i = strArr.length - 1; i > 0; i--) {
      if (+strArr[i] > +strArr[i-1]) {
        p = i - 1;
        break;
      }
    }
  
    // If not fine any point then return -1
    if (p == -1) return p;
  
    // Splice the digits with the point => left--point--right
    let right = strArr.splice(p);
    let point = right.splice(0, 1)[0];
  
    // Find the lowest number > point
    let mm = null, mmi = null;
    for (let i = 0; i < right.length; i++) {
      if (right[i] > point) {
        if (mm == null || right[i] < mm) {
          mm = right[i];
          mmi = i;
        }
      }
    }
  
    if (mmi == null) return -1;

    right.splice(mmi, 1);
    right.push(point);
    right = right.sort();
  
    let result = +strArr.concat([mm]).concat(right).join('');
    return result < n ? -1 : result;
  }

  // Other solution => brute force
  const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

  function nextBigger(n) {
    let arr = sortedDigits(n);
    let max = parseInt(arr.join(''), 10);
    
    for(let i = n + 1; i <= max; i++){
      if(sortedDigits(i).every((x, j) => x === arr[j])){
        return i;
      }
    }
    
    return -1;
  }
