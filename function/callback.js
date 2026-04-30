// Callback function wo function hota hai jo kisi doosre function
// ko argument me pass kiya jata hai, aur baad me call kiya jata hai.

// sayBye ek callback function hai
// greet function usko baad me call kar raha hai
2
function greet(name, callback) {
  console.log("Hello" + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Programmer", sayBye);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

// console.log(a)
// const a = 90

func();

function func() {
  console.log("ers");
}

Object.groupBy;
Map.groupBy;

const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const finalArr = [...arr1, ...arr2];
console.log(finalArr);
