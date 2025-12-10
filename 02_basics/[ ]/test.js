// console.log(arr);

// console.log(arr["0"]);
// console.log(arr[0]);

// const myArray = new Array("1", "2", "3", "4", "5", "6");
// console.log(myArray);

// const years = [1, 2, 3, 4, 5];
// console.log(years["2"] !== years["2"]);
// true because strict not equal to ka matlab h type or value dono same nahi hona

// arr.push(6); // element add karta h
// arr.pop(); // last element remove kar ta h
// arr.shift(); // pehle element remove kar ta h
// arr.unshift(3); // pehla element add karta h

// console.log(arr);

// console.log(arr.includes(9)); // false
// console.log(arr.indexOf(1));

// const str = "i am str".indexOf("i");
// console.log(str);

const newArr = [1, 2, 3, 4, 5];
// const myArr = newArr.join("-"); // 👉 Custom separator 1-2-3-4-5
const myArr = newArr.join(" | "); // sadabhar 1 | 2 | 3 | 4 | 5
// const myArr = newArr.join(); // 👉 Default join
// console.log(myArr);

// const num = 90;
// console.log(typeof num);
// const cStr = num.toString();

// console.log(typeof cStr);
// console.log(cStr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [7, 6, 5, 5, 67, 4, 6];

// const finalArray = [...arr1, ...arr1];
// console.log(finalArray);

// Array methods

// 1. find() method first matching element return karta h
const data = [
  {
    age: 20,
  },

  {
    age: 30,
  },

  {
    age: 40,
  },

  {
    age: 50,
  },
];

const user = data.find((u) => u.age > 20);
console.log(user); // 30

// 2. findIndex() element due
// const element = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const index = element.findIndex((num) => num === 9);
// console.log(index);

// 2 example
const indx = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const i = indx.findIndex((n) => n > 9);
console.log(i);

// 3. some() ek bhi match mila to TRUE
// const sm = [1, 20, 30, 40, 50];
// const result = sm.some((s) => s > 2); // true
// console.log(result);

// 4. every() sabhi match karne ke liye
const ever = [3, 4, 5];
const result = ever.every((e) => e > 2);
console.log(result);

// 5. indexOf()
const a = ["aadil"];
console.log(a[0].indexOf("i")); // 3

// 6. sort() elements ko order wise arrange krta h
const st = [7, 4, 7, 4, 6, 3, 2, 6, 4];
// const rslt = st.sort((a, b) => a - b);
const rslt = st.sort((a, b) => b - a);
console.log(rslt);

// 7. reverse() element reverse karta h
const reverse = [5, 4, 3, 2, 1];
console.log(reverse.reverse());

// 8. slice()
const age = [10, 20, 30, 40, 50];
const part = age.slice(0, 4); // 10 , 20 , 30 , 40
console.log(part);

// 9. concat()
const c = "hel".concat("lo");
console.log(c);

// 10. flat() nested array ko normal array banata h
const array = [1, [2, [3]]];
console.log(array.flat(1));

// 11. at()
const At = [1, 2, 3, 4, 5];
console.log(At.lastIndexOf(1));
