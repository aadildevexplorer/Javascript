const userEmail = "JohnDoe@gmail.com";

if (userEmail) {
  console.log("Email got it");
} else {
  console.log("Don't have an email");
}

// falsy value
// false ,  0 , -0 , BigInt , 0n , '', null , undefined , NaN

// truthy
// '0' 'false' " ", [] , {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const objEmpty = {
  name: "aadil",
};
if (Object.keys(objEmpty).length === 0) {
  console.log("0");
} else {
  console.log("123");
}

// Nulish coalescing operator (??): null undefined

// Terniary operator
// condition ? true : false
const teaPrice = 10;
teaPrice >= 20 ? console.log("affordable") : console.log("Expensive");

// console.log(teaPrice);
