// IIFE
// IIFE (Immediately Invoked Function Expression) JavaScript ka ek pattern hai
// jisme function define hote hi turant execute ho jata hai.

// with function
(function name() {
  console.log("IIFE executed");
})();

// with arrow function
(() => {
  console.log("IIFE with arrow function");
})();

// What is an IIFE in JavaScript?
// IIFE is a function in js that is defined immediatly executed after it is created

// Why do we use IIFE instead of a normal function?
// How does an IIFE help in avoiding global scope pollution?
// Write the syntax of an IIFE using an arrow function.

(() => {
  console.log("I am arrow func using IIFE");
})();
// Why is the use of IIFE less common in modern JavaScript development?
// global scope ko pollute hone se bachana
// data privacy / Encapsulation

(() => {
  console.log("I am IIFE");
})();
