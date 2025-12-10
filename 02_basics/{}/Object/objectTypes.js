// 1
// literal object
const obj = {
  name: "user",
};

obj.email = "user@gmail.com";
obj.price = 299;
console.log(obj);
// 2
// constructor function through this keyword constructor func ke through object
// constructor - The constructor method is a special method of a
// class for creating and initializing an object instance of that class.
// function User(name, email, age, price, category, subject, fields) {
//   this.name = name;
//   this.email = email;
//   this.age = age;
//   this.price = price;
//   this.category = category;
//   this.category = subject;
//   this.fields = fields;
// }

// const u1 = new User("user", "user@gmail.com", 90, 999, "vegan", "BBA", "IT");
// console.log(u1);
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Dev", 20);
console.log(u1);

// 3
// new Object()
const ob = new Object();
ob.name = "user";
ob.age = 32;

console.log(ob);

// 4 class se object
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const u3 = new User2("ok", 40);
console.log(u3);

// this ke bare me
// “Ye jo current object ban raha ya run ho raha hai, main usi ko point kar raha hoon.”
function ts(name) {
  this.name = name; // matlab new Object me name naam ki property add kardo
}

const u8 = new ts("dev");
console.log(u8);
