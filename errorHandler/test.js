let x = 5;

try {
  x = y + 1;
} catch (error) {
  let text = error.name;
}

console.log(x);

// function expression

// let func = function name(greet) {
//   return greet;
// };

// func()
// console.log(name(3));

func();
let func = function store() {
  console.log("Hello world");
};
