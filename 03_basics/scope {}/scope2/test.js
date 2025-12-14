// example - 1
function one() {
  const a = "one Function";
  function two() {
    console.log(`I am ${a}`);
  }

  two();
}

one();

// example - 2
if (true) {
  const field = "Programmer";
  if (field === "Programmer") {
    console.log("I am a develeper");
  } else {
    console.log("I am a Enginner");
  }
}

// mini hoisting
console.log(a);
var a = 30;

var a;
console.log(a);
a = 90;

// undefiend
// A variable exists in memory but no value has been assigned to it yet.
let a;
console.log(a); // undefined

// not defined
// The variable does not exist at all in the current scope.
console.log(x); // ❌ ReferenceError: x is not defined
