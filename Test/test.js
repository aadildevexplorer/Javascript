// console.log(a); // undefined
// var a = 10;

let x = [1, 2, 3];
let y = x;
y.push(4);

console.log(x); //  [1, 2, 3, 4]
console.log(y); //  [1, 2, 3, 4]

console.log(2 + "2" - 1); // 12
console.log(typeof null); // number

// const a = { value: 10 };
// const b = { value: 10 };

// console.log(a === b); // true

// Hoisting ka simple explain do with example.
// hoisting ek default behaviuor of js function h jo declearation se pehle access kiya jata h or vo hoist ho jata h
// for example

console.log(hoist);
var hoist = 0;

// Primitive and Reference type me difference real example ke sath batao.
// pr vo data type hote h jo stack memory me store hote h by value store hote jinki copy bnti h str , num , bool , null , undefined
// ex

console.log("Hello world");

// non pr vo data type h jo heap memeory me store hote h reffrence ke through obj , array , func
// ex

console.log([1, 2, 3, 4, 5]);

// Event loop kya karta hai? Microtask queue kis order me chalti hai? no idea

// Closure kya hota hai? Real-life example ke sath explain karo.
// Closure ek func hota h jo inner function ka accesible scope rakhta h
// ex

function outer() {
  const a = "Outer func";
  function inner() {
    console.log(a);
  }

  inner();
}

outer();

// var, let, aur const me 3 key differences batao.
// sabhi keyword h variable decleare krne ke liye use hote h
// var ek unpredictable behaviour h jo scope ke bahar bhi access ho sakta h jisse problem ye hogi ke overwrite hosakta h or var se reassign and redecleare dono ke sakte h jisse porblem ho sakti h overwrite ki
// let se sirf reaasing kar sakte h redecleare nhi
// const se reaasing redecleare dono allowed nhi h

// Ek function banao jo array ka max number return kare:

const maxNum = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const result1 = maxNum([1, 2, 3, 4, 5]);
console.log(result1);

// Ek function banao jo string ko reverse kare:
const strr = (str) => {
  let rvrs = str.split("").reverse().join("");
  return rvrs;
};

const result = strr("Hello");
console.log(result);

// Array me se unique values return karo: no idea

// const arr = [(user = "aadil")];

// const [user] = arr;

// console.log(user);

const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a);

const numbers = [1, 2, 3];
const [first, third] = numbers;
console.log(first);

const arrOfobj = [{ name: "aadl" }];
const [{ name }] = arrOfobj;
console.log(name);

const obj = {
  people: "90,000",
};

const { people } = obj;
console.log(people);

let xx;
console.log(xx);

const findMaximumNum = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const results = findMaximumNum([1, 2, 3, 4, 5]);
console.log(results);

var e = 90;
function test() {
  var c = 80;
  console.log(c);
}

test();

function name2() {
  console.log(e);
}

name2();
function add(x, y) {
  let sum = x + y;
  return sum;
}
console.log(add(8, 4));

test1();
const test1 = () => {
  console.log("Hello Dear");
};
