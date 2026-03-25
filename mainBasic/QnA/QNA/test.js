// 01_variable
// Q1. var, let, const me hoisting + scope ka real difference example ke sath samjhao.

console.log(a); // undefined // Hositing jab ham var ko decleare se pehle se access karte h to vo hosit ho jata h vahi hosting kehlata h
var a = 90;

console.log(b2); // Cannot access 'b' before initialization
let b2 = 90;

console.log(c); // Cannot access 'c' before initialization
const c = 90;

// scope ek accessible h jo code ke kisi bhi area me access ho jata h 3 tarah se
// 1. Global scope
let a = 30;
console.log(a);

// 2. function scope
function name() {
  console.log("I am func scope");
}

name();

// 3. Block scope
{
  var a = 90;
}
console.log(a); // accessible 90
// Q2. const object ko modify kar sakte hain ya nahi? Kyun?

const obj = {
  name: "John Doe",
};

obj.name = "Dummy user";
console.log(obj.name); // modify ho sakta h kiyunki object mutable hota h

// 02_dataTypes
// Q1. JavaScript me primitive vs non-primitive data types ka difference memory reference ke basis par samjhao.

// primitive Data type stack memory me store hote h jinki copy banti h
let a = 90;
let d = a;
d = 20;
console.log(a);
console.log(d);

// non-primitive Data type
const obj1 = {
  name: "user",
};
const obj2 = obj1;
obj2.name = "dummy user";

console.log(obj1.name);
console.log(obj2.name);
// Q2. typeof null === "object" kyun hota hai? Iska impact kya hai?
console.log(typeof null); // no idea

// 03_comparison
// Q1. == aur === ke beech difference explain karo with 2 tricky examples.
// == value check krta h or === value ke sath type bhi
console.log(30 == 30); // true
console.log(12 === "12"); // false

// Q2. Output predict karo:
console.log(null == undefined); // true
console.log(null === undefined); // true

// 04_StackandHeapMemory
// Q1. Stack aur Heap memory ka use kab hota hai JS me?
// Stack memory ka use js me primitive data type ko store karne ke liye hota

// Q2. Ye code explain karo (memory perspective se):
let ab = { x: 10 };
let b = ab;
b.x = 20;
console.log(ab.x);

// iska output 20 ayega ye code heap memory ka h isme refrence ke through data store hota h

// 05_String
// Q1. Strings immutable hoti hain — iska matlab kya hai? Example ke sath.
// str immutable ka matlab h str ko change nhi kar sakte h

const str = "Hello world";
str[0] = "o";
console.log(str);

// Q2. "hello".split("") aur "hello".split(" ") me difference kya hoga?
console.log("hello".split("")); // [ 'h', 'e', 'l', 'l', 'o' ]
console.log("hello".split(" ")); // [ 'hello' ]

// 06_numAndMaths
// Q1. NaN kya hota hai? isNaN() aur Number.isNaN() me difference?
// NaN => not a number ek invalid number h jo number valid hi nhi h

// Q2. Output batao:
console.log(0.1 + 0.2 === 0.3); // true

// ArraysArray
// Q1. map, filter, reduce ke use-case difference real example ke sath.
// map har array element ko transform kre ek new array return krta h
const user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const data = user.map((item) => item * 2);
console.log(data);

// filter selected data ko select krke deta h
const fltr = [1, 2, 3, 4, 5];
const selectedData = fltr.filter((item) => item % 2 === 0);
console.log(selectedData);

// reduce value ko add krne ka kaam krta h
const add = [1, 2, 3, 4, 5];
const addValue = add.reduce((a, b) => a + b, 0);
console.log(addValue);

// Q2. Ye code ka output kya hoga?
const arr = [1, 2, 3];
const res = arr.map((x) => {
  if (x === 2) return;
  return x * 2;
});
console.log(res); // [1,4,3]

// Destructure
// Q1. Object destructuring me default value kab useful hoti hai?
// destructuring me default value ka use jab hota h jab use value na mile
const obj = {
  name: "user",
  email: "user@gmail.com",
  password: 12345,
};
console.log(obj.name);
const { name, email, password } = obj;
console.log(name);
console.log(email);
console.log(password);

// Q2. Ye code samjhao:
const { a: x = 10 } = { a: undefined };
console.log(x); // 10

// Q1. JSON.stringify() aur JSON.parse() real-world me kab use karte hain?

// JSON.stringify() data ko obj se json me covert krta h
// JSON.parse() data ko vapas json se obj me convert krta h

// Q2. JSON me functions aur undefined kyun ignore ho jate hain? // no idea

// Object
// Q1. Object.keys(), Object.values(), Object.entries() ka difference aur use-case.
// Q2. for...in loop object ke sath use karte waqt kya risk hota hai? // no idea

const object = {
  name: "user",
  email: "user@gmail.com",
  password: 12345,
};
console.log(Object.entries(object)); // object ko array me convert kr deta h
console.log(Object.keys(object)); // key get krne ke liye
console.log(Object.values(object)); // value get krne ke liye

// Object_2
// Q2. Prototype kya hota hai JS me? Simple example se samjhao.
// prototype ek object ya data ki hidden property hoti h

// Q1. Object.freeze() aur Object.seal() me difference.
Object.freeze(); // se obj lock ho jata h after applied this method cannot change any thing in obj
const objF = {
  name: "user",
};

Object.freeze(objF);
objF.name = "dummy";
console.log(objF);

Object.seal(); // isse bhi obj lock hota h laikin isse sirf obj ki existing value change kr salte h
const objS = {
  name: "user",
};

Object.seal(objS);
objS.name = "dummuy user";
console.log(objS.name);

// function
// Q1. Function declaration aur function expression me hoisting ka difference.
// normal function me pehle function ko call kar sakte h
func();
function func() {
  console.log("hello world");
}

// expression me function variable me store hote h
// fun(); // Cannot access 'fun' before initialization
// let fun = function store() {
//   console.log("hello world");
// };

// Q2. Arrow function me this ka behavior normal function se alag kyun hota hai? // no idea

// scope
// Q1. Lexical scope kya hota hai? Closure se kaise related hai? // no idea
// Q2. Ye code explain karo:

function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
outer()(); // 10

// scope2
// Q1. Block scope aur function scope me practical difference kya hai?

// syntax ka diff h
// Block
{
  const a9 = 20;
  console.log(a9);
}

// function
function fName() {
  console.log(a);
}
fName();

// Q2. Output batao:
{
  var a2 = 10;
  let b = 20;
}
console.log(a2); // 10
console.log(b); // b is not defiend
