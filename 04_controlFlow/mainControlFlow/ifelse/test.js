// if–else is a conditional control statement used to execute different blocks of code
// based on whether a given condition evaluates to true or false.

if (2 == "3") {
  console.log("true");
} else {
  console.log("false");
}

console.log(2 !== 3); // true

const temperature = 30;
if (temperature == 40) {
  console.log("temperature is less than 30");
} else {
  console.log("temperature is greater than 30");
}

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`User Power : ${power}`);
} else {
  console.log("score is not more");
}

// console.log(`User Power : ${power}`);

const balance = 1000;
if (balance > 200) console.log("true");

if (balance < 500) {
  console.log("balance is less than 500");
} else if (balance < 750) {
  console.log("balance is less than 750");
} else console.log("less than 1200");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInnFromEmail = false;

if (loggedInFromGoogle || loggedInnFromEmail) {
  console.log("User logged in");
}

if (userLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

{
  var a = 123;
}

console.log(a);
