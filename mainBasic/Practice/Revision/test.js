// | Keyword   | Reassign | Re-declare | Scope    | Use-case                                                                                    |
// | **var**   | Yes      | Yes        | Function | Old code, avoid                                                                             |
// | **let**   | Yes      | No         | Block    | Normal variables                                                                            |
// | **const** | No       | No         | Block    | Fixed values, arrays/objects bhi change kar sakte ho (value nahi reference change hota hai) |

// variables

// a = 34;
// let a = 234;
// let a = 234;
// const a = 234;

// console.log(a);

// console.log(a);
// let a = "aadil";

// const a = 90;
// // const a = 30; // re-declear
// // a = 30; // reassign
// console.log(a);

// var b = 20;
// var b = 10;
// console.log(b);

// let x = "user";
// x = 90;
// console.log(x);

// Data types
// console.log("hello world"); // string
// console.log(34); // number
// console.log(true); // boolean
// console.log(null); // null
// console.log(undefined); // undefind

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);

// const obj = {
//   name: "aadil",
// };

// console.log(obj);

const str = "mohammad Aadil".indexOf("m");
console.log(str);

// conversion
// let name = "user";
// let value = Number(name);
// console.log(name);
// console.log(typeof value);

const num = 30;
let vnum = String(num);
console.log(typeof vnum);

// operators
// 1. comparison
// console.log(0 > 0);
// console.log(0 == 0);
// console.log(0 === 0)
// console.log(0 < 0)
// console.log(2 >= 0);
// console.log(2 <= 0);
// console.log(2 != 2);
// console.log(2 !== 1);

// 2. logical
const name = "aadil";
const age = 20;

// if (age == 20 && name == "aadil") {
//   console.log("I am eligible");
// } else {
//   console.log("Not eligible");
// }

// if (age == 20 || name == "aadil") {
//   console.log("I am eligible");
// } else {
//   console.log("Not eligible");
// }

if (!(age == 10 || !name == "Hamza")) {
  console.log("I am eligible");
} else {
  console.log("Not eligible");
}

// to convert string to number
const st = "string";
console.log(typeof st);
const nm = Number(st);
console.log(typeof nm);

let a = 3;
let b = ++a;

console.log(`a:${a} , b:${b}`);

console.log(2 * "2"); // 4 because ye multiplication ho raha h
console.log(2 ** 2); // 4 because ye square ho raha h
console.log(2 / "2");

const splt = "hello".split("");
console.log(splt);
