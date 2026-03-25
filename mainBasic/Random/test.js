var a = 10;

function test() {
  console.log(a);
  var a = 20;
  console.log(a);
}

test();
console.log(a);

let value = 10;

function changeValue(val) {
  val = "Hello";
  console.log("Inside function:", val);
}

changeValue(value);
console.log("Outside function:", value);

var x = 5;
function demo() {
  console.log(x); // undefined
  x = 15;
  console.log(x); // 15
  var x = 25;
}

demo();
console.log(x); // 5

// Ek JavaScript program likho jo:

// Ek number input le

// Check kare:

// agar number positive ho → "Positive"

// agar number negative ho → "Negative"

// agar number zero ho → "Zero"

let numInput = 10;

if (numInput > 0) {
  console.log("Number is positive");
} else if (numInput < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}
