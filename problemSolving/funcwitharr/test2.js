// 1. Ek function banao jo array ka sum return kare.

function sumOfarr() {
  const arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
}

sumOfarr();

// Ek function banao jo array ka maximum number return kare.
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const result = findMax([1, 2, 3, 4, 5]);
console.log(result); // ye explain kr

// Ek function banao jo array se duplicate values remove kare.

const duplicateArr = () => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {}
};

// Ek function banao jo array ko reverse kare bina built-in reverse() use kiye.

// Ek function banao jo array ke andar odd numbers return kare.
function oddNum() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const getNum = num.filter((item) => item % 2 !== 0);
  console.log(getNum);
}

oddNum();
