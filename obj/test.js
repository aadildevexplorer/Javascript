class obj {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new obj("Dev", 30);
console.log(u1);

function obj1(name, email) {
  this.name = name;
  this.email = email;
}

const u2 = new obj1("aadil", "user@gmail.com");
console.log(u2);

(function user() {
  console.log("hello world");
})();

(() => {
  console.log("eef");
})();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const result = new User("ali", 90);
console.log(result);

console.log(null == []);
