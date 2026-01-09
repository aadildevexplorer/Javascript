// 1️⃣

// Ek string "JavaScript" di hai.
// Iski total length print karo.

const ln = "JavaScript";
console.log(ln.length);

// 2️⃣

// String "hello world" di hai.
// Isko pure capital letters me convert karo.

const upper = "hello world";
console.log(upper.toUpperCase());

// 3️⃣

// String "WELCOME" di hai.
// Isko pure small letters me convert karo.

const letter = "WELCOME";
console.log(letter.toLowerCase());

// 4️⃣

// String "I love coding in JavaScript" di hai.
// Check karo "JavaScript" word present hai ya nahi.

const check = "I love coding in JavaScript";
console.log(check.includes("JavaScript"));

// 5️⃣

// String "Developer" di hai.
// Iska first character print karo.

const first = "Developer";
console.log(first[0]);

// 6️⃣

// String "Frontend" di hai.
// Iska last character print karo.

const last = "Frontend";
console.log(last[7]);

// 7️⃣

// String "I like Java" di hai.
// Java ko replace karke "JavaScript" bana do.

const java = "I like Java";
console.log(java.replace("Java", "JavaScript"));

// 8️⃣

// String "apple,banana,mango" di hai.
// Isko array me convert karo.

const con = "apple,banana,mango";
console.log(con.split(","));

// 9️⃣

// String " hello world " di hai.
// Extra spaces hata ke clean string print karo.

const extraSpace = " hello world ";
console.log(extraSpace.trim());

// 🔟

// String "JavaScript" di hai.
// Isme se "Script" part nikal ke print karo.

const script = "JavaScript";
console.log(script.slice(4, 10));

// 1️⃣1️⃣

// String "JavaScript is powerful" di hai.
// Check karo ye string "JavaScript" se start hoti hai ya nahi.

const str = "JavaScript is powerful";
console.log(str.startsWith("JavaScript"));

// 1️⃣2️⃣

// String "index.html" di hai.
// Check karo ye "html" se end hoti hai ya nahi.

const endStr = "index.html";
console.log(endStr.endsWith("html"));

// 1️⃣3️⃣

// String "developer" di hai.
// Character "e" pehli baar kis position par aata hai batao.

const character = "developer";
console.log(character.indexOf("e"));

// 1️⃣4️⃣

// String "Hi" di hai.
// Isko 3 baar repeat karke ek hi string bana do.

const rpt = "Hi";
console.log(rpt.repeat(3));

// 1️⃣5️⃣

// Strings "Hello" aur "hello" di hui hain.
// Check karo dono same hain ya nahi (case ignore karke).

// 1
console.log("Hello" === "hello");

// 2
const str1 = "Hello";
const str2 = "hello";

console.log(str1 != str2);

// const a = 10;
// function name() {
//   console.log(a);
// }
// name();

// const name = () => {
//   console.log(a);
// };

// name();
// console.log(a);
//   let a = 20;

// let a = 10;

// (function () {
//   console.log(a);
//   let a = 20;
// })();

console.log([] == []); // true
console.log([] == ![]); // false
