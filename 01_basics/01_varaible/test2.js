// var a = 10; // function level
// let b = 20; // block level
// const c = 30; // block level or contant

// a = "changed";
// console.log(a);
// c = 20; // Assignment to constant variable.
// console.log(c)
// b = 30; // allowed
// console.log(b)

// scope
//1. 🧠 Matlab: {} ke andar declare kiya hua var bhi bahar se access ho sakta hai → unpredictable behavior.
// {
//     var a = 2
//     let b = 3
//     const c = 9
// }

//2. also hoisting problem define krne ke pehle access karenge to undefined return kardega

//3. Redecleration bhi hojata h jo ki risky hota h like

// var a = 2;
// var a = 4;
// console.log(a);

// console.log(a)
// console.log(b) // ReferenceError
// console.log(c) // ReferenceError

// // Hoisted
// var a = 34
// console.log(a) // undefined

let a = 32;
console.log(typeof a.toString());

console.log(a);

const arr = new Array();
(arr[0] = "aadil"), (arr[1] = 90), (arr[2] = true);
console.log(arr);
