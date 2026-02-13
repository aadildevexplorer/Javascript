// Map ek Advanced object h jo data store krta h key value pairs me

// Map or Set javascript ke built in data structure h jo data ko store krte h
// Map key value me store krta h
// Set Collection of unique value

// 🔹 Map ki khas baat
// Object me key sirf string ya symbol hoti hai
// Map me key kuch bhi ho sakti hai (number, object, function, etc.)

// Map
const usersData = new Map();

usersData.set("name", "John Doe");
usersData.set("email", "john@gmail.com");
usersData.set("password", passGen(6));
usersData.set("ID", crypto.randomUUID().slice(1, 20));

const objData = {
  x: 1,
};

usersData.set(objData, "Object as a Key");

// for password generate
function passGen(num) {
  let otp = "";
  for (let i = 0; i < num; i++) {
    otp += Math.floor(Math.random() * 10);
  }

  return otp;
}

console.log(usersData.get("name"));
console.log(usersData.get("email"));
console.log(usersData.get("password"));
console.log(usersData.get("ID"));
console.log(usersData.get(objData));

// Set
const set = new Set();
set.add(1);

console.log(set);

const uniqueArr = [1, 1, 1, 2, 3, 4, 5, 6, 6];
console.log(...new Set(uniqueArr));
console.log(new Set(uniqueArr));

// 1.
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(...new Set(fruits));

// 2.
const numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(...new Set(numbers));

// 3.
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const interSection = new Set([...setA].filter((value) => setB.has(value)));
console.log(interSection);
