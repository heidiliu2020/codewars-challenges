/**
 * 6kyu_Multiples of 3 or 5
 * https://www.codewars.com/kata/514b92a657cdc65150000006

  DESCRIPTION:
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
  Additionally, if the number is negative, return 0.
  Note: If the number is a multiple of both 3 and 5, only count it once.
  Courtesy of projecteuler.net (Problem 1)
 */

function solution(number){
  let arr = [];
  if (number <= 3) return 0; 
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0) arr.push(i);
    if (i % 5 === 0) arr.push(i);
    if (i % 15 === 0) arr.pop(i);
  }
  return arr.reduce((a,b) => a+b);
}

// Refactor => No need to use array.
function solution(number){
  let sum = 0;
  for(let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

// Other solution
function solution(number){
  var sum = 0;
  for(var i = 1;i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}
