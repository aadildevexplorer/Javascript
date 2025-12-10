// ------------------------
// Normal primitive string
// ------------------------
let str = "aadil";
console.log(str); // Output: "aadil" (primitive string)

// ------------------------
// String interpolation using Template Literals (backticks ` `)
// ------------------------
let name = "boss";
console.log(`My name is ${name}`); // Output: "My name is boss"

// ------------------------
// Creating a String object using the String constructor
// ------------------------
let gameName = new String("boss"); 
// Note: This creates a String object (wrapper object), not a primitive string
console.log(gameName); // Output: [String: 'boss']

// Accessing the internal prototype of the object
console.log(gameName?.__proto__); 
// Explanation: In JS, every object has a hidden prototype that links it to another object

// Accessing characters and string methods
console.log(gameName[0]);         // 'b' - first character
console.log(gameName.length);     // 4 - length of the string
console.log(gameName[0].toUpperCase()); // 'B' - first character capitalized
console.log(gameName.charAt(3));  // 's' - character at index 3
console.log(gameName.indexOf("o")); // 1 - position of first occurrence of 'o'
console.log(gameName.substring(0, 4)); // 'boss' - substring from index 0 to 4
console.log(gameName.slice(-1, 4));    // '' - slice with negative start index
console.log(gameName.split(""));       // ['b', 'o', 's', 's'] - split string into array of characters

// ------------------------
// Removing whitespaces
// ------------------------
let user = "      aadil       ";
console.log(user);       // '      aadil       ' - original string
console.log(user.trim()); // 'aadil' - trimmed string (removes leading/trailing spaces)

// ------------------------
// String manipulation methods
// ------------------------
let url = "https://aadilkhan.vercel.app";

// Replacing a substring
console.log(url.replace(".vercel.", "-")); // 'https://aadilkhan-vercel.app'

// Checking if string contains a substring
console.log(url.includes("aadil")); // true
