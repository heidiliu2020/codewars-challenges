/**
 * 6kyu_Counting Duplicates
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

  DESCRIPTION:

  Count the number of Duplicates
  Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

  Example
  "abcde" -> 0 # no characters repeats more than once
  "aabbcde" -> 2 # 'a' and 'b'
  "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
  "indivisibility" -> 1 # 'i' occurs six times
  "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
  "aA11" -> 2 # 'a' and '1'
  "ABBA" -> 2 # 'A' and 'B' each occur twice

 */

  export function duplicateCount(text: string): number {
    let count = 0;
    text = text.toUpperCase();
    let target = text;
    if (text.length > 0) {
      for (let i = 0; i < text.length; i++) {
        let reg = new RegExp(text[i], 'g');
        if (!!target.match(reg) && target.match(reg)!.length > 1) count++;
        target = target.replace(reg, '');
      }
    }
    return count;
  }

  // Other solution with JavaScript
  function duplicateCount(text) {
    let target = text.toLowerCase();
    let count = 0;
    let used = [];
    
    target.split('').forEach(letter => {
      if (!used.includes(letter) && (target.split(letter).length - 1) > 1) {
        count++;
        used.push(letter);
      }
    });
    
    return count;
  }

  // Use Regex
  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }