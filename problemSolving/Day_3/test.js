// ✅ 📁 01_basics
// 🟢 Easy (2)
// 1. JS me variable declare karne ke 3 tareeke kaunse hain? Short example likho.

// const a = 90;
// let b = 10;
// var c = 30;

// Primitive vs Reference type ka ek simple example de ke difference batao.
// Primitive
// const str = "hello world";
// console.log(str);

// Reference
// const obj = {
//   name: "Dev",
// };

// console.log(obj);

// 🔥 Advance (2)
// 1. Ek code explain karo jisme hoisting ke wajah se unexpected result aaye.

console.log(a);
var a = "a"; // undefined ye output aya h jise unexpected keh sakte h kiyunki hoisiting ke concrpt me declaration se pehle clg krte h

// == aur === kab kab dangerous ho sakte hain? Real JS examples ke sath explain karo. // ye q hi samjh nhi aya abe danger kese ho sakte h

// ✅ 📁 01_variable
// 🟢 Easy
// 1. var, let, const me scope difference example ke sath explain karo.

// var function level h or let and const block level or dono me scope ka differnene h

// const me variable reassign kyun nahi hota?
// kiyunki const ek constant keyword h

// 🔥 Advance
// Ek loop ka example dua jisme var aur let ka output alag aaye.
// Temporal Dead Zone kya hoti hai? Example ke sath explain karo.
// no idea

// 🟢 Easy
// typeof null "object" kyun return karta hai?
// NaN kya hota hai aur kab aata hai?

console.log(typeof null); // object kiyunki null ki value empty rehti h

// 🔥 Advance
// Object.freeze() aur Object.seal() me farak examples ke sath.
// Primitive vs Non-Primitive memory behavior explain karo with stack/heap diagram style explanation.

// Object.freeze() aur Object.seal() me farak examples ke sath.
const obj = {
  name: "Dev",
};

// Object.freeze() isse obj lock ho jata h isme ham freeze ke baad kuch bhi changes nhi kar sakte h
Object.freeze(obj);
obj.email = "user@gmail.com";
console.log(obj);

// Object.seal() isse bhi lock hota h laikin diff ye h ke seal se sirf ham existing value change kr sakte h bas
Object.seal(obj);
obj.userName = "John Doe";
obj.name = "Developer";
console.log(obj);

// Primitive vs Non-Primitive memory behavior explain karo with stack/heap diagram style explanation.

// stack memory hoti h jo primitive data type ko ek fixed size data store karta h jisme data ki copy banti h

// let a = 10;
// let b = a;

// b = 30;
// console.log(a); // 10
// console.log(b); // 30

// heap memory Non-Primitive ko store karta h refference ke through

const hObj1 = {
  name: "Dev",
};

const hObj2 = hObj1;
hObj2.name = "Programmer";

console.log(hObj1.name);
console.log(hObj2.name);

// Easy
// "5" == 5 aur "5" === 5 ka output kya hoga?
// true == 1 kyun true aata hai?

// console.log("5" == 5); // true
// console.log("5" === 5); // false
// console.log(true == 1); // true kiyunki true ka matlab 1 hota h or false ka mean 0 to true h like 1 == 1 so // true

// 🔥 Advance
// Output find karo:
console.log(null == undefined); // true
console.log(null >= 0); // true
console.log([] == ![]); // true
console.log("10" > "2"); // true

// Ek string me total characters count karo (spaces included).
const str = "I am a programmer";
console.log(str.length); // 17