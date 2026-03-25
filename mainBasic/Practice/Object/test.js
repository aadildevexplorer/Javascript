// object is a fundamental data type that is used to collection of data in key value pairs

// OBJECT syntax
const obj = {
  name: "John Doe",
};
console.log(obj);

// OBJECT Types
// 1. object literals()
const objLtrls = {
  name: "Dev",
  email: "user@gmail.com",
};

console.log(objLtrls);

// 2. new Object()
const newObj = new Object();

newObj.name = "dev";
newObj.age = 12;
console.log(newObj);

// 3. constructor object()
function cObj(name, age) {
  this.name = name;
  this.age = age;
}

const user = new cObj("constructor", 100);
console.log(user);

// 4. class Object()
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const u3 = new User("ok", "ok@gmail.com");
console.log(u3);

// OBJECT Methods

const userData = {
  id: "USR_987654321",
  name: {
    first: "Aadil",
    last: "Khan",
    fullName() {
      return `${this.first} ${this.last}`;
    },
  },
  account: {
    email: "aadil@example.com",
    isVerified: true,
    roles: ["user", "seller"],
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: {
          marketing: false,
          updates: true,
        },
      },
    },
  },
  orders: [
    {
      orderId: "ORD_001",
      date: "2025-12-01",
      amount: 499,
      items: [{ productId: "P100", name: "Earphones", qty: 1, price: 499 }],
      shipping: {
        address: {
          house: "12A",
          street: "Park Avenue",
          city: "Indore",
          pin: 452001,
        },
        status: "Delivered",
      },
    },
    {
      orderId: "ORD_002",
      date: "2025-11-28",
      amount: 1299,
      items: [{ productId: "P200", name: "Keyboard", qty: 1, price: 1299 }],
      shipping: {
        address: {
          house: "12A",
          street: "Park Avenue",
          city: "Indore",
          pin: 452001,
        },
        status: "Shipped",
      },
    },
  ],
  wallet: {
    balance: 250,
    transactions: [
      { id: "TX100", type: "credit", amount: 500, date: "2025-11-20" },
      { id: "TX101", type: "debit", amount: 250, date: "2025-11-22" },
    ],
  },
  activityLog: {
    lastLogin: "2025-11-30 14:23",
    device: {
      os: "Windows",
      browser: "Chrome",
      ip: "192.168.1.100",
    },
  },
};

// const userDataDeepFreeze = Object.freeze(JSON.parse(JSON.stringify(userData))) // is code ka matlab h ke pehle json.stringify() run karegi usme user ka data string me convert hoga fr parse run hogi usmi data string se object me convert hoga
// const userDataDeepFreeze = Object.freeze(JSON.parse(JSON.stringify(userData))); // ye jab use hota h jab nested objects ho or deepfreeze ke liye
// userDataDeepFreeze.activityLog.device.android = "1.53.6.3";
// console.log(userData);

const userFreezeData = Object.freeze(JSON.parse(JSON.stringify(userData)));
userFreezeData.activityLog.device.android = "1.25.2.6";
console.log(userData);
// const Data = Object.keys(userData);
// const Data = Object.values(userData);
// const Data = Object.entries(userData);
// const Data = Object.freeze(userData);
