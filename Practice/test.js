function add(a, b) {
  return a + b;
}

// console.log(add(50, 24));

const arr = [1, 2, 3, 4, 5];
// const result = arr.find((item) => item === 3);

const result = arr.find((item) => {
  if (item === 3) {
    return true;
  } else {
    return false;
  }
});

console.log(result);
