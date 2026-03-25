// scope
// scope is defines the accessibility , variables , visibility , functions and objects in a particular part of your code.

// Global scope
const a = 20;
console.log(a);

// function scope
function fns() {
  const post = "Programmer";
  const fields = "Information Technology";
  console.log(
    `hello my name is Aadil khan , my post is ${post} and my fields is ${fields}`
  );
}

fns();

// Block scope
{
  const a = 30;
  var b = 90;
  let c = 80;
}

console.log(a); // ReferenceError: a is not defined
console.log(b); // 90
console.log(c); // ReferenceError: a is not defined
