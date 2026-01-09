// 1. switch–case hota kya hai?

// switch–case ek conditional control structure hai jo ek hi variable / expression ki multiple fixed values se comparison karta hai.

// 👉 Jab ek hi value ko baar-baar compare karna ho, tab switch–case if–else se zyada clean aur readable hota hai.

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const weak = 3;

switch (weak) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednasday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Default case is 0");
    break;
}

const month = "May";
switch (month) {
  case "Jan":
    console.log("Jan");

    break;

  case "Feb":
    console.log("Feb");

    break;

  case "March":
    console.log("March");

    break;

  case "April":
    console.log("April");

    break;

  case "May":
    console.log("May");

    break;

  default:
    break;
}
