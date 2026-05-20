// const obj = {
//   name: "Rahul",
//   age: 22,
// };

// const cloneObj = {...obj}
// console.log(cloneObj)

const user = {
  name: "Aman",
  address: {
    city: "Indore"
  }
};

const copy = { ...user };
// console.log(copy)
console.log(user.address === copy.address);