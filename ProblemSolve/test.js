// 1. Write a function that takes two numbers and returns their sum.

// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 2));

// 2. Write a function that checks whether a number is even or odd.

const evenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(evenOdd(1)); // odd
console.log(evenOdd(2)); // even

// const num = [5];

// if (num % 2 === 0) {
//   true;
// } else (num % 2 !== 0)(false);

// console.log(num);
// const evenORodd = num.filter((item) => item % 2 !== 0 || item % 2 === 0);
// console.log(evenORodd);

// ex - 2
// const evenodd = [1]

// 3. Write a function that reverses a given string.

// const reverseString = (str) => {

//     const rvrs = str.split("").reverse().join("");
//     return rvrs;
// };

// const result = reverseString("hello");
// console.log(result);

// 4. Write a function that finds the largest number in an array.

const findMaximumNumber = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max;
};

const result = findMaximumNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

// find after second indexing max number

// const findMaximumNumber = (arr) => {
//   let max = arr[2];

//   for (let i = 3; i < arr.length; i++) {
//     if (arr[i][2] > max) {
//       max = arr[i][2];
//     }
//   }

//   return max;
// };

// const result = findMaximumNumber([1, 2, 39, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);
