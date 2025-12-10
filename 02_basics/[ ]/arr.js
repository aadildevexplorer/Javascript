const jsUser = [
  {
    name: "User",
    email: "user@gmail.com",
    isLoggedin: false,
    location: "Indore",
    surname: "Doe",
    fullName: "John Doe",
    fields: ["Data Science", "Programmer"],
    college: "Renasaince University",
  },
];

console.log(jsUser.name); // is tarah se plan object get hota h // undefiend // array of object me se ye valye get karne ka galat tarika h object kiyunki jsUser ek array h object nhi isiliye indexing ke through get karna hoga
console.log(jsUser[0].name); // User rihgt way 
const arr = [1, 2, 3, 4];

// 🚀 1. push() – END me element add karta hai
arr.push(5);
console.log(arr);

// 🚀 2. pop() – END se element remove
arr.pop();
console.log(arr);

// 🚀 3. shift() – START me element remove karta h
arr.shift();
console.log(arr);

// 🚀 4. unshift() – START me element add
arr.unshift(0);
console.log(arr);

// 🚀 5. includes() – element exist karta hai ya nahi (true/false)
const inc = "hello world";
let result = inc.includes("hello");
console.log(result);

// 🚀 7. join() – Array ko String me convert karta hai
const arj = [1, 2, 3, 4, 5];
console.log(typeof arj);
console.log(typeof arj.join(" "));

// 🚀 8. find() – Pehla matching element return karta hai// ex -1
const fnd = [1, 2, 3, 4, 5];
const final = fnd.find((i) => i > 2);
console.log(final); // 3

// ex -2
const obj = [
  //   {
  //     id: crypto.randomUUID().slice(3, 30), // for minimum character
  //     id: crypto.randomUUID(),
  //     name: "Developer",
  //    },

  {
    id: 2,
    name: "Developer",
  },
  {
    id: 3,
    name: "Developer",
  },
  {
    id: 5,
    name: "Developer",
  },
];

const data = obj.find((i) => i.id === 2);
console.log(data);

// indexOf() - value ki index find karta h direct
// findIndex() - condition ke hisaab se first element ki indexing deta h

// 🚀 10. some() – agar ek bhi element match ho to TRUE
const sm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 25];
const finalAns = sm.some((e) => e > 10); // true
console.log(finalAns);

// 🚀 11. every() – sabhi elements match kare tabhi TRUE
const evr = [1, 2, 3, 4, 5];
const ans = evr.every((e) => e > 2); // false
console.log(ans);

// 🚀 9. findIndex() – ye start left side se Pehla matching index number or Array me first element dhoondta hai jo condition ko match kare, aur uska index return karta hai.
const indexNumberv = [1, 2, 3, 5];
const ind = indexNumberv.findIndex((n) => n > 4);
console.log(ind);

// 🚀 12. findLastIndex() – ye last right side se element ki indexing batata h for example '2' last se check karega to 4 ki indexing dega
const arrIn = [2, 3, 4];
const inx = arrIn.findLastIndex((i) => i > 2);
console.log(inx);

// 🚀 12. sort() – data ko sorting me arrange
const orderArray = [6, 4, 6, 3, 5, 3, 3, 3, 5];
const sortedArray = orderArray.sort((a, b) => b - a);
console.log(sortedArray);

// 🚀 13. reverse() – ULTA kar deta hai
const rvrs = [10, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(rvrs.reverse());

// 🚀 14. slice() – Array ka safe copy return (original change nahi hota)
const slc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(slc.slice(1, 5)); // 2, 3, 4, 5

// 🚀 15. concat() – Arrays ko merge
const cnct = "hello ".concat("world");
console.log(cnct);

// 🚀 16. flat() – Nested array ko normal kare
// for example ek main array h usme nested 5 array h to usko mujhe bola ke ise normalkaro to flat 5 hoga k
const flt = [1, [2, [3, [3, [4, [5]]]]]];
console.log(flt.flat(5));
