/**
 * 5kyu_RGB To Hex Conversion
 * https://www.codewars.com/kata/513e08acc600c94f01000001

  DESCRIPTION:

  The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
  Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

  Examples (input --> output):
  255, 255, 255 --> "FFFFFF"
  255, 255, 300 --> "FFFFFF"
  0, 0, 0       --> "000000"
  148, 0, 211   --> "9400D3"
 */

  function hexString(str) {
    if (str > 255) str = 255;
    if (str < 0) str = 0;
    let hexStr = str.toString(16).toUpperCase();
    return hexStr.length < 2 ? '0' + hexStr : hexStr;
  }

  function rgb(r, g, b) {
    return `${hexString(r)}${hexString(g)}${hexString(b)}`;
  }

  // Other solution
  function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b);
  }
  
  function toHex(num) {
      if(num < 0) return '00';
      if(num > 255) return 'FF';
      return  ('0' + (Number(num).toString(16))).slice(-2).toUpperCase();
  }
