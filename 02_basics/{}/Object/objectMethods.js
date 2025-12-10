// Object.keys()
const obj = {
  name: "aadil",
  age: 20,
};

console.log(Object.keys(obj)); // [ 'name', 'age' ]

// Object.values()
const vObj = {
  name: "aadil",
  age: 20,
};

console.log(Object.values(vObj)); // [ 'aadil', 20 ]

// Object.entries()
const eObj = {
  name: "aadil",
  age: 20,
};

console.log(Object.entries(eObj)); // [ [ 'name', 'aadil' ], [ 'age', 20 ] ]

// Object.freeze()
const fObj = {
  name: "aadil",
  age: 20,
};

Object.freeze(fObj);
fObj.value = 123;
console.log(fObj); // { name: 'aadil', age: 20 }

// Object.seal()
const sObj = {
  name: "aadil",
  age: 20,
};

Object.seal(sObj);
delete sObj.name;
sObj.value = 123;
sObj.name = "Dev";
console.log(sObj); // { name: 'Dev', age: 20 }
