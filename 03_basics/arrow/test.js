// this is a keyword in JavaScript that refers to the object that is currently executing the function.
// The value of this is determined at runtime based on how the function is called.

// Simple words me:
// this current object ko refer karta hai — jo function ko call karta hai.

const User = {
  username: "Aadil",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to the website`); // with this accessible
    // console.log(`${username} , welcome to the website`); // without this cannot access , because username object ka property hai, variable nahi
    console.log(this);
  },
};

User.username = "John Doe";
User.welcomeMessage();

console.log(this);

const obj = {
  name: "aadil",
  email: "user@gmail.com",

  welcome: function () {
    console.log(`${this.name}`);
    console.log(this);
  },
};
obj.welcome();
console.log(this);

function chai() {
  let username = "John Doe";
  console.log(this.username); // undefined because this object ko refer krta h
}

chai();

const chai = function () {
  let username = "John Doe";
  console.log(this.username);
};
chai();

const chai = () => {
  let username = "John Doe";
  console.log(username);
};
chai();

// PURE ARROW FUNCTION
// Explicit return matlab jab return keyword use krte h
const addTow1 = (num1, num2) => {
  return num1 + num2;
};
console.log(addTow1(2, 7));

// Implicit return matlab jab without {} karly braces ke use krna
const addTow = (num1, num2) => num1 + num2;
console.log(addTow(2, 7));
