/**
 * 6kyu_Give me a Diamond
 * https://www.codewars.com/kata/5503013e34137eeeaa001648

  DESCRIPTION:
  Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

  Task
  You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
  Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

  Examples
  A size 3 diamond:
   *
  ***
   *
  ...which would appear as a string of " *\n***\n *\n"

  A size 5 diamond:
    *
   ***
  *****
   ***
    *
  ...that is:
  "  *\n ***\n*****\n ***\n  *\n"
 */

  function diamond(n){
    if (n < 1 || n % 2 == 0) return null;
    let result = '';
    let mid = Math.ceil(n / 2);
    for (let i = 1; i <= n; i++) {
      if (i <= mid) {
        result += ' '.repeat(mid - i) + '*'.repeat(2 * i - 1) + '\n'
      } else {
        result += ' '.repeat(i - mid) + '*'.repeat(2 * (n - i) + 1) + '\n'
      }
    }
    return result;
  }

// Other solution
function diamond(n) {
  if (n % 2 == 0 || n < 1 ) return null;
  let x = 0
  let add;
  let diam = line(x,n);
  while((x+=2) < n){
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
}

function repeat(str, x) {
  return Array(x + 1).join(str);
}
function line(spaces,stars){
  return repeat(' ', spaces) + repeat('*', stars) + '\n';
}

// Best solution
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let str = '';
  for (let i = 0; i < n; i++) { 
    let length = Math.abs((n - 2 * i - 1) / 2)
    str += ' '.repeat(length);
    str += '*'.repeat(n - 2 * length);
    str += '\n';
  }
  return str;
}
