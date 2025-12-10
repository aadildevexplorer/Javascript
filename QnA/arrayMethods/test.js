// 1. Tumhe array ke end me 60 add karna hai.
// Kaunsa method use karoge?

const arr = [10, 20, 30, 40, 50];
arr.push(60);
console.log(arr); // [ 10, 20, 30, 40, 50, 60 ]

// 2. Ek array hai:
// Isme check karo ke "mango" exist karta hai ya nahi.
const exist = ["apple", "mango", "banana"];
console.log(exist.includes("mango")); // true

// 3. Ek number array hai:
// Tumhe index pata karna hai jaha 8 mila.
const num = [2, 4, 6, 8, 10];
const ind = num.findIndex((i) => i === 8);
console.log(ind); // 3

// Tumhare paas array hai:
// Isme pehli value find karo jo 10 se badi ho.
const value = [1, 5, 9, 15, 20];
const finalValue = value.find((v) => v > 10);
console.log(finalValue); // 15

// Ek array of objects:
// Isme se id 2 wala object find karo.

const obj = [
  { id: 1, name: "Aadil" },
  { id: 2, name: "Sameer" },
  { id: 3, name: "Arif" },
];

const ID = obj.find((i) => i.id === 2);
console.log(ID); // { id: 2, name: 'Sameer' }

// Ek array hai:
// Check karo ke kya isme koi value 20 se zyada hai
// (Agar ek bhi ho to TRUE).

const maxValue = [5, 10, 15, 20, 25];
const max = maxValue.some((m) => m > 20);
console.log(max); // true

// Ek array hai:
// Check karo kya sabhi values 2 se bade hai.
const allValue = [3, 6, 9];
const vlu = allValue.every((e) => e > 2);
console.log(vlu); // true

// Ek string:
// Check karo ke "Dev" kaha se start hota hai (index find karo).
const str = "Hello Developer";
const DevInd = str.indexOf("Dev");
console.log(DevInd); // 6

// Array:
// Isko ulta kar do.
const rvrs = [5, 4, 3, 2, 1];
console.log(rvrs.reverse()); // [ 1, 2, 3, 4, 5 ]

// Ek array:
// Isko normal array bana do
// (Maan lo tumhe 3 level flatten karna hai).
const flt = [1, [2, [3, [4]]]];
console.log(flt.flat(3)); // [ 1, 2, 3, 4 ]

// Array:
// Isko ascending order me arrange karo.
const asc = [10, 3, 40, 5, 1];
const sortedArray = asc.sort((a, b) => a - b);
console.log(sortedArray); // [ 1, 3, 5, 10, 40 ]

// Ek array:
// Isme se index 1 se 3 tak ka part nikalna hai,
// original array change nahi hona chahiye.
const ar = [1, 2, 3, 4, 5];
console.log(ar.slice(1, 4)); // [ 2, 3, 4 ]

// Array.isArray Use: ye Check karta hai ki value array hai ya nahi.
console.log(Array.isArray("str")); // false
console.log(Array.isArray([1, 2, 3, 4, 5])); // true

// Array.from Use: Kisi bhi array-like ya iterable object ko real array me convert karta hai.
console.log(Array.from("dev")); // [ 'd', 'e', 'v' ]

// Array.of() Use: Di hui values se naya array create karta h.
console.log(Array.of(5));

console.log(Array.from("dev"));
