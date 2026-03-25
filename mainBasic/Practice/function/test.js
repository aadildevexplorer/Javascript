function greet(username) {
  return `my name is ${username}`;
}

console.log(greet("programmer"));

// function with obj
const obj = {
  name: "John Doe",
  email: "user@gmail.com",
};

function calculateObj(anyObj) {
  console.log(`my name is ${anyObj.name} and my email ${anyObj.email}`);
}
calculateObj(obj);

// function with array
const arr = [200, 300, 400, 500];
function calculateArr(anyArr) {
  return anyArr[2];
}

console.log(calculateArr(arr));
