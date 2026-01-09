// Ek number diya gaya hai. Check karo ki number positive hai, negative hai ya zero.

let num = -5;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("0");
}

// Ek student ke marks diye gaye hain. Decide karo ki student pass hai ya fail.
// (Pass marks = 40)

let marks = 40;

if (marks >= 40) {
  console.log("londa pass h");
} else if (marks < 30) {
  console.log("londa boundary per pass hua h");
} else if (marks < 30) {
  console.log("londa fail ho chuka h");
} else {
  console.log("ATKT");
}

// Do numbers diye gaye hain. Batao kaunsa number bada hai ya dono equal hain.

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log("num1 is big");
} else if (num2 > num1) {
  console.log("num2 is a big number");
}

// 2
// Ek year diya gaya hai. Check karo ki leap year hai ya nahi.

let leapYear = 2020;

if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
  console.log("Leap year h");
} else {
  console.log("Leap year nhi h");
}

// Ek age di hui hai. Decide karo ki person minor hai, adult hai ya senior citizen.

let age = 85;
if (age < 18) {
  console.log("Person is Minor");
} else if (age < 59) {
  console.log("Person is Adult");
} else if (age > 59) {
  console.log("Person is Senior Citizen");
} else {
  console.log("Person is in Complete");
}

// Switch case

const month = 3;

switch (month) {
  case 1:
    console.log("jan");
    break;

  case 2:
    console.log("Feb");
    break;

  case 3:
    console.log("March");
    break;

  case 4:
    console.log("April");
    break;

  default:
    break;
}
