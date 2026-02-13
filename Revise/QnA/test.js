// 1️⃣ Variables & Data Types

// 🟢 What will typeof NaN return?
// type is number

// 🔴 Explain difference between undefined and null with a real example.
// undefined variable is decleard but not aassign any value

// example
let a;
console.log(a);

// null is empty or unknown value jo developer khud deta h
let b = null;
console.log(b);

// 2️⃣ Stack vs Heap
// 🟢 If you copy a primitive variable into another, do they share memory?

let x = 90;
let y = x;
y = 20;

console.log(x); // 90
console.log(y); // 20
// same memory share nhi hongi kiyunki stack me value ki copy bnti h
// 🔴 Why does changing a copied object also change the original sometimes?

// 3️⃣ Objects

// 🟢 How do you access a property named "age" from an object?

const obj = {
  name: "John Doe",
  age: 20,
  email: "user@gmail.com",
};

console.log(obj.age);

// 🔴 What is the difference between shallow copy and deep copy of objects? ye nhi pata bata ise

// 4️⃣ Arrays

// 🟢 Which method adds an element at the end of an array?

const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
// 🔴 How would you remove duplicate values from an array? ye nhi pata bata ise

// 5️⃣ Strings

// 🟢 How do you find the length of a string?

const str = "hello world".length;
console.log(str);

// 🔴 How can you check if a string contains a specific word?

const specificWord = "I Love JavaScript".includes("Love");
// specificWord.includes("Love");
console.log(specificWord);

// 6️⃣ Number & Math

// 🟢 Which Math method rounds a number up?

Math.random(); // method

// 🔴 How do you generate a random integer between 5 and 15?

const number = Math.floor(Math.random(5 * 9999));
console.log(number);

// 7️⃣ Date & Time
// 🟢 How do you get the current year using Date?
let newDate = new Date();
console.log(newDate.getFullYear());
// 🔴 How do you calculate the difference (in days) between two dates?

// 8️⃣ JSON

// 🟢 Which method converts an object into JSON string?

JSON.stringify();

// 🔴 Why can't JSON store functions or undefined values? nhi pataa

// 9️⃣ Functions

// 🟢 What keyword is used to return a value from a function?
// this
// 🔴 What is a callback function? nhi pata

// 🔟 Arrow Function

// 🟢 How do you write an arrow function that returns a * b?

const data = (a, b) => {
  console.log(a, b);
  return a * b;
};

data(1, 4);

// 🔴 Why should arrow functions not be used as object methods in some cases?

const arrow = {
  name: "aadil",
  greet: function () {
    const getUser = () => {
      console.log(this.name);
    };
    getUser();
  },
};

arrow.greet();
// 1️⃣3️⃣ Scope

// 🟢 Can a variable declared inside a function be accessed outside?

function ab() {
  console.log("Hello world");
}

ab();

// 🔴 What is lexical scope?

// 1️⃣6️⃣ JS Code Execution

// 🟢 What data structure manages function calls in JS?
// V8 js engine
// 🔴 What happens during the creation phase of execution context?
// jo solve ya attempt nhi kiye h vo bata

const userDara = {
  name: "John Doe",
  name: "mona",
  greet() {
    console.log(this.name);
  },
};

userDara.greet(); // mona because bject me same property name do baar likhoge,
// toh last wali value pehli wali ko overwrite kar deti hai.
