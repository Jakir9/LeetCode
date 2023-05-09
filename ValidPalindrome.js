/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //convert to uppercase
  let string = s.toUpperCase();
  //split("").sort().join("")
  string.split("").join("");

  //remove non alphanumeric chars
  string = string.replace(/[^0-9A-Z]/gi, "");

  console.log(string);
  //check if reverse == actual
  return string.split("").reverse().join("") === string;
};
