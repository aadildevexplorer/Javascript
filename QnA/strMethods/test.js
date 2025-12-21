// JavaScript String – Technical Interview Questions
// 1. Fundamental Understanding

// How do you determine the total number of characters present in a string?
let totalNumber = "Hello world";
console.log(totalNumber.length);

// How can you access the first and last character of a string?
let firstandlastNum = "I am a programmer";
console.log(firstandlastNum.charAt(0)); // for first
console.log(firstandlastNum.charAt(16)); // for last

// How would you convert an entire string into uppercase characters?
let entireUpperCase = "hello world";
console.log(entireUpperCase.toUpperCase());

// How do you remove leading and trailing whitespace from a string?
let removeSpace = "                                Hello world";
console.log(removeSpace.trim());

// How would you verify whether a specific substring exists within a given string?
let strExists = "I am a part of Substring";
console.log(strExists.includes("part"));

// 2. Logical Manipulation
// How can you extract only the first word from a sentence?
let firstSentance = "mera bhai";
console.log(firstSentance.split(" ")[0]);

// Without using loops, how would you retrieve the last word of a sentence?
let lastWord = "JavaScript is very powerful";
console.log(lastWord.slice(19, 28));

// How can a specific portion of a string be removed using index positions?
let field = "Frontend Development";
console.log(field.slice(9, 21));

// How would you normalize user input (such as an email) to a consistent format?
let consistentformat = "   User@GMail.cOM       ";
console.log(consistentformat.toLowerCase().trimStart().trimEnd());

// How do you combine multiple strings into a single string?
let a = "I am a ".concat("combine string");
console.log(a);

// 3. Output-Based Questions
let str = "JavaScript";
console.log(str[4]); // S

let str1 = " hello ";
console.log(str1.length); // 7

let str2 = "Hello World";
console.log(str2.indexOf("o")); // 4

let str3 = "Hello World";
console.log(str3.lastIndexOf("o")); // 7

let str4 = "JS";
str4[0] = "A";
console.log(str4); // JS

// 4. Real-World Use Cases
// A username is received with unnecessary spaces. How would you sanitize it before storing it in a database?
let extraSpace = "     saifullah           ";
console.log(extraSpace.trimEnd().trimStart());

// How would you capitalize only the first character of a sentence?
let firstCharacter = "hello";
console.log(firstCharacter[0].toUpperCase());

// How would you capitalize the first character of every word in a sentence?  // no idea

// How would you count the frequency of a specific character in a string? // no idea

// How would you validate that a password does not contain any whitespace characters?
const validatePassword = () => {
  const result = [];
  if (result.includes(" ")) {
    console.log("Password not valid ❌");
  } else {
    console.log("Password is valid ✅");
  }
};

// const result = validatePassword("  Hello");
// console.log(result);

const findMaximumNumber = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const result = findMaximumNumber([1, 2, 3, 4, 5 ,6]);
console.log(result);
