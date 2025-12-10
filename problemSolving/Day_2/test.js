// ✅ 01 – Variables (01_variable)
// Basic Q1
// let aur const me reassignment ka difference example ke sath explain karo.

// let a = 10;
// a = 20;
// console.log(a); // 20 accessible
// // let se access ho jayega reassignment

// const b = 20;
// b = 10;
// console.log(b); // TypeError: Assignment to constant variable.
// // const se nhi hoga kiyunki const constant h vo change nhi hota

// Basic Q2
// Hoisting ka simple sa example do jisme var ka behavior dikh jaye.

// console.log(hoist); // undefined
// var hoist = "I am hoist";
// hoisting ka concept asa rehta h ke declearation se pehle access karna to vo hoist ho jayega or clg me undefined dega ok

// Advanced Q3
// Ek function banao jisme:
// pehle let variable ko loop ke andar update karo
// phir function ke bahar usi naam ka let variable declare kiya ho
// dono ke outputs explain karna hai — scope handling ke hisaab se.

function scopeHandler() {
  for (let i = 0; i < i.length; i++) {
    let a = 20;
    console.log(a);
  }
}

scopeHandler();

// let a = 10;
// console.log(a);

// Basic Q1
// Mutable vs Immutable ko real life JS example ke sath samjhao. (string vs array/object)

// Immutable
const str = "Hey Developers can you see me";
str[0] = "Hii";
console.log(str);
// isme mene str ki 0 indexing ka content change ker diya laikin vo change nhi hua kiyunki vo immutable h

// Mutable
// 1 array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr[5] = {
  name: "changed",
};

console.log(arr);

// 2 object
const obj1 = {
  name: "Ali",
};

const obj2 = obj1;
obj2.name = "Ahmed";

console.log(obj1.name);
console.log(obj2.name);

// Basic Q2
// typeof null "object" kyun hota hai? actually now no idea but definetely after this i will explore all about why null typeOf is object

// Advanced Q3
// Ek function banao jo check kare —
// given value primitive hai ya non-primitive
// → bina Array.isArray() use kiye.

function checkPrimitiveOrNonPrimtiveValue() {
  let value = "Sameer";

  if (value === "string") {
    console.log("Value is Primitive");
  }

  if (value === Number) {
    console.log("Value is Primitive");
  }

  if (value === Boolean) {
    console.log("Value is Primitive");
  }

  if (value === null) {
    console.log("Value is Primitive");
  }

  if (value === undefined) {
    console.log("Value is Primitive");
  }

  if (value === Array) {
    console.log("Value is Non-Primitive");
  }

  if (value === Object) {
    console.log("Value is Non-Primitive");
  }
}

checkPrimitiveOrNonPrimtiveValue();

// ✅ 03 – Comparison (03_comparison)
// Basic Q1
// NaN == NaN → false kyun?
// Interview-level explanation.

// isiliye kiyunki NaN ek special numeric value or js ke rule ke hisaab se vo false h kiyunki vo invalid value h to agar NaN  hi invalid h to vo true kese hogi

// Basic Q2
// "5" > 3 ka output kya hoga? Kyun? (Type coercion explain karo).

console.log("5" > 3); // true kiyunki 5 bada h 3 se type 5 ka str h or 3 ka number

// Advanced Q3
// Ye 5 line ka output explain karo:
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null > 0); // false
console.log("5" - 1); // 4
console.log("5" + 1); // 1

// ✅ 04 – Stack & Heap Memory (04_StackAndHeapMemory)
// Basic Q1
// Primitive ke pass-by-value ka small example likho.

let a = 10;
let b = a; // yaha a ki value copy hui malab sirf  10 aya
// or  refrence matlab pura variable ya to pura ka pura obj

b = 20;

console.log(a); // 10 a per koi effect nhi hua kiyunki a ki copy bani
console.log(b); // 20
// Basic Q2
// Object ke pass-by-reference ko cloning ke example se samjhao.

// let obj3 = {
//   name: "user",
// };

// let obj4 = { ...obj3 };
// obj4.name = "dummy";

// console.log(obj3.name);
// console.log(obj4.name);


const obj3 = {
  name: "user",
};

const obj4 = obj3; // Yaha reference copy ho raha hai matlab pura object hi
obj4.name = "user2";

console.log(obj3.name);  // user2
console.log(obj4.name);  // user2