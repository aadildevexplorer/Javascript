// console.log(0.1 + 0.2 === 0.3);
// console.log(NaN === NaN);
// console.log("" + "");
// console.log([] + []);

// console.log(3 / "a");
// async function getDataFromApi() {
//   try {
//     const response = await fetch(
//       "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=90",
//     );
//     const data = await response.json();
//     console.log("Data get from api", data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getDataFromApi();

// (() => {
//   console.log("Hello world");
// })();

// const obj = {
//   name: "aadil",
//   welcomeUser: function () {
//     console.log(this.name);
//   },
// };

// obj.welcomeUser();

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// const date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// console.log(Date.now());

// const arr1 = ["asha", "salma", "rani"];
// const arr2 = ["yellow", "red", "black"];
// arr1.forEach((text, index) => multiBtn(text, arr2[index]));
// function multiBtn(text, bgColor) {
//   const button = document.createElement("button");
//   button.style.backgroundColor = `${bgColor}`;
//   button.style.color = "white";
//   button.style.border = "none";
//   button.style.padding = "10px";
//   button.style.margin = "3px";
//   button.textContent = `${text}`;
//   button.style.cursor = "pointer";
//   style.innerHTML = `
//   .dynamic-btn {
//     background: blue;
//     color: white;
//   }
//   .dynamic-btn:hover {
//     background: red;
//   }
// `;
//   document.body.appendChild(button);
//   console.log(button);
// }

// const arr = '1ep'
// console.log(arr.includes(0))

const User = new Object()

User.name = 'aadil'
User.age = 30


// console.log(Object.keys(User)) // keys
// console.log(Object.values(User)) // values
// Object.seal(User) // 
// Object.freeze(User) // block
Object.assign
// User.name = 'User' // not change
// console.log(User)

// Object.seal(User)
// User.name = 'User' // changed because we can change existing value 
// console.log(User)