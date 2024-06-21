/**
 * 6kyu_Find The Parity Outlier
 * https://www.codewars.com/kata/5526fc09a1bbd946250002dc

  DESCRIPTION:

  You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

  Examples
  [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
  [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
 */

  function findOutlier(integers){
    let isOdds = 0;
    if (integers[0] % 2 == 0) isOdds++;
    if (integers[1] % 2 == 0) isOdds++;
    if (integers[2] % 2 == 0) isOdds++;
    const isOddsMore = isOdds > 1;
    return integers.find(e => isOddsMore ? e % 2 != 0 : e % 2 == 0);
  }

  // Other solution
  function findOutlier(int) {
    let even = int.filter(a => a % 2 == 0 );
    let odd = int.filter(a => a % 2 !== 0);
    return even.length == 1 ? even[0] : odd[0];
  }
