// this keyword
const obj = {
  name: "User",
  heyUser: function () {
    console.log(this.name);
  },
};

obj.heyUser();

console.log(name);
const obj1 = {
  name: "User",
  setName(name) {
    this.name = name;
  },
};

obj1.setName();
