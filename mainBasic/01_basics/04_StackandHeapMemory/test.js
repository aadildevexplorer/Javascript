// 🧠 1. Stack Memory (Static Memory)

// Stack memory fixed-size data ko store karti hai — jaise:
// Yeh “by value” store hote hain — matlab copy banti hai.

// Primitive types
// Function calls (execution context)
// Local variables (jo function ke andar bante hain)
// ✅ Stored data types:

// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt

let a = 10;
let b = a;
b = 50;

console.log(a); // 10
console.log(b); // 50

// 🧩 2. Heap Memory (Dynamic Memory)

// Heap memory non-primitive data types (objects, arrays, functions) ko store karti hai.
// Ye reference ke through store hote hain, copy nahi banti, sirf reference (address) pass hota hai.

// ✅ Stored data types:
// Object
// Array
// Function

// let obj1 = {
//   name: "Hamza",
// };
// console.log(obj1.name);

// let obj2 = obj2;
// obj2.name = "Khan";

// let str = "hello";
// let newStr = str.toUpperCase(); // newStr me "HELLO", str unchanged
// console.log(str); // "Hello"

// // stack memory
// let c = 3;
// let d = c;

// d = 50;
// console.log(c);

// let num = 90;
// num = 98;

// console.log(num);

// // second example of immutable
// let city = "Delhi";
// // let anotherCity = city;

// anotherCity = "Mumbai";

// console.log(city);
// console.log(anotherCity);

// // second example of mutable
// let person = {
//   name: "aadil",
//   age: "22",
// };

// let anotherPerson = person;
// anotherPerson.age = 28;

// console.log(person.age);
// console.log(anotherPerson.age);

// let e = "dddd";
// console.log(e);
