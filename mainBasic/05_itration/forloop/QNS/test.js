// Print numbers from 1 to 50, but:
// If number is divisible by 3, print "Fizz"
// If divisible by 5, print "Buzz"
// If divisible by both 3 and 5, print "FizzBuzz"
// Otherwise print the number

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }

  if (i % 5 === 0) {
    console.log("Buzz");
  }
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz");
  }
}

// 🔹 Question 2
// You are given an array:
// Using a for loop:
// Find the largest number
// Find the sum of all numbers

const findMaximumArr = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const findAllNumbers = () => {
  const numbers = [5, 12, 7, 20, 3, 15, 8];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
};

findAllNumbers();

const result = findMaximumArr([5, 12, 7, 20, 3, 15, 8]);
console.log(result);
