/**
 * 5kyu_Extract the domain name from a URL
 * https://www.codewars.com/kata/514a024011ea4fb54200004b

  DESCRIPTION:

  Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
  
  For example:

  * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
  * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
  * url = "https://www.cnet.com"                -> domain name = cnet"

 */

  function domainName(url){
    if (!url.includes('http')) return url.replace('www.', '').split('.')[0];
    return url.slice(url.search(':') + 3, url.length).replace('www.', '').split('.')[0];
  }

  // Other solution
  function domainName(url){
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');
    return url.split('.')[0];
  };
  