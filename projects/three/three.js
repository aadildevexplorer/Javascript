// setInterval() setInterval() JavaScript ka ek timer function hai jo kisi
// function ko bar-bar repeat karta hai ek fixed time interval ke baad.

// const clock = document.getElementById("clock");
// const savedTime = localStorage.getItem("clock");
// if (savedTime) {
//   clock.innerHTML = savedTime;
// }

// setInterval(function () {
//   const time = new Date().toLocaleTimeString();
//   clock.innerHTML = time;
//   localStorage.setItem("clock", time);
// }, 1000);

// function time(){

//   setInterval(() => {

//     console.log('Run after 1 second')

//   },1000)

// }

// time()

// const user = {
//   id: 1,
//   name: "Aadil",
//   age: 23,
//   email: "aadil@example.com",
//   role: "Developer"
// };

// const {id , name , email ,role} = user

// console.log(role)

const users = [
  {
    id: 1,
    name: "Aadil",
    age: 23,
    email: "aadil@example.com",
    role: "Developer"
  },
  {
    id: 2,
    name: "Rahul",
    age: 25,
    email: "rahul@example.com",
    role: "Designer"
  },
  {
    id: 3,
    name: "Arman",
    age: 22,
    email: "arman@example.com",
    role: "Developer"
  },
  {
    id: 4,
    name: "Sahil",
    age: 27,
    email: "sahil@example.com",
    role: "Manager"
  },
  {
    id: 5,
    name: "Zaid",
    age: 24,
    email: "zaid@example.com",
    role: "Tester"
  }
];

console.log(users[4].role)