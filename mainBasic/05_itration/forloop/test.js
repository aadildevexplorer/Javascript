// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;

//   if (element === 5) {
//     console.log("5 is Best");
//   }

//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`Inner loop value: ${j} and Outer loop value: ${i}`);
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// const myArr = ["Hero", "Super Hero", "Flash"];
// console.log(myArr.length);

// for (let i = 0; i < myArr.length; i++) {
//   const element = myArr[i];
//   console.log(element);
// }

// // break and continou

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log("5 is detected");
//     continue;
//   }
//   console.log(`Value is ${i}`);
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

const findMaximumArr = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const result = findMaximumArr([1, 2, 3, 4, 5]);
console.log(result);
