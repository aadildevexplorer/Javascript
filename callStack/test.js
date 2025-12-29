// The call stack is a LIFO data structure that keeps track of function execution in
// JavaScript and manages execution contexts during code execution.

function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("Hello Bro");
}

one();

var a = 10;

function demo(x) {
  var b = 20;
  console.log(x + b);
}

demo(5);
