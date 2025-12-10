// function is a block of reusable code designed to perform a specific task.
// Functions allow for code organization, modularity, and reusability, making
// code easier to manage and maintain.

// add to numbers
function addTwoNumber(a, b) {
  return a + b;
}

const result = addTwoNumber(4, 4);
console.log("Result:", result);

function loginUserMessage() {
  let isLoggedIn = true;
  if (isLoggedIn === true) {
    console.log("I am Accessible for app");
  } else {
    console.log("Error");
  }
}

loginUserMessage();
function loginUser(userName = "Aadil") {
  if (userName === undefined) {
    console.log("Please enter a username");
  }
  return `${userName} jussed logged in`;
}

console.log(loginUser("Programmer"));
