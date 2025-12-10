// Ek function banao jo array ka sum return kare.

function addarr() {
  const add = [1, 2, 3, 4, 5, 5];
  const a = add.reduce((curr, prev) => curr + prev, 0);
  console.log(a);
}

addarr();

// Ek function banao jo do arrays lega aur unko merge karke sorted array return kare.
function mergeArr() {
  const arr1 = [5, 4, 3, 1, 1, 5, 7, 5];
  const arr2 = [3, 5, 5, 3, 9, 7, 5];

  const finalArr = [...arr1, ...arr2];
  const sortedArr = finalArr.sort((a, b) => b - a);
  console.log(sortedArr);
}

mergeArr();

// Ek function banao jo array ko flatten kare (multi-level nested array ko single array me).
function fltnArr() {
  const arr = [1, 2, 3, [1, 2, [3, 2, [3, 2, [3, 2, [3, 2, [3, 2, [3, 2]]]]]]]];
  console.log(arr.flat(7));
}

fltnArr();

// Ek function banao jo array me check kare ke target element present h ya nahi.
// wrong way
// function checkTargetElement() {
//   const arr = [1, 2, 3, 4, 5];
//   if (arr[i] === 1) {
//     console.log("I am presentable element in arr");
//   } else {
//     console.log("I am not targetable element in arr");
//   }
// }

// checkTargetElement();

function checkTargetElement(target) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (arr.includes(target)) {
    console.log("I am targetable element");
  } else {
    console.log("I am not targetable element");
  }
}

checkTargetElement(22);

// Ek function banao jo array me se sirf unique elements return kare (index checking logic se).
function uniqueArr() {
  const arr = [1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      console.log("unique element");
    } else {
      console.log("no");
    }
  }
}

uniqueArr();

// Ek function banao jo array ko reverse kare bina built-in reverse() use kiye.

function rvrse() {
  const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const arrRvrse = arr.reverse();
  console.log(arrRvrse);
}

rvrse();
// isme ye bata ke without method kese karenge

// Ek function banao jo array ke andar odd numbers return kare.
function oddArr() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const num = arr.filter((item) => item % 2 !== 0);
  console.log(num);
}

oddArr();

// Ek function banao jo array ke objects ko specific key ke basis par filter kare.
function filteredObj() {
  const obj = [
    { name: "user1", age: 35 },
    { name: "user2", age: 32 },
    { name: "user3", age: 10 },
  ];
  const ky = obj.filter((item) => item.age > 10).map((item) => item.age);
  console.log(ky);
}

filteredObj();
