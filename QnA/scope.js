// // 1. JavaScript me scope ke kitne types hote hain? Har ek ko example ke saath explain karo.
// // there 3 types global , block and function scope

// // global scope
// const global = "I am a global scope";
// console.log(global);

// // block scope
// {
//   const a = "Block scope";
//   console.log(a);
// }

// // function scope
// function scope() {
//   console.log("I am a function scope");
// }

// scope();

// // 2. Var, let, const ka scope kya hota hai? Inme difference likho.
// // var ka function level h or let and const ka block level or var or let and const me scope ka diff h
// // or var se reassigns or redeclear kar sakte h or  let se sirf reassings or redecleard nahi
// // kar sakte h or const se dono nhi kr sakte h

// // Block scope kya hota hai? Function scope se kaise different hai?
// // block scope karly braces me likhata h {}
// // function scope me pura function create hota h
// // or dono ka syntax ka diff h

// // 3. Global variable banana kyu risky mana jata hai?
// // kiyunki variable name overwrite ho sakta h

// // OUTPUT Qns
// // var a = 10;
// // if (true) {
// //   var a = 20;
// // }
// // console.log(a); // 20

// // let a = 10;
// if (true) {
//   let a = 20;
// }
// console.log(a); // 10

// function test() {
//   var x = 10;
// }
// // console.log(x); // x is not defined

// function outer() {
//   let a = 5;
//   function inner() {
//     console.log(a);
//   }
// }
// // error ayega inner is not defined
// // inner();
// outer();

// console.log(a); // undefined
// var a = 10;

// // console.log(b); //
// // let b = 20;

// for (var i = 0; i < 3; i++) {}
// console.log(i); // 3

// function a() {
//   let x = 1;
//   {
//     let x = 2;
//     console.log(x);
//   }
//   console.log(x);
// }
// a(); // a is not a function kese araha h

// {
//   var c = 10;
// }
// console.log(c);
var a = 90;
var a = 30;

console.log(a);
