// Important rule (yaad rakhna)

// this local variables ko access nahi karta
// this sirf object ki properties ko access karta hai

// 🔹 Normal function me this
const User = {
  name: "Aadil",
  email: "user@gmail.com",

  userMessage: function () {
    console.log(`my name is ${this.name} , and my email ${this.email}`);
  },
};

User.userMessage();

// 🔹 Arrow function me this
const user2 = {
  name: "Aadil",
  sayHello: () => {
    console.log(this.name);
  },
};

user2.sayHello();

// arrow function me this keyword use kr sakte h laikin direct arrow function me use nahi hota
// asa use kar te Arrow function ko agar kisi normal function ke andar likho,
// to wo us normal function ka this use kar lega.**

// ❌ Galat case (direct arrow function)
const arrow = {
  name: "user",
  arrFunc: () => {
    console.log(` my name is ${this.name}`);
  },
};

arrow.arrFunc();

// ✅ Sahi case (function ke andar arrow)
const user = {
  name: "Aadil",
  sayName: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};

user.sayName(); // Aadil

function data() {
  let a = 90;
  console.log(` value is ${this.a}`);
}

data(); // value is undefined
// ❓ Kyun?
// a ek local variable hai (let a = 90)
// this.a ka matlab hota hai current object ka a
// Yahan function object ke andar nahi hai
// Isliye this ko koi a mila hi nahi

const func = {
  a: "dev",
  name: function () {
    console.log(` value is ${this.a}`);
  },
};

func.name(); // ye sahi tarika h

// this ko asa arrow func me use karte h
const arrFunc = {
  name: "aadil",
  user: function () {
    const arr = () => {
      console.log(`my name is ${this.name}`);
    };
    arr();
  },
};

arrFunc.user();
