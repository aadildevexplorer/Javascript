// Object - Object is a fundamental data type that is used to collection of key value pairs{}
// 1 Types of objects - There are 4 types of objects

// (1) Object Literal {}
const literalObj = {
  name: "user",
};

console.log(literalObj.name);

// (2) new Object()
const newObj = new Object();
newObj.name = "Dev";
newObj.email = "email@gmail.com";

console.log(newObj);

// (3) Constructor Function
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Dev", 23);
console.log(u1);

// (4) Class se object
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const u2 = new User2("Dev", 23);
console.log(u2);

// Nested object
const nestedObj = {
  primaray: {
    state: {
      MP: {
        city: "Indore",
      },
    },
  },
};

console.log(nestedObj.primaray.state.MP.city); // Indore

// ⭐ 5. OBJECT METHODS (Compulsory)
// 1. Object.keys()
// Object ke saare keys (property names) array ke form me deta hai.
const user = {
  name: "Dev",
  age: 19,
};

console.log(user);

console.log(Object.keys(user));

// 2. Object.values()
// ye bhi array ke form me hi deta h
const value = {
  name: "Dev",
  email: "user@gmail.com",
};

console.log(Object.values(value));

// 3. Object.entries()
// ye key value pairs ko array me convert karta h
console.log(Object.entries(user));

// 4. Object.freeze() ye object ko lock kardeti h
const obj2 = {
  name: "aadil",
};

console.log(obj2);

// Object.freeze(obj2);
obj2.age = 30;
console.log(obj2);

// 5. Object.seal() ye object ko seal kr deta h maltlab ke obj ko band kar deta h usme additinally value add nahi kar sakte or delete bhi nhi laikin existing value change kr sakte h
const slObj = {
  name: "Dev",
  age: 20,
};

// Object.seal(slObj);

slObj.address = "juna risala";
delete slObj.age;
slObj.name = "aadil";
console.log(slObj);

// 6. Object.assign {} multiple objects ko merge krna ya copy banana
const a = { x: 1 };
const b = { y: 2 };

const c = Object.assign({}, a, b);
console.log(c);
