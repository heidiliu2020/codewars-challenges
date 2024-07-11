/**
 * 6kyu_Equal Sides Of An Array
 * https://www.codewars.com/kata/5552101f47fc5178b1000050

  DESCRIPTION:

  Some numbers have funny properties. For example:

  89 --> 8¹ + 9² = 89 * 1
  695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
  46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

  In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

  (a^p+b^p+1+c^p+2+d^p+3+...) = n * k

  If it is the case we will return k, if not return -1.

  Note: n and p will always be strictly positive integers.

  Examples:
  n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

  n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

  n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

  n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

 */

  function digPow(n, p){
    let digSum = 0;
    let digArr = String(n).split('');
    let result = -1;

    for (let i = 0; i < digArr.length; i++) {
      digSum += digArr[i] ** (i + p);
    }

    let k = 1;
    while (k <= digSum / n) {
      if (digSum == n * k) {
        result = k;
        break;
      };
      k++;
    }
    return result;
  }

  // Refractor
  function digPow(n, p){
    let digSum = 0;
    let digArr = String(n).split('');

    for (let i = 0; i < digArr.length; i++) {
      digSum += digArr[i] ** (i + p);
    }

    return digSum % n ? -1 : digSum / n;
  }

  // Other solution
  // Math.pow(base, exponent) is equivalent to the ** operator => Math.pow(x, y) = x^y 
  // The Math.pow() static method returns the value of a base raised to a power.
  function digPow(n, p) {
    let x = String(n).split('').reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }
