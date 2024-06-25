// 2024/6/25 Live Coding
// Here is sum of square root from 1 to N.
// Find the smallest N as sum of digits is bigger than 10000.

function solution(max) {
  let sum = 0;
  let num = 1;
  
  while (sum <= max) {
    sum += Math.sqrt(num);
    if (sum <= max) num++;
  }
  console.log('sum', sum);
  console.log('num', num);
  return num;
}

const target = 10000;
console.log(solution(target));
// 608