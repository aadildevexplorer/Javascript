// Arrow function is a concise way to write functions in
// JavaScript using the => syntax, with lexical binding of this.

// 👉 Arrow function JavaScript me function likhne ka ek short aur modern tareeka hai

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "hiteshjjjj";
  console.log(this);
};

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({ username: "hitesh" });

// myArray.forEach()

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));
const myArray = [2, 5, 3, 7, 8];
console.log(myArray[0]);
