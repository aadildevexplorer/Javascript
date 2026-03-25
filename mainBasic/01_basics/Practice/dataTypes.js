// primitive data types ye immutable hote h
// String
const str = "Hamza";
console.log(str); //

// Number
let num = 35;
console.log(num); // 35

// Boolean
let isLoggedIn = false; // false
console.log(isLoggedIn);

// Null
const a = null;
console.log(a);

//Undefined
let b;
console.log(b); // undefiend

// Symbol
const id1 = Symbol("ID");
const id2 = Symbol("ID");
console.log(id1 === id2); // false : because symbol ek unique identifier h jo har baar naya unique value banata hai.

// // Big integer - BigInt ek special number type hai
// // big integer badi value ko handle karne ke liye use hota h
// const big = 45678909876543456789876540;
// console.log(big);

// Symbol - Use Case
const secret = Symbol("password");

const user = {
  name: "Dev",
  [secret]: "12345",
};

for (let key in user) {
  console.log(key, ":", user[key]);
}

// Big integer - BigInt ek special number type hai
// big integer badi value ko handle karne ke liye use hota h
let big = 9007199254740991n + 10n;
console.log(big);
