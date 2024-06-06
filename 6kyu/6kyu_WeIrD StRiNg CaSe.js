// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string){
  let arr = string.split(' ');
  let result = '';
  
  for (let i = 0; i < arr.length; i ++) {
    let target = arr[i];
    let str = '';
    for(let k = 0; k < target.length; k ++) {
      if (k % 2 == 0) {
        str += target[k].toUpperCase();
      } else {
        str += target[k].toLowerCase();
      }
    }
    result = (i == arr.length - 1) ? result + str : result + str + ' ';
  }
