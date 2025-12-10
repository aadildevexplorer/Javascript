// Q: Add two numbers and print the result.
let ab = 4;
let bc = 4;
console.log(ab + bc);

// Q: Create a constant and try changing its value.
const value = 90;
// value = 80;
console.log(value);

// Q: Check data types using typeof.
let str = "Hello i am a string";
let num = 30;
let boolean = true;
let nll = null;
let und = undefined;
let arr = [1, 2, 3, 4, 5];
let obj = {
  name: "aadil",
  fields: [
    { fName: "IT", subject: "BCA" },
    { fName: "IT", subject: "BCA" },
  ],
};

console.log(typeof str);
console.log(typeof num);
console.log(typeof boolean);
console.log(typeof nll);
console.log(typeof und);
console.log(typeof arr);
console.log(typeof obj);

// Q: Add new key-value dynamically to object.
const object = {
  name: "Aadil",
};
object.age = 20;
console.log(object.age);

// Q: Check falsy values.
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(NaN);

// Q: "5" == 5 and "5" === 5 output.
console.log("5" == 5);
console.log("5" === 5);

// Q: Check number is positive, negative, or zero.
let inputValue = 5;
if (inputValue > 0) {
  console.log("positive");
} else if (inputValue < 0) {
  console.log("negative");
} else {
  console.log(0);
}

let z = 0;
console.log(z);

// Q: Copy primitive value and print both.
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

// Q: Assign object to another variable and modify property.
const obj1 = {
  name: "Aadil",
};
let obj2 = obj1;
obj2.name = "khan";
console.log(obj1.name);
console.log(obj2.name);

// Q: Copy array using spread operator.
const arr1 = [1, 3, 3, 4, 2, 3, 4, 3];
const arr2 = [1, 2, 3, 4];
const arrFinal = [...arr1, ...arr2];
console.log(arrFinal);

// Q: Print string length.
const string = "hello world";
console.log(string.length);

// Q: Print last 3 characters of a string.
const ch3 = "hello";
console.log(ch3.slice(-3));

// Q: Replace word inside sentence.
const sentence = "i am a programmer".replace("programmer", "Developer");
console.log(sentence);

// Q: Generate random number between 1–100.
console.log(Math.floor(Math.random() * 100) + 1);

// Q: Round decimal using toFixed(2).
const decimalNumber = 9.807;
console.log(decimalNumber.toFixed(2));

// Q: Generate random number (0–999).
console.log(Math.random() * 999);

// Q: Check if value is array or not.
const array = { name: "I am array" };
const ar = [1, 2, 3, 4, 5];
console.log(Array.isArray(array));
console.log(Array.isArray(ar));

// Q: Double array items using map.
const arrDoubled = [2, 4, 6, 8, 10];
const arrs = arrDoubled.map((item) => item * 2);
console.log(arrs);

// Q: Filter even numbers from array.
const evenNumber = [1, 2, 3, 4, 5, 6, 7, 8];
const even = evenNumber.filter((item) => item % 2 === 0);
console.log(even);

console.log(5 / "ljj");
console.log(typeof null);
console.log(typeof undefined);
<<<<<<< HEAD
console.log(typeof NaN);

// NaN ek invalid number h
// null or undefined equal hote h immutale also
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(NaN === NaN); // false because computer standard me ek rule h ke NaN is not equal to anything not even itself isiliye false

const nm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evn = nm.filter((num) => num % 2 === 0);
console.log(evn); // 2,4,6,8,10

const oddNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = nm.filter((num) => num % 2 !== 0);
console.log(odd); // 1,3,5,7,9

let c;
console.log(c); // undeifned Ye tab milta hai jab kisi variable ko declare to kiya ho, par value assign na ki ho.
console.log(typeof undefined);

let ac = null;
console.log(ac); // null Ye developer khud set karta hai jab wo bolta hai ki
// “iske andar abhi koi value nahi hai, but future me hogi”.

console.log(typeof null); // object

console.log("abc" / 4);
// NaN (Not a Number) is a special numeric value
// in JavaScript that represents the result of an invalid or undefined mathematical operation.

console.log(typeof NaN);

// Number rk keyword h kisi bhi value ko number me convert karne ke liye

const nu = Number(true); // 1
const numm = Number("str"); // NaN
console.log(numm);

console.log(undefined === undefined);
console.log(null === null);
console.log(NaN === NaN); // false

const av = "hello";
av[0] = 'a'
console.log(av);

console.log(x)
=======
console.log(typeof NaN)

// NaN ek invalid number h 
// null or undefined equal hote h immutale also
console.log(null === null) // true 
console.log(undefined === undefined) // true
console.log(NaN === NaN) // false because computer standard me ek rule h ke NaN is not equal to anything not even itself isiliye false
>>>>>>> 1b48c1dcf051a21625ceb805663089a9be467ec5
