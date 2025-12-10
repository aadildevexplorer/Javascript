// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 !== 2)
// console.log(2 !> 2)

// 👉 JavaScript automatically string ko number me convert kar deta hai when comparing with numbers.

// console.log('2' > 1)
// console.log('02' > 1)

// == (Loose equality - compares values after type conversion)
// === (Strict equality - compares values without type conversion)
// != (Loose inequality)
// !== (Strict inequality)
// > (Greater than)
// < (Less than)
// >= (Greater than or equal to)
// <= (Less than or equal to)

console.log(2 === "2");

// let age = 16;
// let text = "You can Not drive";

// if (age >= 18) {
//   text = "You can drive";
// }

// console.log(text)

// let age = 16;
// let country = "USA";
// let text = "You can Not drive!";

// if (country == "USA" && age >= 16) {
//   text = "You can drive!";
// }

// console.log(text);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// if (arr.length === 9) {
//   console.log("yes");
// } else {
//   console.log("no");

// }

let age = 20;
let state = "MP";
let text = "I Can Drive the car";

if (state === "MP" && age >= 20) {
  console.log(text);
} else {
  console.log("I cannot drive tha car");
}

