const usersData = new Map();

usersData.set("name", "John Doe");
usersData.set("email", "john@gmail.com");
usersData.set("password", passGen(6));
usersData.set("ID", crypto.randomUUID().slice(1, 20));

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

// nahi hota h
func();
const func = function name() {
  console.log("Programmer");
};

// nahi hota h
const arrow = () => {
  console.log("Hellow I am arrow function");
};
arrow();

// access ho jata h
name1();
function name1() {
  console.log("Programmer 1");
}
