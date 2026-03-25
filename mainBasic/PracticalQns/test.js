// 1️⃣ Separate Data Types from Array
// 👉 Based on: dataTypes, forOfLoop, arrays, typeof
// Question:
// Write a function that takes an array containing mixed data types and returns an object separating:
// strings
// numbers
// booleans
// null
// undefined

const arr = ["Hello", 25, true, null, undefined, "JS", 100];

function seprateDataTypes(InputValue) {
  let strData = [];
  let numData = [];
  let boolData = [];
  let nullData = [];
  let undData = [];

  for (const item of InputValue) {
    if (typeof item === "string") {
      strData.push(item);
    } else if (typeof item === "number") {
      numData.push(item);
    } else if (typeof item === "boolean") {
      boolData.push(item);
    } else if (item === null) {
      nullData.push(item);
    } else if (typeof item === "undefined") {
      undData.push(item);
    }
  }

  return {
    str: strData,
    num: numData,
    bool: boolData,
    null: nullData,
    und: undData,
  };
}

console.log(seprateDataTypes(arr));

// 2️⃣ Count Vowels in a String
// 👉 Based on: loops, string, condition, function
// Question:
// Create a function that counts total vowels in a given string.

const countVowles = (str) => {
  const formattedArr = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < formattedArr.length; i++) {
    const char = formattedArr[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
};

const result = countVowles("JavaScript");
console.log(result);

// 3️⃣ Custom Map Function (Higher Order Function)
// 👉 Based on: HigherOrderArray, function, scope
// Question:
// Create your own version of map() function.
// Example:

let num = [1, 2, 3];
const sum = num.map((item) => item * 2);
console.log(sum);

// 4️⃣ Find Duplicate Values in Array
// 👉 Based on: arrays, object, controlFlow, problemSolving
// Question:
// Write a function that finds duplicate values in an array.

let arr1 = [1, 2, 3, 4, 2, 5, 1];
console.log([...new Set([...arr1])]);

// ✅ Basic Q1 – Swap Two Variables (Without Third Variable)
// 👉 Based on: variables, memory

let a = 10;
let b = 20;

if (a === 10) {
  a = 20;
} else if (b === 20) {
  b = 10;
}

console.log(a);
console.log(b);

// 🚀 Advanced Q2 – Deep vs Shallow Copy Problem
// 👉 Based on: stack & heap, object reference

const user = {
  name: "John",
  address: {
    city: "Delhi",
  },
};

const copyUser = structuredClone(user);
copyUser.address.city = "Mumbai";

console.log(copyUser.address.city);
console.log(user.address.city);

// 🔹 02_basics (Array, Object, JSON, Destructuring)
// ✅ Basic Q3 – Find Highest Number in Array

// 👉 Based on: arrays

const findMaximumArray = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const result1 = findMaximumArray([1, 2, 3, 4, 5]);
console.log(result1);

// 🚀 Advanced Q4 – Object Destructuring + Rename + Default Value
// 👉 Based on: destructuring

const userName = {
  name: "Ayan",
  age: 22,
};

const { name, age } = userName;
console.log(name);
console.log(age);

// 🔹 03_basics (arrow, function, IIFE, scope)
// ✅ Basic Q5 – Convert Normal Function to Arrow Function

function greet(name) {
  return "Hello " + name;
}
const convertArrow = (name) => {
  return "Hello" + name;
};

console.log(convertArrow(" Programmer"));

// 🚀 Advanced Q6 – Scope Based Question
// 👉 Based on: lexical scope

let a1 = 10;

function outer() {
  let a1 = 20;
  function inner() {
    console.log(a1);
  }
  inner();
}

outer();

const b2 = 90;
function get() {
  console.log(b2);
}
get();

// 🔹 04_controlFlow (ifElse, switch, truthy/falsy)
// ✅ Basic Q7 – Grade Calculator

// Input marks and return grade:

// 90+ → A

// 75+ → B

// 50+ → C

// below → Fail

const marks = 90;

if (marks >= 90) {
  console.log("A");
} else if (marks > 75) {
  console.log("B");
} else if (marks > 50) {
  console.log("C");
} else {
  console.log("Fail");
}

// 🚀 Advanced Q8 – Truthy/Falsy Edge Case
// What will be output?

const [] = [];

if ([]) {
  console.log("Yes");
} else {
  console.log("No");
}

// 🔹 05_iteration (forLoop, whileLoop, HOF, callStack)
// ✅ Basic Q9 – Reverse an Array Using Loop

const reverseArr = (num) => {
  let rvrs = num;
};
