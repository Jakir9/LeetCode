/**
 * @param {string} s
 * @return {boolean}
 */

const pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function (s) {
  if (
    s.length % 2 === 1 ||
    s[0] === "]" ||
    s[0] === ")" ||
    s[0] === "}" ||
    s[s.length - 1] === "[" ||
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "{"
  ) {
    return false;
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
      stack.push(s[i]);
    } else if (pairs[stack.pop()] !== s[i]) {
      //if the popped element is not the corresponding closing bracket

      return false;
    }
  }
  return stack.length === 0;
};