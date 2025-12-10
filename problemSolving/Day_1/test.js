// // ✅ 01 – Variables (01_variable)
// // Basic Q1
// // var, let, and const me difference example ke sath explain karo.
// // Advanced Q2
// // Ek function banao jisme:
// // loop ke andar var use ho
// // doosre me let use ho
// // Aur output ka difference explain karo.

// // ANSWER
// var, let, and const me difference example ke sath explain karo.
// ans - var ek keyword h jisse variable decleare karte h jo ki ek function level hota h

var a = 20;
console.log(a);

// let or const bhi variable decleard karne ke liye use hote h jo ki modern keyword h es6 me intruducd hua h jo block level hote h
let b = 20;
console.log(b);

const c = 10;
console.log(c);

// // var & let const me scope ka diffrence hota h
// or var scope ke bahar access hojata h let or const nhi hote

{
  let lt = 0;
  const g = 90;
  var er = 0;
}

console.log(lt); // not defiend
console.log(g); // not defiend
console.log(er); // acessible isiiliye avoid karte h kiyunki sala bahar bhi access hota h

// // Ek function banao jisme:
// // loop ke andar var use ho
// // doosre me let use ho
// // Aur output ka difference explain karo.

function greet() {
  for (let i = 0; i < i.length; i++) {
    var name = "Aadil";
  }
  console.log(name); //confusion

  for (let i = 0; i < i.length; i++) {
    let a = "aa";
  }
  console.log(a); // a is not defined because a scope ke bahar h isiliye define nhi h ka error
}

greet();

// ✅ 02 – Data Types (02_dataTypes)
// Basic Q1
// Primitive aur Non-Primitive data types me difference example ke sath batao.
// Advanced Q2
// Ek function banao jo input me koi bhi value le aur correctly detect kare:
// number
// string
// array
// object
// null
// undefined
// Custom typeCheck(value) function.

// Primitive aur Non-Primitive data types me difference example ke sath batao.

// primitive date type immutable hote h jo stack memeory me store hote h jinki copy banti h
// example

const str = "Hello";
str[0] = "h";

console.log(str); // Hello

// Non-Primitive data type mutable hote h jo heap memoery me store hote h refrence ke thorugh
// example

const obj1 = {
  name: "Aadil",
};
const obj2 = obj1;
obj2.name = "Ali";

console.log(obj1.name);
console.log(obj2.name);

// Ek function banao jo input me koi bhi value le aur correctly detect kare:
// number
// string
// array
// object
// null
// undefined
// Custom typeCheck(value) function.

function inputValue() {
  const value = undefined;
  if (typeof value === null) {
    return "null";
  }

  if (typeof value === Array) {
    return "Array";
  }

  if (typeof value === Number) {
    return "Number";
  }

  if (typeof value === Boolean) {
    return "Boolean";
  }

  if (typeof value === undefined) {
    return "undefined";
  }

  if (typeof value === String) {
    return "String";
  }

  if (typeof value === Object) {
    return "Object";
  }

  console.log(value);
}

inputValue();

// ✅ 03 – Comparison (03_comparison)
// Basic Q1
// == aur === me difference clear example ke sath likho.
// Advanced Q2
// Kya output hoga? Kyun?
// console.log([] == 0);
// console.log([] === 0);
// console.log(" " == 0);
// console.log("0" == false);

// == aur === me difference clear example ke sath likho.

// == value check karta h
console.log(1 == 1); // true

// === value or data ka type bhi check karta h
console.log(3 === "3"); // false

console.log([] == 0); // true kiyunki [] me value nahi h to usi asumption ke hisaab se 0 samjh sakte h or side to 0 h hi
// console.log([] === 0); // false
console.log(" " == 0); // true
console.log("0" == false); // true

// ✅ 04 – Stack & Heap Memory (04_StackandHeapMemory)
// Basic Q1
// Stack me kya store hota hai aur Heap me kya store hota hai? JS ke example ke sath batao.
// Advanced Q2
// Ye code ka output explain karo:
// let a = {name: "dev"};
// let b = a;
// b.name = "changed";
// console.log(a.name);
// console.log(b.name);

// Stack me kya store hota hai aur Heap me kya store hota hai? JS ke example ke sath batao.

// stack me primitive data type store hote h like 'string , number , boolean , null , undefind' store hote h
// example

// 1. stack
const str = "i am str"; // ....
// ye sab p data type stack me store hote h

// Heap me non p d type store hote h like array , obj
// example

// 2. Heap
const obj = {
  name: "Aadil",
}; // ...

// Ye code ka output explain karo:
let a = { name: "dev" };
let bb = a;
b.name = "changed";
console.log(a.name); // changed
console.log(bb.name); // changed
// output changed both of objs because b to changed ho hoga kiyunki b ka name me changed assigned hua h
// or a changed isiliye aya ke a ko b ke barabar kar diya isiliye

// ✅ 05 – Strings (05_String)
// Basic Q1
// Template string kya hoti h? Ek example likho.
// Advanced Q2
// Ek function banao jo kisi string ka har first letter uppercase kare:
// "hello world" → "Hello World"

// Template string kya hoti h? Ek example likho.
// ye string ki method hoti h jo backtick me likhi jati h
const templateString = "dear watsup";
console.log(`Hello ${templateString}`);

// Ek function banao jo kisi string ka har first letter uppercase kare:
// "hello world" → "Hello World"

const string = () => {
  let str = "hello world";
  // for (let i = 0; i < string.length; i++) {

  // }
  console.log(str.toUpperCase());
};

string();

// ✅ 06 – Numbers & Maths (06_numAndmaths)
// Basic Q1
// Math.floor, Math.ceil, Math.round me difference example ke sath.
// Advanced Q2
// 1 se 6 ke beech random dice number generate karne ka perfect formula likho (with explanation).

// Math.floor, Math.ceil, Math.round me difference example ke sath.
// Math.floor value ko round karde ta h decimal remove karta h value me se
// example

const num = 29.0;
console.log(num);

// 1 se 6 ke beech random dice number generate karne ka perfect formula likho (with explanation).
console.log(Math.floor(Math.random() + 1) * 2); // 2

// ✅ 07 – Dates (07_dates)
// Basic Q1
// Current date & time ko “DD-MM-YYYY HH:mm” format me print karo.
// Advanced Q2
// Ek function banao jo calculate kare:
// aaj ki date − user ki birthday = total days lived

// Current date & time ko “DD-MM-YYYY HH:mm” format me print karo.
const date = new Date();
console.log(date.toLocaleString());

// Ek function banao jo calculate kare:
// aaj ki date − user ki birthday = total days lived
// ye nhi pata

// ✅ Arrays & Array Methods (Arrays\Array)
// Basic Q1
// map, filter, reduce ka basic difference example ke sath.
// Advanced Q2
// Ek array:
// const arr = [5, 1, 3, 2, 10];
// Task:
// isse ascending sort karo without using .sort() (custom logic)
// maximum value find karo
// sum find karo using reduce

// map, filter, reduce ka basic difference example ke sath.

// map ek HOF h jo har array ko transform krke ek new array return karta h
const user = [
  {
    name: "John Doe",
    field: "Data science",
  },

  {
    name: "John Doe",
    field: "Data science",
  },

  {
    name: "John Doe",
    field: "Data science",
  },
];

const userData = user.map((data) => console.log(data));

// filter bhi ek HOF h jo har iteration ko visit karke value return karta h use tab hota h jab multiple users ka data ho like 100users ka data ho or un users ke data ki need ho jinki age 10 se zyada ho like sirf data me se selected data ki need ho
const filterData = [
  {
    name: "John Doe",
    field: "Data science",
    age: 10,
  },

  {
    name: "John Doe",
    field: "Data science",
    age: 20,
  },

  {
    name: "John Doe",
    field: "Data science",
    age: 23,
  },
];

const selectedData = filterData.filter((item) => item.age > 10);
console.log(selectedData);

// reduce also HOF h jo value ko ko add karne ke liye use hota h
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current);
console.log(sum);

// Ek array:
// const arr = [5, 1, 3, 2, 10];
// Task:
// isse ascending sort karco without using .sort() (custom logic)
// maximum value find karo
// sum find karo using reduce

// isse ascending sort karco without using .sort() (custom logic)

const arr = [5, 1, 3, 2, 10];
const sortedArray = arr.sort((a, b) => a - b);
console.log(sortedArray);

// sum find karo using reduce
const arr1 = [5, 1, 3, 2, 10];
const sumOfAllElements = arr1.reduce((acc, current) => acc + current);
console.log(sumOfAllElements); // 21
