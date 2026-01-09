// const obj = {
//   name: "Aadil",
// };
// console.log(obj);

// obj.name = "Hamza";
// console.log(obj.name);

// function js() {
//   console.log("ok");
// }

// js();

// console.log(js);
// var js = 1;

// const arr = [8, 4, 3, 2, 6, 7, 5, 10, 9, 1];
// const sortedArray = arr.sort((a, b) => a - b);
// console.log(sortedArray);

// const arre = [1, 2, 34, 5, 5];
// console.log(typeof arre);

// const arrOfObject = [
//   {
//     name: "aadil",
//   },
// ];

// console.log(arrOfObject.name);

// console.log(1 < 2 < 3); // true because see this down line
// true < 3; // true
// 1 < 3; // true
// // true
// console.log(3 > 2 > 1); // false because see this down line
// 3 > 2; // true
// true > 1; // true
// 1 > 1; // false

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
const Data = {
  Name: "Aadil Khan",
  Age: 22,
  Email: "aadil@example.com",
  City: "Mumbai",
  Role: "Frontend Developer",
};
// Name: "Aadil Khan",
// Age: 22,
// Email: "aadil@example.com",
// City: "Mumbai",
// Role: "Frontend Developer",

// console.log(Data);
// const data = JSON.parse(Data);
// console.log(data);

// let a = 20;
// let b = a;

// b = 10;

// console.log(a); // 20 // Kyuki a kabhi change hi nahi hua kiyunki a ki copy bani a original b ke equal nahi hua
// console.log(b);

let a = 3;
let b = a++;

console.log(a); // 4
console.log(b); // 3

// Postfix rule:
// Pehle current value return hoti hai
// Phir baad me increment hota hai
// Iska matlab:
// b ko value milti hai a ki old value → 3
// Fir a increment hota hai:
// a = 3 + 1 = 4

// console.log(`a:${a} , b:${b}`);

// stack memory
let x = 10;
let y = x;

y = 90;
console.log(x);
console.log(y);

// heap memory
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;
arr2[0] = 2;

console.log(arr1);
console.log(arr2);

// immutable
const str = "Hello world";
str[0] = "h";
console.log(str);

// mutable
const obj = {
  name: "Programmer",
};
console.log(obj.name);
obj.name = "Developer";
console.log(obj.name);

console.log([1, 2] + [3, 4]);
console.log([1, 2, 3]);
function add(a, b) {
  return a + b;
}

// console.log(add(50, 24));

const arr = [1, 2, 3, 4, 5];
// const result = arr.find((item) => item === 3);

const result = arr.find((item) => {
  if (item === 3) {
    return true;
  } else {
    return false;
  }
});

console.log(result);

let obj1 = {
  name: "User1",
};

obj1.adress = "juna risala";
Object.seal(obj1);

// obj1.name = "User2";
console.log(obj1);

// console.log(Object.entries(obj1));

console.log(new Date().toLocaleDateString('en-IN'));
console.log(Date.now());
