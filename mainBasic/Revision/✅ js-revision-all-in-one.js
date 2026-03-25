/**********************************************************
 🔥 JAVASCRIPT MASTER REVISION – ALL IN ONE FILE 🔥
 Read-only revision file (no need to run)
**********************************************************/

/* =======================
 1️⃣ VARIABLES
======================= */
// Variable = data store karne ka container
let name = "Developer"; // change ho sakta hai
const age = 22; // change nahi hota
var oldWay = "avoid"; // function scoped (avoid)

/* Use: data store karna */

/* =======================
 2️⃣ DATA TYPES
======================= */
// Primitive
let str = "JS";
let num = 10;
let bool = true;
let undef;
let nul = null;
let sym = Symbol("id");
let big = 123n;

// Non-Primitive
let obj = { name: "Dev" };
let arr = [1, 2, 3];
let func = function () {};

/* Use: data ki type define karta hai */

/* =======================
 3️⃣ COMPARISON
======================= */
5 == "5"; // true (value check)
5 === "5"; // false (type + value)
null == undefined; // true
null === undefined; // false

/* Use: conditions check */

/* =======================
 4️⃣ STACK vs HEAP MEMORY
======================= */
// Stack → primitive (copy)
let a = 10;
let b = a;
b = 20;

// Heap → non-primitive (reference)
let user1 = { name: "A" };
let user2 = user1;
user2.name = "B";

/* Use: memory behavior samjhna */

/* =======================
 5️⃣ STRING
======================= */
let msg = "JavaScript";
msg.length;
msg.toUpperCase();
msg.includes("Java");

/* Use: text manipulation */

/* =======================
 6️⃣ NUMBER & MATH
======================= */
Math.round(4.6);
Math.floor(4.9);
Math.random();

/* Use: calculations */

/* =======================
 7️⃣ DATE
======================= */
let date = new Date();
date.getFullYear();

/* Use: time/date handling */

/* =======================
 8️⃣ ARRAY
======================= */
let arr1 = [1, 2, 3];
arr1.push(4);
arr1.map((n) => n * 2);

/* Use: list of data */

/* =======================
 9️⃣ OBJECT
======================= */
let user = {
  name: "Dev",
  age: 22,
};

/* Use: structured data */

/* =======================
 🔟 DESTRUCTURING
======================= */
const { name: userName } = user;
const [x, y] = [10, 20];

/* Use: easy access */

/* =======================
 1️⃣1️⃣ JSON
======================= */
JSON.stringify(user);
JSON.parse('{"name":"Dev"}');

/* Use: data transfer */

/* =======================
 1️⃣2️⃣ FUNCTION
======================= */
function greet() {
  return "Hello";
}

/* Use: reusable logic */

/* =======================
 1️⃣3️⃣ IIFE
======================= */
(function () {
  console.log("IIFE");
})();

/* Use: scope isolate */

/* =======================
 1️⃣4️⃣ SCOPE
======================= */
let globalVar = "global";

function test() {
  let localVar = "local";
}

/* Use: variable accessibility */

/* =======================
 1️⃣5️⃣ CONTROL FLOW
======================= */
if (age > 18) {
}
for (let i = 0; i < 5; i++) {}

/* Use: decision making */

/* =======================
 1️⃣6️⃣ CALL STACK
======================= */
// JS executes function one by one (LIFO)

/* Use: execution order */

/* =======================
 1️⃣7️⃣ CONSTRUCTOR
======================= */
function Person(name) {
  this.name = name;
}
const p1 = new Person("Dev");

/* Use: object creation */

/* =======================
 1️⃣8️⃣ DYNAMIC TYPING
======================= */
let d = 10;
d = "ten";

/* Use: flexibility */

/* =======================
 1️⃣9️⃣ EVAL (Avoid)
======================= */
// eval("2 + 2");

/* Use: avoid security risk */

/* =======================
 2️⃣0️⃣ GEOLOCATION API
======================= */
// navigator.geolocation.getCurrentPosition();

/* Use: user location */

/* =======================
 2️⃣1️⃣ LOCAL vs GLOBAL
======================= */
// global → everywhere
// local → function/block only

/* =======================
 2️⃣2️⃣ LOCAL STORAGE
======================= */
localStorage.setItem("user", "Dev");
localStorage.getItem("user");

/* Use: browser storage */

/* =======================
 2️⃣3️⃣ OTP GENERATOR
======================= */
Math.floor(100000 + Math.random() * 900000);

/* Use: verification */

/* =======================
 2️⃣4️⃣ SET TIMEOUT
======================= */
setTimeout(() => {
  console.log("Delayed");
}, 1000);

/* Use: async delay */

/* =======================
 2️⃣5️⃣ ARROW FUNCTION
======================= */
const add = (a, b) => a + b;

/* Use: short syntax */

/* =======================
 2️⃣6️⃣ THIS KEYWORD
======================= */
const objThis = {
  name: "Dev",
  getName() {
    return this.name;
  },
};

/* Use: current object */

/* =======================
 2️⃣7️⃣ PROBLEM SOLVING
======================= */
// Think → Logic → Code → Optimize

/* =======================
 2️⃣8️⃣ PRACTICE RULE
======================= */
// Read → Understand → Dry run → Apply

/**********************************************************
 ✅ END OF REVISION FILE
**********************************************************/
