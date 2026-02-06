// 🔹 PRIMITIVE DATA TYPES =>
// Ye wo values hain jo immutable (change nahi hoti) hoti hain aur by value store hoti hain.

// 1. String → Text data
let name = "Hamza";
console.log(name); // "Hamza"

// 2. Number → Integer or Float values
let age = 22;
let price = 99.99;
console.log(age + price); // 121.99

// 3. Boolean → true / false values
let isLoggedIn = true;
console.log(isLoggedIn); // true

// 4. Undefined → Variable declared but no value assigned
let city;
console.log(city); // undefined

// 5. Null → Intentional empty or unknown value
let response = null;
console.log(response); // null

// 6. Symbol → Unique identifier (mostly used in objects)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false

// false print karne ki vajah
// Symbol("id") ek hidden unique token generate karta hai.
// Wo string "id" sirf label hoti hai (debugging ke liye),
// lekin wo token khud alag identity rakhta hai.

// 7. BigInt → Very large integer values
let bigNum = 1234567890123456789012345678901234567890n;
console.log(bigNum + 10n); // Works fine with 'n' suffix

// ------------------------------------------------------------

// 🔹 NON-PRIMITIVE (REFERENCE) DATA TYPES =>
// Ye mutable hote hain aur heap memory me store hote hain. Copy hone par reference pass hota hai (value nahi).

// 1. Object → Key-Value pairs
// litteral objects
// Object is a fundamental data type that is used to collection of key value pairs{}

let user = {
  name: "Hamza",
  age: 22,
  skills: ["MERN", "Node.js"],
};
console.log(user.name); // "Hamza"

// 2. Array → Ordered list of values
let fruits = ["apple", "banana", "mango"];
fruits.push("grape");
console.log(fruits); // ["apple", "banana", "mango", "grape"]

// 3. Function → Reusable block of code (callable object)
function greet(person) {
  return `Hello, ${person}!`;
}
console.log(greet("Hamza")); // "Hello, Hamza!"

// 4. Date → Represents date and time
let today = new Date();
console.log(today.toDateString()); // e.g. "Mon Oct 06 2025"

// 5. RegExp → Regular Expression pattern matching
let regex = /code/;
console.log(regex.test("learn to code")); // true

// 6. Map → Stores key-value pairs (keys can be objects)
let map = new Map();
map.set("name", "Hamza");
map.set("role", "Developer");
console.log(map.get("name")); // "Hamza"

// 7. Set → Stores unique values only
let set = new Set([1, 2, 3, 3, 2]);
console.log(set); // Set(3) {1, 2, 3}

// ------------------------------------------------------------

// 🔹 TYPE CHECKING
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof bigNum); // bigint
console.log(typeof isLoggedIn); // boolean
console.log(typeof city); // undefined
console.log(typeof response); // object (bug in JS)
console.log(typeof id1); // symbol
console.log(typeof user); // object
console.log(typeof fruits); // object
console.log(typeof greet); // function

// ------------------------------------------------------------

// 🔹 STACK vs HEAP (Primitive vs Reference behavior)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (independent copy)
console.log(b)
let obj1 = { lang: "JS" };
let obj2 = obj1;
obj2.lang = "Node.js";
console.log(obj1.lang); // "Node.js" (same reference)

const x = Symbol();
const y = Symbol();

console.log(x, y);
