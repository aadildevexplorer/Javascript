// const marvel_Heros = ["shaktiman", "pokemon"];
// const dc_Heros = ["doremon", "shinchan"];

// const all_Heros = [...marvel_Heros, ...dc_Heros];
// console.log(all_Heros);

// const array = [1, 2, 3, [2, 3, 4, (5)[(4, 5, 6)], [6, 4, 7, 4]]];
// console.log(array.flat(Infinity));
// console.log(Array.from("str"));

// const str = "hello world";
// console.log(str.indexOf("d"));

// Array.isArray Use: ye Check karta hai ki value array hai ya nahi.
console.log(Array.isArray("str")); // false
console.log(Array.isArray([1, 2, 3, 4, 5])); // true

// Array.from Use: Kisi bhi array-like ya iterable object ko real array me convert karta hai.
console.log(Array.from("dev")); // [ 'd', 'e', 'v' ]

// Array.of() Use: Di hui values se naya array create karta h.
console.log(Array.of(5));
