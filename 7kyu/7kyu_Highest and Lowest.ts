/**
 * 7kyu_Highest and Lowest
 * https://www.codewars.com/kata/554b4ac871d6813a03000035

  DESCRIPTION:

  Examples

  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"

  Notes

  All numbers are valid Int32, no need to validate them.
  There will always be at least one number in the input string.
  Output string must be two numbers separated by a single space, and highest number is first.

 */

  export class Kata {
    static highAndLow(numbers: string): string {
      let arr = numbers.split(' ');
      let high = arr[0];
      let low = arr[0];
      if (arr.length > 1) {
        high = Number(arr[0]) > Number(arr[1]) ? arr[0] : arr[1];
        low = Number(arr[0]) < Number(arr[1]) ? arr[0] : arr[1];
      
        for (let i = 2; i < arr.length; i++) {
          if (Number(arr[i]) > Number(high)) high = arr[i];
          if (Number(arr[i]) < Number(low)) low = arr[i];
        }
      }
      return high + ' ' + low;
    }
  }

  // Other solution
  // Math.max(...array) => Math.max(value1, value2, ...)
  // Math.min(...array)
  export class Kata {
    static highAndLow(numbers: string): string {    
      const numberList = numbers.split(' ').map(Number);   
      return `${Math.max(...numberList)} ${Math.min(...numberList)}`;
    }
  }
