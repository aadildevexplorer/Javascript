// normal string
let str = "aadil";
console.log(str);

// string interpolation with Template literals use backticks (` `)
let name = "boss";
console.log(`My name is ${name}`);

let gameName = new String("boss"); // different output isiliye like this {"boss"} JavaScript String ka object ko (wrapper) banata hai, primitive string nahi.
console.log(gameName);
console.log(gameName?.__proto__); // In JavaScript, a prototype is an internal, hidden property that every object possesses, which links it to another object.
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName[0].toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("o"));
console.log(gameName.substring(0, 4));
console.log(gameName.slice(-1, 4));
console.log(gameName.split(""));

let user = "      aadil       ";
console.log(user);
console.log(user.trim());

let url = "https://aadilkhan.vercel.app";
console.log(url.replace(".vercel.", "-"));
console.log(url.includes("aadil"));

// subString => like ye mere pass ek variable h str jis me "javascript" diya h 
// ab mujhe pata karna h ke 0 se 4 tak kiya  words h str me to vo ye h java
// let str = "JavaScript";
// console.log(str.substring(0, 4)); // "Java"
// console.log(str.substring(4, 10)); // "Script"

// substring => substring(startIndex, endIndex)

// startIndex se start karta hai (inclusive)
// endIndex tak jata hai (exclusive)

