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
  {},
];

jsUser[1].part = "data"; // bahar se key add karna object me
console.log(jsUser);


jsUser.email = "user2@gmail.com";
Object.freeze(jsUser); // is method ke baad jsUser me koi changes nahi hoga kiyunki freeze kr diya h

jsUser.email = "user3@gmail.com";
console.log(jsUser[0].name);
