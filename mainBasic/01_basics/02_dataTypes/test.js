let name = "aadil";
let age = 30;
let boolean = true;

// PRIMITIVE DATA TYPES

// 1. number => 3 to power 20
// 2. string => ""
// 3. boolean =? true/false
// 4. null => standalone value like mt ''
// 5. undefiend => that not define but create a variable
// 6. bigInteger
// 7. object => that can be anything

console.log(typeof undefined); // undefiend
console.log(typeof null); // object

// 8. array => []
// 9. symbol => unique

const a = Symbol("uushu");
const b = Symbol("uushu");

console.log(a === b); // false Symbol() ka kaam hota hai unique identifier banana.
// Symbol always unique hota hai, isiliye comparison hamesha false hota hai (unless same symbol reference ho).
