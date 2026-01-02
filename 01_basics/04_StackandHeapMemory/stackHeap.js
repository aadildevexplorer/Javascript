// stack memory => stack memory fixed size data ko store karti h like primitive data types string...etc ye immutable hote h
let ab = 10;
let ba = ab;
ba = 90;
console.log(ab); // 10
console.log(ba); // 90

// Heap memory => refrence ke thorugh data store karti h non primitive data type ko object ye mutable h

const obj1 = {
  name: "Dev",
};

const obj2 = obj1;
obj2.name = "Aadil";

console.log(obj1.name);
console.log(obj2.name);

let xx = 5;
let yy = xx;
yy = 10;

console.log(xx); // 5
console.log(yy); // 10

let aa = 10;
let bb = aa;

bb = bb + 5;
console.log(aa); // 10
console.log(bb); // 15

const obj11 = {
  city: "Mumbai",
};

const obj22 = obj11;

obj22.city = "Delhi";
console.log(obj11); // d
console.log(obj22); // d

let x = "hello";
let y = x;
y = "world";

console.log(x); // hello
console.log(y); // world

// Reason:
// String ek primitive type hai (store hota hai stack memory me).
// y = x likhne par ek copy banti hai.
// To jab y change hua, x unaffected raha.
// 👉 Stack me copy by value hota hai.

const arr11 = [1, 2, 3];
const arr22 = arr11;

arr22.push(4);

console.log(arr11); // [1,2,3,4]
console.log(arr22); // [1,2,3,4]

// Reason:
// Arrays non-primitive type hain (store hote hain heap memory me).
// arr1 aur arr2 dono ek hi heap reference ko point karte hain.
// Isliye ek me change → dono me reflect.

let num = 100;
let user = { name: "Dev" };

function changeValues(a, b) {
  a = 200;
  b.name = "Aadil";
}

changeValues(num, user);

console.log(num); //
console.log(user.name);

let name = "Dev";
let profile = { city: "Delhi" };

let newName = name;
let newProfile = profile;

newName = "Aadil";
newProfile.city = "Mumbai";

console.log(name);
console.log(profile.city);
// stack memory => stack memory fixed size data ko store karti h like primitive data types string...etc ye immutable hote h
// let a = 10;
// let b = a;
// b = 90;
// console.log(a); // 10
// console.log(b); // 90

// Heap memory => refrence ke thorugh data store karti h non primitive data type ko object ye mutable h

// const obj1 = {
//   name: "Dev",
// };

// const obj2 = obj1;
// obj2.name = "Aadil";

// console.log(obj1.name);
// console.log(obj2.name);

// // let x = 5;
// // let y = x;
// // y = 10;

// // console.log(x); // 5
// // console.log(y); // 10

// let a = 10;
// let b = a;

// b = b + 5;
// console.log(a); // 10
// console.log(b); // 15

// const obj1 = {
//   city: "Mumbai",
// };

// const obj2 = obj1;

// obj2.city = "Delhi";
// console.log(obj1); // d
// console.log(obj2); // d

// let x = "hello";
// let y = x;
// y = "world";

// console.log(x); // hello
// console.log(y); // world

// // Reason:
// // String ek primitive type hai (store hota hai stack memory me).
// // y = x likhne par ek copy banti hai.
// // To jab y change hua, x unaffected raha.
// // 👉 Stack me copy by value hota hai.

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2.push(4);

// console.log(arr1); // [1,2,3,4]
// console.log(arr2); // [1,2,3,4]

// // Reason:
// // Arrays non-primitive type hain (store hote hain heap memory me).
// // arr1 aur arr2 dono ek hi heap reference ko point karte hain.
// // Isliye ek me change → dono me reflect.

// let num = 100;
// let user = { name: "Dev" };

// function changeValues(a, b) {
//   a = 200;
//   b.name = "Aadil";
// }

// changeValues(num, user);

// console.log(num); //
// console.log(user.name);

// let name = "Dev";
// let profile = { city: "Delhi" };

// let newName = name;
// let newProfile = profile;

// newName = "Aadil";
// newProfile.city = "Mumbai";

// console.log(name);
// console.log(profile.city);

let a = 5;
let b = a;
b = 10;
console.log(a, b); // 5 , 10

let user1 = { name: "Dev" };
let user2 = user1;
user2.name = "Aadil";
Object.freeze({
  user2,
});
console.log(user1.name); // aadil

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]

function greet() {
  console.log("Hello world");
}

greet();
greet();
greet();
greet();
greet();
greet();
greet();
greet();
greet();

// var data = 90;
// data();

const data = [
  {
    name: "sd",

    values: [
      {
        name: "ef",
      },
    ],
  },
];

data[0].values = [...data[0].values, ...data[0].values, ...data[0].values];
console.log(data);
// console.log(JSON.stringify(data, null, 2));
// const save = localStorage.setItem("data", data);

data[0].values = [...data[0].values, ...data[0].values, ...data[0].values];
console.log(data);
// console.log(JSON.stringify(data, null, 2));
// const save = localStorage.setItem("data", data);
