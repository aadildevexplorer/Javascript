// In JavaScript, async and await are keywords used to handle asynchronous
// operations (like fetching data or reading files) in a way that looks and
// behaves like synchronous, step-by-step code. They are "syntactic sugar" built on
// top of Promises, making code cleaner and easier to read than traditional
// promise chaining with .then().

// "Async/await internally Promises ke through asynchronous operations ko handle karta hai."

// Synchronous progeamming jisme code line by line execute hota h
// console.log("start");

// function test() {
//   for (let i = 1; i < 2; i++) {
//     console.log(i);
//   }
//   console.log("done");
// }

// test();
// console.log("end");

// asynchronous programming jisme code background me run hota h or next line immediate run hoti h without wait
console.log("start");

function test() {
  setTimeout(() => {
    for (let i = 1; i < 2; i++) {
      console.log(i);
    }
  }, 2000);
  console.log("done");
}

test();
console.log("end");

// console.log(2 !== 3);

