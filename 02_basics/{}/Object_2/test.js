const tinderObj = {};
tinderObj.name = "Dev";
tinderObj.age = 20;
tinderObj.id = crypto.randomUUID();
tinderObj.email = "user@gmail.com";

console.log(tinderObj);

// Object.assign()
const x = { a: 3 };
const y = { b: 3 };

const c = { ...x, ...y };
console.log(c);
// const c = Object.assign({}, x, y);
// console.log(c);

const user = [
  { name: "aadil0", id: 0 },
  { name: "aadil1", id: 1 },
  { name: "aadil2", id: 2 },
];
console.log(user[1]);
console.log(Object.keys(tinderObj));
console.log(Object.values(tinderObj));
console.log(Object.entries(tinderObj));

console.log(tinderObj.hasOwnProperty("name")); // value exist karta hai ya nahi (true/false)

const jsUser = [
  {
    name: "User",
    email: "user@gmail.com",
    isLoggedin: false,
    location: "Indore",
    surname: "Doe",
    fullName: "John Doe",
    fields: ["Data Science", "Programmer"],
    college: "Renasaince University",
  },
];

console.log(jsUser[0].name); // for array or array of object
console.log(jsUser.name); // for object
