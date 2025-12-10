// console.log(a); // undefiend
// var a = 24;

// console.log(ab) // cannot access before initilization
// let ab = 50

// const bc = 90
// console.log(bc) // cannot access before initilization

// Global scope
const gScope = "i am a gScope";
console.log(gScope);

// Block scope
{
  const cName = "123";
  var vName = "543";
  let lName = "456";
}

// Function scope
function greet() {
  const a = 90;
  console.log(a);
}
greet();

console.log(cName); // not defined
console.log(vName); // accesible but risky
console.log(lName); // not defined
console.log(lName); // not defined
