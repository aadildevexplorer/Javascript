// var ko isiliye use nhi karte h kiyunki vo unpredictable
// behaviour h vo scope ke bahar bhi access ho jata h

// Tum ek chhote block ke andar value declare karo
// Fir bhi pura program usko access kar sakta hai
// Galti se overwrite ho sakta hai
// Bug create karta hai
// Ye unsafe behavior hai. Isliye let/const use karte hain.

// 1. Global scope
const global = "I am a gobal scope";
console.log(global);

// 2. Block scope
{
  let a = 20;
  const b = 30;
  var c = 20;
}

// var c = 300; overwrite ho gaye value
console.log(c);

// 3. function scope
function scope() {
  console.log("func scope");
}

scope();
