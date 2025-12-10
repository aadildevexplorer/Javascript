function calculateNumber(...num1) {
  return num1;
}

// console.log(calculateNumber(2, 3, 4));

// function with object

const user = {
  username: "aadil",
  price: 299,
};

function handleObject(anyObject) {
  console.log(
    `userName is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// 1
handleObject(user);

// 2
// handleObject({
//   username: "aaedil",
//   price: 2939,
// });

// function with array

const arr = [1, 2, 3, 4, 5];
function handleArray(anyArray) {
  return anyArray[2];
}

console.log(handleArray(arr));
