// 📌 What is a String in JavaScript?
// A string in JavaScript is a data type used to store text.
// Any value written inside quotes is considered a string.

// example
console.log("hello");

// String methods
// 1. length  →  String me total characters count batata hai
let lnt = "hello";
console.log(lnt.length); // 5

// 2. charAt() →  Given index par kaunsa character h wo return karta hai
let str = "hello".charAt(1); // kis indexing per kosna chahracter h
console.log(str); // e

// 3. indexOf() →  String me character/word ka first position (index) return karta h
let pos = "hello".indexOf("h"); // konsa character kis indexing per h like
console.log(pos); // 0

// 4. slice() →  String ka selected part (cut) karke new string return karta h
let slc = "hello".slice(1, 5);
console.log(slc); // ello

// 5. substring() →  slice jaisa hi hota h but negative index support nahi karta
let sub = "hello".substring(1, 5);
console.log(sub); // ello

// 6. toUpperCase() →  Pure string ko uppercase me convert karta h
let upp = "hello".toUpperCase();
console.log(upp); // HELLO

// 7. toLowerCase() →  Pure string ko lowercase me convert karta h
let low = "HELLO".toLowerCase();
console.log(low); // hello

// 8. trim() →  String ke start & end ke extra spaces remove karta h
let trm = "   TRIM     ".trim();
console.log(trm); // TRIM

// 9. trimStart() age ki space hatane ke liye
"  hello".trimStart();

// 10. concat() →  2 ya zyada strings ko join (merge) karta h
let cnct = "Hii".concat(" Dev");
console.log(cnct);

// 11. replace() →  Sirf first match ko replace karta h
const rp = "i am a developer".replace(
  "i am a developer",
  "i am a software developer"
);
console.log(rp); // i am a software developer

// 12. replaceAll() →  String me jitni baar match mile sab ko replace karta h
const rpl = "replace".replaceAll("a", "z");
console.log(rpl); // replzce    →  saare 'a' ko 'z' se replace kiya

// 13. split() →  String ko array me convert karta h (delimiter ke basis par)
const splt = "h,el,l,o".split(",");
console.log(splt); // ["ok", "ko", "ok"]

// 14. startsWith() →  Ye check karta hai string kis se start ho rahi hai.
// startsWith method sirf string per run karti h array per isiliye [0] inexing use kiya h
const domainName = ["dev@gmail.com", "john@yahoo.com", "rahul@company.com"];
if (domainName[0].startsWith("dev")) {
  console.log("this domain valid for this fild");
} else {
  console.log("Not valid");
}

// 15. endWith() → Ye check karta hai string kis par end ho rahi hai.
const softwareDevelopmentFileds = ["frontend", "backend", "DevOps", "UI UX"];
if (softwareDevelopmentFileds[0].endsWith("X")) {
  console.log("this domain valid for this fild");
} else {
  console.log("Not valid");
}

// 16. includes() → Ye check karta hai string ke andar koi word/character exist karta hai ya nahi.
let msg = "win pizza";
console.log(msg.includes("pizza")); // true
console.log(msg.includes("burger")); // false

// 17. repeat() → string ko multiple times repeat ke liye
const rpt = " ha ";
console.log(rpt.repeat(3));
console.log("-".repeat(90));

// 18 trimEnd() →  Sirf starting ya ending spaces remove karta h
"hello      ".trimEnd();

// 19 toString() value ko sting me convert karne ke liye
let num = 90;
console.log(num.toString());

// 20 Template litrals
const literals = "Aadil";
const value = "20";
console.log(`i am a ${literals} and age is ${value}`);

// 21 Date()
const date = new Date();
console.log(date.toLocaleString("en-US"));

// const data = ["clothes", "users", "email@gmail.com"];
// if (data[1].startsWith("use")) {
//   console.log("i am able for this");
// } else {
//   console.log("i am not able to this");
// }

const st = "hello world from me".split(" ");
console.log(st);
