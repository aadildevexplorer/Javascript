// this is a keyword in JavaScript that refers to the object that is currently executing the function.
// The value of this is determined at runtime based on how the function is called.

// Simple words me:
// this current object ko refer karta hai — jo function ko call karta hai.

// 1️⃣ Object ka data access / update karne ke liye
const obj = {
  name: "John Doe",
  welcomeUser: function () {
    console.log(`my name is ${this.name}`);
  },
};

obj.welcomeUser();

// 2️⃣ Function ke andar object ki property set karne ke liye
const user = {
  name: "",
  show(name) {
    this.name = name;
    console.log(name);
  },
};

user.show("AaDIL");

// 3️⃣ Constructor function / class me object banate time
function User(name) {
  this.name = name;
}

const u1 = new User("AadIL");
console.log(u1);

// object with function using this keyword
const obj1 = {
  name: "User23",
  welcome: function () {
    console.log(`username is ${this.name}`);
  },
};

obj1.welcome();

// object with function in arrow function using this keyword
const obj3 = {
  name: "data",
  welcomeUsers: function () {
    const getUsers = () => {
      console.log(`hey users ${this.name}`);
    };
    getUsers();
  },
};

obj3.welcomeUsers();
